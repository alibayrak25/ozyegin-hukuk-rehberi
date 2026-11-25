const byId = id => document.getElementById(id);
const acarProfile = {
  name: "Ayşe Ece Acar",
  role: "Dr. Öğr. Üyesi",
  field: "Medeni Usul ve İcra İflas Hukuku",
  bio: "Elektronik delil ve tebligat, hukuk yargılaması ve istinaf, haciz ve malvarlığı hukuku üzerine çalışıyor.",
  universityUrl: "https://www.ozyegin.edu.tr/tr/akademik-kadro/eceacar",
  yokUrl: yok,
  themes: acarThemes,
  works: acarWorks,
  featured: "kripto-haciz",
  summary: {
    areas: [
      ["Elektronik delil ve tebligat", "E-imzalı belgelerin delil gücü ve UETS kayıtları"],
      ["Yargılama usulü ve istinaf", "Tanık listeleri, e-duruşma ve icra mahkemesi kararları"],
      ["Haciz ve malvarlığı", "Kripto para, özel koleksiyon ve hayvan haczi"]
    ],
    recent: "2025–2026 çalışmalarında ilk derece yargılamasında tanık listesinin zamanlamasına ve ön inceleme duruşmasına uzaktan katılıma odaklanıyor.",
    example: "tanik",
    exampleLabel: "Tanık listesi ne zaman sunulur?"
  },
  themeNotes: {
    digital: "Elektronik imza, UETS ve e-duruşma",
    procedure: "Tanık listesi, ihtiyati tedbir ve istinaf",
    enforcement: "Kripto, koleksiyonlar, hayvan haczi ve nafaka",
    heritage: "Kültür varlıkları ve UNESCO",
    economy: "Türkiye’de uluslararası ekonomi hukukunun uygulanması"
  }
};
const profiles = new Map([["ayse-ece-acar", acarProfile], ["elif-altinok-caliskan", elifProfile], ["hamide-bagceci-danaci", hamideProfile], ["sukriye-esra-baskan", esraProfile], ["seyma-cebeci-bingol", seymaProfile], ["ozlem-yenerer-cakmut", ozlemProfile]]);
const locationUrl = new URL(window.location.href);
const embeddedPage = window.self !== window.top;
const hashProfile = decodeURIComponent(locationUrl.hash.slice(1));
const requestedProfile = locationUrl.searchParams.get("hoca") || (profiles.has(hashProfile) ? hashProfile : null);
const profile = profiles.get(requestedProfile) || acarProfile;
const {themes, works, themeNotes} = profile;
const sortedWorks = [...works].sort((first, second) => second.year - first.year);
const smallScreen = matchMedia("(max-width: 730px)");
const selectedDetail = byId("detail");
const featuredWork = sortedWorks.find(work => work.id === profile.featured) || sortedWorks[0];
let selected = featuredWork;
let activeView = "themes";

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
    section.dataset.theme = id;
    section.open = featuredWork.topics[0] === id;
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
  if (showingThemes && !selected) showWork(featuredWork);
  if (!showingThemes) renderList();
}

function renderProfileSummary() {
  const {areas, recent, example, exampleLabel} = profile.summary;
  const card = byId("profile-card");
  const panel = byId("profile-summary");
  const toggle = byId("summary-toggle");
  const exampleButton = byId("summary-example");
  const exampleWork = sortedWorks.find(work => work.id === example);

  for (const [label, description] of areas) {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    const text = document.createElement("span");
    title.textContent = label;
    text.textContent = description;
    item.append(title, text);
    byId("summary-themes").append(item);
  }
  byId("summary-recent").textContent = recent;
  exampleButton.textContent = `Örnek çalışma · ${exampleLabel}`;
  exampleButton.hidden = !exampleWork;

  function toggleSummary() {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    byId("summary-toggle-label").textContent = open ? "Hoca özetini kapat" : "Hoca özetini aç";
    if (open) panel.scrollIntoView({block: "nearest"});
  }

  toggle.addEventListener("click", toggleSummary);
  card.addEventListener("click", event => {
    if (!event.target.closest("button, a") && !window.getSelection()?.toString()) toggleSummary();
  });
  exampleButton.addEventListener("click", () => {
    if (!exampleWork) return;
    switchView("themes");
    const theme = byId("theme-view").querySelector(`[data-theme="${exampleWork.topics[0]}"]`);
    if (theme) theme.open = true;
    showWork(exampleWork);
    selectedDetail.focus({preventScroll: true});
    selectedDetail.scrollIntoView({block: "nearest"});
  });
}

for (const [id, value] of profiles) byId("academic-picker").add(new Option(value.name, id));
byId("academic-picker").value = profiles.has(requestedProfile) ? requestedProfile : "ayse-ece-acar";
byId("academic-picker").addEventListener("change", event => {
  if (embeddedPage) {
    window.location.hash = event.target.value;
    return;
  }
  locationUrl.searchParams.set("hoca", event.target.value);
  window.location.assign(locationUrl.href);
});
window.addEventListener("hashchange", () => {
  const next = decodeURIComponent(window.location.hash.slice(1));
  if (profiles.has(next) && next !== requestedProfile && !locationUrl.searchParams.get("hoca")) window.location.reload();
});
document.title = `${profile.name} | Özyeğin Hukuk Akademisyen Rehberi`;
byId("hero-name").textContent = profile.name;
byId("hero-role").textContent = profile.role || "Dr. Öğr. Üyesi";
byId("hero-field").textContent = profile.field;
byId("hero-bio").textContent = profile.bio;
byId("university-profile").href = profile.universityUrl;
byId("yok-profile").href = profile.yokUrl;
if (profile.audit?.length) {
  byId("source-audit").hidden = false;
  for (const [label, note, url] of profile.audit) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = label;
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    item.append(link, ` — ${note}`);
    byId("audit-list").append(item);
  }
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
renderProfileSummary();
