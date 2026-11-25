const meldaUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/meldakose";
const meldaYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=E496AACFAB53984C";
const meldaThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";
const meldaTez = (no, slug, yazar, yil, baslik, uni, durum, topics, tags, question, note) =>
  [`tez-${slug}`, yil, "Tez danışmanlığı", "YÖK künyesi", baslik, topics, tags, question, `${yazar}, ${uni} yüksek lisans tezi${no ? ` (Tez No ${no})` : ''}, ${durum}. Danışman Melda Köse. ${note}`, no ? meldaThesisSearch : meldaYokUrl];

const meldaWorks = [
  ["temel-haklar-2003", 2003, "Makale", "Künye", "Türk Anayasa Hukukunda Temel Hak ve Hürriyetlerin Sınırlanması Rejimi ve 4709 Sayılı Kanunla Anayasada Yapılan Değişiklikler", ["rights","constitution"], "Temel hakların sınırlanması · 2001 Anayasa değişikliği · 4709 sayılı Kanun · 1982 Anayasası m. 13", "2001 Anayasa değişikliği temel hak ve hürriyetlerin sınırlanma rejimini nasıl değiştirdi?", "Maltepe Üniversitesi Hukuk Fakültesi Dergisi, 2003 (Melda Köse Marduç adıyla). YÖK’e göre endekste taranmıyor; cilt, sayı ve sayfa bilgisi YÖK’te yok ve metin çevrimiçi bulunamadı.", meldaYokUrl],
  ["yl-tezi", 2005, "Yüksek lisans tezi", "YÖK künyesi", "Thomas Hobbes ve John Locke’un Mülkiyet Anlayışı Karşılaştırması", ["theory"], "Mülkiyet hakkı · Hobbes · Locke · Siyaset felsefesi · Galatasaray", "Hobbes ve Locke mülkiyeti nasıl temellendirir ve aralarındaki fark nedir?", "Galatasaray Üniversitesi Sosyal Bilimler Enstitüsü Kamu Hukuku yüksek lisans tezi. Yılı kaynaklara göre değişiyor: Özyeğin biyografisi 2004, Galatasaray AVESIS kaydı (OpenAlex üzerinden) 2005, YÖK öğrenim bilgisi 2002–2006 diyor. Tez Merkezi’nde kaydı bulunamadı.", meldaYokUrl],
  ["hobbes-locke-makale", 2006, "Makale", "Künye", "Hobbes ve Locke’un Mülkiyet Anlayışı Karşılaştırması", ["theory"], "Mülkiyet hakkı · Toplum sözleşmesi · Hobbes · Locke", "İki toplum sözleşmesi kuramcısı mülkiyeti devletten önce mi sonra mı görür?", "Yüksek lisans tezinden türeyen makale. Maltepe Üniversitesi Hukuk Fakültesi Dergisi, 2006 (Melda Köse Marduç adıyla). YÖK’e göre endekste taranmıyor; metin çevrimiçi bulunamadı. Tezden ayrı bir yayın olduğu için ayrı sayıldı.", meldaYokUrl],
  ["doktora-tezi", 2015, "Doktora tezi", "Tez özeti", "Uluslararası Belgelerde ve Anayasalarda Hukuki ve Siyasal Eşitlik Bağlamında Kadın", ["gender","constitution"], "Kadın hakları · Siyasal eşitlik · CEDAW · Seçme ve seçilme hakkı · Tez 415671", "Kadınların hukuki ve siyasal eşitliği uluslararası sözleşmelerde ve anayasalarda nasıl güvenceye alınıyor, uygulamada nerede geride kalıyor?", "Kadın haklarını evrensel insan haklarının ayrılmaz parçası olarak ele alıyor; kadın haklarının önce uluslararası alanda geliştiğini, Türkiye’de CEDAW’ın yürürlüğe girmesinden sonra kadına yönelik politikaların hızlandığını anlatıyor. Kadınlar aleyhine en belirgin ayrımın seçme ve seçilme hakkında olduğunu, yasal güvenceye rağmen bu hakların erkeklerle aynı oranda hayata geçmediğini vurguluyor. Marmara Üniversitesi Sosyal Bilimler Enstitüsü Kamu Hukuku, danışman Prof. Dr. Bihterin Dinçkol (Tez Merkezi’nde “Melda Köse Marduç” adıyla).", meldaThesisSearch],
  ["dogu-bati", 2018, "Makale", "Künye", "Kadının Hukuksal ve Siyasal Eşitlik Anlayışına Doğu Batı Perspektifinden Bir Bakış", ["gender"], "Kadın hakları · Siyasal eşitlik · Doğu ve Batı düşüncesi", "Doğu ve Batı düşünce gelenekleri kadının hukuksal ve siyasal eşitliğine nasıl bakmıştır?", "Maltepe Üniversitesi Hukuk Fakültesi Dergisi 17(2), s. 65–92, ISSN 1303-5630. YÖK TR Dizin olarak işaretliyor, ama TR Dizin’de başlık ve yazar aramasında çıkmadı; metin de çevrimiçi bulunamadı.", meldaYokUrl],
  ["kadin-hareketleri", 2024, "Bildiri", "Künye", "Antik Çağdan Günümüze Kadın Hareketleri", ["gender"], "Kadın hareketleri · Feminizm tarihi · 8 Mart", "Kadınların hak mücadelesi Antik Çağ’dan bugüne nasıl gelişti?", "Toplumsal Cinsiyet Eşitliği Kadın ve Hukuk Sempozyumu, 8 Mart 2024, tam metin bildiri. Düzenleyen kurum ve bildiri kitabı çevrimiçi bulunamadı; künye YÖK’ten.", meldaYokUrl],
  ["anayasalarda-kadin", 2025, "Bildiri", "Künye", "Türk Anayasalarında Hukuksal ve Siyasal Eşitlik Bağlamında Kadın", ["gender","constitution"], "Türk anayasaları · Kadın hakları · Siyasal eşitlik", "1876’dan 1982’ye Türk anayasaları kadınların hukuksal ve siyasal eşitliğini nasıl düzenledi?", "Toplumsal Cinsiyet Eşitliği Kadın ve Hukuk Sempozyumu, 6 Mart 2025, tam metin bildiri. Bildiri kitabı çevrimiçi bulunamadı; künye YÖK’ten.", meldaYokUrl],
  meldaTez(528720, "528720", "Meryem Korkmaz", 2018, "Antik Yunan’dan Günümüze Devlet", "Maltepe Üniversitesi", "tamamlandı", ["theory"], "Devlet kuramı · Siyasal düşünce tarihi", "Devlet kavramı Antik Yunan’dan bugüne nasıl değişti?", "YÖK’te ve Tez Merkezi’nde kayıtlı."),
  meldaTez(607997, "607997", "Hakan Bakar", 2019, "1982 Anayasasında Olağanüstü Hal Rejiminin Masumiyet İlkesi Açısından Değerlendirilmesi", "Maltepe Üniversitesi", "tamamlandı", ["rights","constitution"], "Olağanüstü hal · Masumiyet karinesi · 1982 Anayasası", "Olağanüstü hal tedbirleri masumiyet karinesiyle nasıl bağdaşır?", "YÖK’te ve Tez Merkezi’nde kayıtlı."),
  meldaTez(602207, "602207", "Handan Ceylan", 2019, "Türkiye’de Kadına Yönelik Şiddetin Kadının Toplumsal ve Siyasal Hayatındaki Etkisinin İnsan Hakları Açısından Değerlendirilmesi", "Maltepe Üniversitesi", "tamamlandı", ["gender","rights"], "Kadına yönelik şiddet · Siyasal katılım · İnsan hakları", "Şiddet kadınların toplumsal ve siyasal hayata katılımını nasıl etkiliyor?", "YÖK’te ve Tez Merkezi’nde kayıtlı."),
  meldaTez(630113, "630113", "İlhan Özdemir", 2020, "Adil Yargılanma Hakkı Çerçevesinde Yargı Bağımsızlığı", "Maltepe Üniversitesi", "tamamlandı", ["rights"], "Adil yargılanma · Yargı bağımsızlığı · AİHS m. 6", "Yargı bağımsızlığı adil yargılanma hakkının neresinde durur?", "YÖK’te ve Tez Merkezi’nde kayıtlı."),
  meldaTez(665934, "665934", "Ali Cengizhan Kılıç", 2021, "Avrupa İnsan Hakları Mahkemesi Kararları Ekseninde Toplantı ve Gösteri Yürüyüşü Düzenleme Hakkının Kapsamı", "Maltepe Üniversitesi", "tamamlandı", ["rights"], "Toplantı özgürlüğü · AİHS m. 11 · AİHM içtihadı", "AİHM toplantı ve gösteri yürüyüşü hakkının sınırlarını nasıl çiziyor?", "YÖK’te ve Tez Merkezi’nde kayıtlı."),
  meldaTez(null, "vergisel-mudahale", "Emircan Dilber", 2024, "Vergisel Müdahalelerin Avrupa İnsan Hakları Mahkemesi Kararları Çerçevesinde Değerlendirilmesi", "Özyeğin Üniversitesi", "devam ediyor", ["rights"], "Mülkiyet hakkı · Vergilendirme · AİHM · 1 No’lu Protokol", "Vergi uygulamaları ne zaman mülkiyet hakkına aykırı bir müdahale olur?", "YÖK’te başlangıç yılı 2024; Tez Merkezi’nde henüz kaydı yok."),
  meldaTez(null, "sosyal-sinif", "Ahmet Barış Seçgin", 2026, "Sosyal Sınıf: Kuram ve Uygulama Temelinde Bir İnceleme", "Özyeğin Üniversitesi", "devam ediyor", ["theory"], "Sosyal sınıf · Siyaset kuramı", "Sosyal sınıf kavramı kuramda ve uygulamada nasıl tanımlanıyor?", "YÖK’te başlangıç yılı 2026; Tez Merkezi’nde henüz kaydı yok.")
];

const meldaProfile = {
  name: "Melda Köse",
  role: "Dr. Öğr. Üyesi",
  field: "Genel Kamu Hukuku",
  bio: "Genel kamu hukuku, insan hakları ve siyasal düşünce üzerine çalışıyor; kadınların hukuksal ve siyasal eşitliği öne çıkan konusu. Maltepe Hukuk mezunu (2001). Galatasaray’da Hobbes ve Locke’un mülkiyet anlayışı üzerine yüksek lisans, Marmara’da kadınların anayasal ve siyasal eşitliği üzerine doktora (2015) yaptı. 2001’de Maltepe’de araştırma görevlisi olarak başladı; orada Genel Kamu Hukuku Anabilim Dalı başkanlığı ve dekan yardımcılığı yaptı. 18 Temmuz 2022’den beri Özyeğin Hukuk’ta. Yayınlarında “Melda Köse Marduç” adı da geçiyor.",
  universityUrl: meldaUniversityUrl,
  yokUrl: meldaYokUrl,
  featured: "doktora-tezi",
  summary: {
    areas: [
      ["Kadın hakları ve eşitlik", "Uluslararası belgelerde ve anayasalarda kadınların hukuksal ve siyasal eşitliği, kadın hareketleri"],
      ["Temel haklar", "Hakların sınırlanması rejimi ve AİHM içtihadı üzerine yönetilen tezler"],
      ["Devlet ve siyaset kuramı", "Hobbes ve Locke’ta mülkiyet, devlet kuramı ve sosyal sınıf"]
    ],
    recent: "2024 ve 2025’te Toplumsal Cinsiyet Eşitliği Kadın ve Hukuk Sempozyumu’nda kadın hareketleri ve Türk anayasalarında kadının eşitliği üzerine bildiriler sundu. Özyeğin’de AİHM kararlarında vergisel müdahaleler ve sosyal sınıf üzerine iki tez danışmanlığı sürüyor.",
    example: "anayasalarda-kadin",
    exampleLabel: "Türk anayasaları kadınlara eşitliği nasıl tanıdı?"
  },
  themes: {
    gender: "Kadın hakları ve eşitlik",
    rights: "Temel haklar ve AİHM",
    constitution: "Anayasa hukuku",
    theory: "Devlet ve siyaset kuramı"
  },
  themeNotes: {
    gender: "Hukuksal ve siyasal eşitlik, CEDAW, kadın hareketleri ve kadına yönelik şiddet",
    rights: "Hakların sınırlanması, adil yargılanma, toplantı özgürlüğü ve vergisel müdahaleler",
    constitution: "2001 değişikliği, olağanüstü hal ve anayasalarda kadın",
    theory: "Hobbes ve Locke’ta mülkiyet, devlet kuramı ve sosyal sınıf"
  },
  works: meldaWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026’da kontrol edildi. Unvan Dr. Öğr. Üyesi, alan Genel Kamu Hukuku. 18 Temmuz 2022’den beri Özyeğin’de. Sayfada yayın listesi ya da özgeçmiş dosyası yok.", meldaUniversityUrl],
    ["YÖK Akademik", "Kayıt E496AACFAB53984C, ORCID 0000-0002-7715-9613. Aynı adla Ege Üniversitesi’nde başka bir akademisyen var; Özyeğin kaydı seçildi. 5 yayın (3 makale, 2 bildiri), 7 tez danışmanlığı (5 tamamlanmış, 2 devam eden). Proje, ödül ve kitap yok.", meldaYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Doktora tezi 415671 “Melda Köse Marduç” adıyla kayıtlı. Danışman olarak “Melda Köse” ve “Marduç” aramalarında YÖK’teki 5 tamamlanmış tez çıktı; fazlası yok. Galatasaray yüksek lisans tezi Tez Merkezi’nde bulunamadı.", meldaThesisSearch],
    ["TR Dizin", "Bu yazara ait kayıt bulunamadı. YÖK’ün TR Dizin diye işaretlediği 2018 makalesi başlık aramasında da çıkmadı; çıkan “Melda” ve “Köse” kayıtları tıp ve mühendislik alanında başka kişilere ait.", "https://search.trdizin.gov.tr/"],
    ["DergiPark", "Doğrudan arama kullanılmadı (CAPTCHA). Ad varyantları ve tam başlıklarla yapılan web aramalarında Maltepe Hukuk Dergisi’ndeki makalelerin çevrimiçi sayfası bulunamadı.", "https://dergipark.org.tr/"],
    ["Crossref, OpenAlex ve ORCID", "ORCID kaydı herkese açık eser göstermiyor. OpenAlex’te Galatasaray AVESIS’ten gelen 2005 yüksek lisans tezi kaydı bulundu. Aynı adlı diğer OpenAlex ve Crossref kayıtları peyzaj mimarlığı alanında başka bir Melda Köse’ye ait; sayılmadı.", "https://orcid.org/0000-0002-7715-9613"],
    ["Google Akademik", "Profil yok. Aramada doktora tezi ve danışmanı olduğu tezler (ProQuest kayıtları) çıktı. Maltepe’nin 2021 Kamu Hukuku Sempozyumu kitabında yalnız kurul üyesi olarak geçiyor; bildirisi yok, sayılmadı.", "https://scholar.google.com/scholar?q=%22Melda+K%C3%B6se%22"],
    ["Özyeğin eResearch", "Yalnız kişi kaydı var (hdl 10679/9392), bağlı yayın yok.", "https://eresearch.ozyegin.edu.tr/"],
    ["Projeler ve CORDIS", "YÖK proje kaydı yok. CORDIS’te “Melda Köse” 0 sonuç verdi.", "https://cordis.europa.eu/search?q=%27Melda%20K%C3%B6se%27"],
    ["Okunamayan metinler", "Üç Maltepe makalesi ve iki sempozyum bildirisi çevrimiçi bulunamadı; bunlar künye düzeyinde bırakıldı.", meldaYokUrl]
  ]
};
