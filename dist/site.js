const byId = id => document.getElementById(id);
const sortedWorks = [...works].sort((first, second) => second.year - first.year);
const smallScreen = matchMedia("(max-width: 730px)");
const selectedDetail = byId("detail");
let selected = sortedWorks.find(work => work.id === "kripto-haciz");
let activeView = "themes";
const themeNotes = {
  digital: "Elektronik imza, UETS ve e-duruşma",
  procedure: "Tanık listesi, ihtiyati tedbir ve istinaf",
  enforcement: "Kripto, koleksiyonlar, hayvan haczi ve nafaka",
  heritage: "Kültür varlıkları ve UNESCO",
  economy: "Türkiye’de uluslararası ekonomi hukukunun uygulanması"
};

function normalize(value) {
  return value.toLocaleLowerCase("tr-TR").replaceAll("ı", "i").normalize("NFD").replace(/\p{M}/gu, "");
}

const searchIndex = new Map(sortedWorks.map(work => [work.id, normalize([
  work.title, work.tags, work.question, work.finding, work.type, work.date,
  ...work.topics.map(topic => themes[topic])
].join(" "))]));

function filterWorks({query = "", theme = "", type = "", year = ""} = {}) {
  const terms = normalize(query).trim().split(/\s+/u).filter(Boolean);
  return sortedWorks.filter(work =>
    (!theme || work.topics.includes(theme)) &&
    (!type || work.type === type) &&
    (!year || work.date.includes(year)) &&
    terms.every(term => searchIndex.get(work.id).includes(term))
  );
}

function makeWorkRow(work, inTheme) {
  const row = document.createElement("li");
  const button = document.createElement("button");
  const label = document.createElement("span");
  const meta = document.createElement("small");
  button.type = "button";
  button.dataset.work = work.id;
  button.setAttribute("aria-pressed", String(work === selected));
  label.textContent = inTheme ? work.tags.split(" · ")[0] : work.title;
  meta.textContent = `${work.date} · ${work.type}`;
  button.append(label, meta);
  button.addEventListener("click", () => showWork(work, true));
  row.append(button);
  return row;
}

function showWork(work, moveToDetail = false) {
  selected = work;
  selectedDetail.hidden = !work;
  for (const button of document.querySelectorAll("[data-work]")) {
    button.setAttribute("aria-pressed", String(button.dataset.work === work?.id));
  }
  if (!work) return;
  byId("detail-kind").textContent = `${work.date} · ${work.type}`;
  byId("detail-evidence").textContent = work.evidence;
  byId("detail-title").textContent = work.title;
  byId("detail-question").textContent = work.question;
  byId("detail-finding").textContent = work.finding;
  byId("detail-tags").textContent = work.tags;
  byId("source").href = work.url;
  if (moveToDetail && smallScreen.matches) {
    selectedDetail.focus({preventScroll: true});
    selectedDetail.scrollIntoView({block: "start"});
  }
}

function renderThemes() {
  for (const [id, name] of Object.entries(themes)) {
    const matching = filterWorks({theme: id});
    const section = document.createElement("details");
    const heading = document.createElement("summary");
    const symbol = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const note = document.createElement("small");
    const count = document.createElement("span");
    const list = document.createElement("ul");
    section.className = `topic topic-${id}`;
    section.open = id === "enforcement";
    symbol.className = "topic-symbol";
    symbol.setAttribute("aria-hidden", "true");
    copy.className = "topic-copy";
    title.textContent = name;
    note.textContent = themeNotes[id];
    copy.append(title, note);
    count.className = "count";
    count.textContent = `${matching.length} kayıt`;
    heading.append(symbol, copy, count);
    list.className = "work-list";
    list.append(...matching.map(work => makeWorkRow(work, true)));
    section.append(heading, list);
    byId("theme-view").append(section);
  }
}

function renderList() {
  const results = filterWorks({
    query: byId("query").value,
    theme: byId("theme-filter").value,
    type: byId("type-filter").value,
    year: byId("year-filter").value
  });
  byId("result-count").textContent = results.length ? `${results.length} / ${works.length} kayıt` : "Aramana uyan çalışma yok.";
  byId("work-list").replaceChildren(...results.map(work => makeWorkRow(work, false)));
  if (activeView === "works" && !results.includes(selected)) showWork(results[0]);
}

function switchView(view) {
  activeView = view;
  const showingThemes = view === "themes";
  byId("themes-tab").setAttribute("aria-pressed", String(showingThemes));
  byId("works-tab").setAttribute("aria-pressed", String(!showingThemes));
  byId("theme-view").hidden = !showingThemes;
  byId("works-view").hidden = showingThemes;
  if (showingThemes && !selected) showWork(sortedWorks.find(work => work.id === "kripto-haciz"));
  if (!showingThemes) renderList();
}

for (const [id, name] of Object.entries(themes)) byId("theme-filter").add(new Option(name, id));
for (const type of new Set(sortedWorks.map(work => work.type))) byId("type-filter").add(new Option(type, type));
const years = new Set(works.flatMap(work => work.date.match(/\b\d{4}\b/g) || []));
for (const year of [...years].sort((first, second) => Number(second) - Number(first))) {
  byId("year-filter").add(new Option(year, year));
}

byId("total").textContent = works.length;
byId("themes-tab").addEventListener("click", () => switchView("themes"));
byId("works-tab").addEventListener("click", () => switchView("works"));
byId("search-shortcut").addEventListener("click", () => {
  switchView("works");
  byId("query").focus();
});
byId("query").addEventListener("input", renderList);
for (const id of ["theme-filter", "type-filter", "year-filter"]) byId(id).addEventListener("change", renderList);
byId("filters").addEventListener("submit", event => event.preventDefault());
byId("filters").addEventListener("reset", () => requestAnimationFrame(renderList));

renderThemes();
renderList();
showWork(selected);
