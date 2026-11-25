const akinUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/akinkivrakdal";
const akinYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=62C53C9C2CB16DA5";
const akinThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";

const akinWorks = [
  ["isletme-gerekleri", 2018, "Doktora tezi", "Tez özeti", "İşletme Gerekleri ile İş Sözleşmesinin Feshi", ["individual"], "İş güvencesi · Geçerli sebep · 4857 sayılı İş Kanunu · Yargısal denetim · Tez 495854", "İşveren işletme, işyeri ya da işin gereklerine dayanarak iş sözleşmesini ne zaman feshedebilir ve mahkeme bu kararı ne ölçüde denetler?", "İş güvencesi kapsamındaki işçilerin sözleşmelerinin haklı sebep yoksa ancak geçerli sebeple feshedilebildiğini, işletme gereklerine dayanan fesihlerde işçinin güvenceden tam yararlanabilmesi için mahkeme denetiminin belirleyici olduğunu anlatıyor. Geçerli sebepleri, İş Kanunu gerekçesi ve Yargıtay kararlarındaki ayrıma uyarak işyeri içi ve işyeri dışı sebepler olarak inceliyor; mahkemelerin uyguladığı denetim ilkelerini doktrin ve Yargıtay kararlarıyla açıklıyor. İstanbul Üniversitesi Sosyal Bilimler Enstitüsü Özel Hukuk Anabilim Dalı, danışman Prof. Dr. Ömer Ekmekçi. Tam metin İÜ kütüphanesinde açık.", "https://nek.istanbul.edu.tr/ekos/TEZ/57536.pdf"],
  ["vergi-kanun-yollari", 2006, "Yüksek lisans tezi", "YÖK künyesi", "Türk Vergi Yargısında Kanun Yolları", ["tax"], "Vergi yargısı · Kanun yolları · Mali hukuk · Tez 217939", "Vergi mahkemesi kararlarına karşı hangi kanun yollarına başvurulabilir?", "İstanbul Üniversitesi Sosyal Bilimler Enstitüsü Mali Hukuk Anabilim Dalı yüksek lisans tezi, danışman Prof. Dr. Süheyl Donay. Künye Tez Merkezi’nden; tez metni ve özeti bu çalışmada okunmadı. Google Akademik’te başka yazarların tezlerinde kaynak olarak geçiyor.", akinThesisSearch],
  ["devir-sorumluluk", 2019, "Bildiri", "Künye", "İş Sözleşmesinin Devrinde Devreden ve Devralan İşverenlerin İşçi Haklarından Sorumluluğu", ["individual"], "İş sözleşmesinin devri · İşveren sorumluluğu · İşçi alacakları", "İş sözleşmesi başka bir işverene devredildiğinde işçinin hakları için eski ve yeni işveren nasıl sorumlu olur?", "Azerbaycan Milli İlimler Akademisi Hukuk ve İnsan Hakları Enstitüsü, Özyeğin Üniversitesi Hukuk Fakültesi ve Azerbaycan Barolar Birliği işbirliğiyle düzenlenen Hukuki Sorumluluk Konusunda Uluslararası Sempozyum’da sunulan özet bildiri (2019). Özet metni ya da bildiri kitabı çevrimiçi bulunamadı; künye YÖK’ten.", akinYokUrl],
  ["tez-860261", 2024, "Tez danışmanlığı", "Tez özeti", "Sendikalar ve Toplu İş Sözleşmesi Kanunu Çerçevesinde Sendikal Güvenceler", ["collective"], "Sendika özgürlüğü · 6356 sayılı STİSK · ILO 87 ve 98 · Sendikal tazminat", "6356 sayılı Kanun sendika üyesi işçilere hangi güvenceleri getirdi?", "Gizem Sarıbaş Ansen, Özyeğin Üniversitesi yüksek lisans tezi (Tez No 860261), tamamlandı. ILO’nun eski 2821 sayılı Kanun’a eleştirileri üzerine yürürlüğe giren STİSK’in sendika özgürlüğüne ilişkin güvence hükümlerini yeniden düzenlediğini; iş güvencesi kapsamında olan ve olmayan işçiler arasında ayrım yapmadan sendikal tazminat davası açılabildiğini inceliyor. Danışman Akın Kıvrakdal (YÖK, Tez Merkezi ve eResearch).", "https://hdl.handle.net/10679/10163"],
  ["tez-dayanisma-aidati", 2024, "Tez danışmanlığı", "YÖK künyesi", "Dayanışma Aidatı", ["collective"], "Dayanışma aidatı · Toplu iş sözleşmesi · Sendika üyesi olmayan işçi", "Sendika üyesi olmayan işçi toplu iş sözleşmesinden yararlanmak için ne öder?", "Özkan Aku, Özyeğin Üniversitesi yüksek lisans tezi, devam ediyor (YÖK’te başlangıç yılı 2024). Tez Merkezi’nde henüz kaydı yok.", akinYokUrl],
  ["tez-590395", 2019, "Tez danışmanlığı", "Tez özeti", "İş Sözleşmesinin Devri", ["individual"], "İş sözleşmesinin devri · Üçlü ilişki · Devreden ve devralan işveren", "İş sözleşmesi başka işverene devredilince taraf sıfatı ve haklar nasıl geçer?", "Aybüke Yanık, Özyeğin Üniversitesi yüksek lisans tezi (Tez No 590395), tamamlandı. Devirde işçi, devreden ve devralan işveren arasında üçlü bir ilişki kurulduğunu, taraf sıfatıyla birlikte tüm hak ve borçların, fesih gibi yenilik doğuran hakların ve def’ilerin devralana geçtiğini anlatıyor. Danışman Akın Kıvrakdal (YÖK, Tez Merkezi ve eResearch).", "https://hdl.handle.net/10679/6273"]
];

const akinProfile = {
  name: "Akın Kıvrakdal",
  role: "Dr. Öğr. Üyesi",
  field: "İş ve Sosyal Güvenlik Hukuku",
  bio: "İş ve sosyal güvenlik hukuku üzerine çalışıyor; doktorasını işletme gereklerine dayanan fesih üzerine yazdı. İstanbul Üniversitesi Hukuk Fakültesi mezunu (2002). İÜ Mali Hukuk’ta yüksek lisans (2006), Bologna ve Hamburg üniversitelerinde Hukuk ve Ekonomi yüksek lisansı (2007), İÜ Özel Hukuk’ta doktora (2018) yaptı. 2007–2015 arasında özel sektörde avukatlık yaptı; 1 Mayıs 2018’den beri Özyeğin Hukuk’ta.",
  universityUrl: akinUniversityUrl,
  yokUrl: akinYokUrl,
  featured: "isletme-gerekleri",
  summary: {
    areas: [
      ["Bireysel iş hukuku", "İşletme gerekleriyle fesih, iş güvencesi ve iş sözleşmesinin devrinde işveren sorumluluğu"],
      ["Toplu iş hukuku", "Sendikal güvenceler ve dayanışma aidatı üzerine yönetilen tezler"],
      ["Mali hukuk", "Vergi yargısında kanun yolları (yüksek lisans tezi)"]
    ],
    recent: "Kayıtlı en yeni kendi çalışması 2019’da sunduğu iş sözleşmesinin devrinde işveren sorumluluğu bildirisi. 2024’te sendikal güvenceler üzerine bir tezi tamamlattı; dayanışma aidatı üzerine bir tez danışmanlığı sürüyor.",
    example: "devir-sorumluluk",
    exampleLabel: "İş sözleşmesi devredilince işçinin alacağından kim sorumlu?"
  },
  themes: {
    individual: "Bireysel iş hukuku",
    collective: "Toplu iş hukuku",
    tax: "Mali hukuk"
  },
  themeNotes: {
    individual: "İşletme gerekleriyle fesih, iş güvencesi ve iş sözleşmesinin devri",
    collective: "Sendikal güvenceler ve dayanışma aidatı",
    tax: "Vergi yargısında kanun yolları"
  },
  works: akinWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026’da kontrol edildi. Unvan Dr. Öğr. Üyesi, alan İş ve Sosyal Güvenlik Hukuku. 1 Mayıs 2018’den beri Özyeğin’de. Sayfada yayın listesi ya da özgeçmiş dosyası yok.", akinUniversityUrl],
    ["YÖK Akademik", "Kayıt 62C53C9C2CB16DA5, ORCID 0000-0002-6935-4523. Yalnız 1 yayın (2019 özet bildiri) ve 3 tez danışmanlığı (2 tamamlanmış, 1 devam eden) var. Makale, kitap, proje, ödül ve deneyim kaydı yok. Hamburg yüksek lisansı öğrenim bilgilerinde var ama tez adı yazılmamış; bu yüzden ayrı kayıt olarak eklenmedi.", akinYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Kendi iki tezi (doktora 495854, yüksek lisans 217939) ve danışmanı olduğu iki tamamlanmış tez (860261, 590395) bulundu. Devam eden dayanışma aidatı tezi henüz Tez Merkezi’nde yok.", akinThesisSearch],
    ["TR Dizin", "“Kıvrakdal” aramasında bu yazara ait yayın yok; çıkan kayıtlar tıp ve mühendislik alanında aynı soyadlı başka kişilere ait.", "https://search.trdizin.gov.tr/"],
    ["DergiPark", "Doğrudan arama kullanılmadı (CAPTCHA). Ad varyantlarıyla yapılan web ve Google Akademik aramalarında DergiPark’ta bu yazara ait makale çıkmadı.", "https://dergipark.org.tr/"],
    ["Crossref, OpenAlex ve ORCID", "ORCID kaydı herkese açık eser göstermiyor. OpenAlex ve Crossref’te bu yazara ait kayıt yok; aynı soyadlı kayıtlar başka alanlardan.", "https://orcid.org/0000-0002-6935-4523"],
    ["Google Akademik", "Profil yok. Aramada yalnız doktora tezi (İÜ kütüphanesi PDF’i) ve yüksek lisans tezine yapılan atıflar çıktı. “İş Güvencesinde Son Çare İlkesi” başka bir yazarın (A. Karademir) eseri, sayılmadı.", "https://scholar.google.com/scholar?q=%22Ak%C4%B1n+K%C4%B1vrakdal%22"],
    ["Özyeğin eResearch", "Kişi kaydı ve danışmanı olduğu iki tez (özetleriyle) var. Aynı aramada çıkan 2019 muris muvazaası tezinin danışmanları Tuğçe Tuzcuoğlu ve Ali Hulki Cihan; Kıvrakdal’a sayılmadı.", "https://eresearch.ozyegin.edu.tr/"],
    ["Projeler ve CORDIS", "YÖK proje kaydı yok. CORDIS’te “Kivrakdal” ve “Kıvrakdal” 0 sonuç verdi.", "https://cordis.europa.eu/search?q=%27Kivrakdal%27"]
  ]
};
