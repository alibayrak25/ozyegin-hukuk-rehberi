const egeUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/egegoktuna";
const egeYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=40E5B57A9E2F5FCD";
const egeThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";
const egeTr = (id) => `https://search.trdizin.gov.tr/tr/yayin/detay/${id}`;

const egeWorks = [
  // Makaleler
  ["asgari-kurumlar", 2025, "Makale", "YÖK künyesi", "Yurtiçi Asgari Kurumlar Vergisinde Geçmiş Yıl Zararlarına Yönelik Düzenlemelerin Anayasal İlkeler Açısından Değerlendirilmesi", ["corporate", "constitution"], "Yurtiçi asgari kurumlar vergisi · Geçmiş yıl zararları · Anayasal ilkeler", "Asgari kurumlar vergisinde geçmiş yıl zararlarına getirilen sınırlama anayasal ilkelere uygun mu?", "Balca Çelener ile birlikte. Legal Mali Hukuk Dergisi, sayı 248, s. 1389–1407. YÖK'e göre TR Dizin; TR Dizin aramasında henüz görünmüyor.", egeYokUrl],
  ["deniz-tasima-kdv", 2025, "Makale", "Özet", "Katma Değer Vergisi Genel Uygulama Tebliği Kapsamında Deniz Taşıma Araçlarına Uygulanacak İstisnaya Yönelik Düzenlemelerin Değerlendirilmesi", ["vat", "constitution"], "KDV istisnası · Deniz taşıma araçları · Verginin yasallığı", "Deniz taşıma araçlarına KDV istisnası için Tebliğ'le getirilen 24 metre şartı kanunun sınırlarını aşıyor mu?", "KDV Kanunu m. 13/a'daki deniz taşıma araçları istisnasının 52 Seri No'lu Tebliğ'le yük veya yolcu taşımaya elverişlilik ölçütüne bağlandığını ve yolcu araçları için 24 metre şartı getirildiğini anlatıyor; düzenlemenin verginin yasallığı ilkesine uygunluğunu, esaslı unsur ve teknik ayrıntı ayrımı üzerinden değerlendiriyor. Balca Çelener ile birlikte. Vergi Dünyası Dergisi, sayı 527, s. 20–28 (TR Dizin).", egeTr(1359662)],
  ["kkdf-gorevli-mahkeme", 2025, "Makale", "Özet", "Kaynak Kullanımı Destekleme Fonuna İlişkin Uyuşmazlıklarda İdare ya da Vergi Mahkemelerinin Görevli Mahkemenin Tespiti Meselesi", ["procedure"], "KKDF · Görevli mahkeme · Danıştay içtihadı", "KKDF kesintisine ilişkin uyuşmazlıklara idare mahkemesi mi, vergi mahkemesi mi bakmalı?", "Danıştay'ın KKDF kesintisi uyuşmazlıklarını kimi zaman idare, kimi zaman vergi mahkemelerine gönderdiğini; kesintiyi “ek mali yükümlülük” sayan yaklaşımın aynı yükümlülükten doğan uyuşmazlıkları iki ayrı yargı yerine böldüğünü eleştiriyor; fonun hukuki niteliğini ve dış ticarete etkisini inceliyor. Balca Çelener ile birlikte. Vergi Dünyası Dergisi, sayı 525, s. 37–46 (TR Dizin).", egeTr(1359607)],
  ["kdv-36-cumhurbaskani", 2023, "Makale", "Özet", "Katma Değer Vergisi Kanununun 36. Maddesinde Yer Alan İndirim ve İade Hakkı Kapsamında Cumhurbaşkanına Verilen Yetkinin Anayasal İlkeler Açısından Değerlendirilmesi", ["vat", "constitution"], "KDV indirimi ve iadesi · Cumhurbaşkanı yetkisi · Verginin yasallığı", "Cumhurbaşkanına KDV indirim ve iade hakkını kaldırma yetkisi verilmesi Anayasa'ya uygun mu?", "Anayasa'nın yürütmeye istisna, muafiyet, indirim ve oranlarda değişiklik yetkisi verilmesine izin veren istisnasını ele alıyor; Cumhurbaşkanına KDV'de indirim hakkını ve iade hakkını kaldırma yetkisi veren iki düzenlemenin anayasaya aykırılığını ve doğabilecek hak kayıplarını tartışıyor. Balca Çelener ile birlikte. Legal Mali Hukuk Dergisi, c. 19, sayı 228, s. 2555–2574 (TR Dizin), doi 10.69838/mhd.74924.", "https://doi.org/10.69838/mhd.74924"],
  ["dijital-icerik-kdv", 2013, "Makale", "Özet", "İnternet Yoluyla İndirilen Dijital İçeriklerde Katma Değer Vergisi", ["vat", "eu"], "Dijital içerik · Elektronik ticaret · AB KDV uygulaması", "İnternetten indirilen yazılım, müzik ve video gibi içerikler KDV açısından nasıl vergilendirilmeli?", "İnternetten indirilen içeriklerin vergilendirilmemesinin büyük gelir kaybına yol açtığını belirtiyor; Türkiye uygulamasını AB uygulamalarıyla karşılaştırıp çözüm önerileri sunuyor. Legal Mali Hukuk Dergisi, c. 9, sayı 98, s. 3–12 (TR Dizin).", egeTr(174676)],
  ["emlak-vergisi-devir", 2013, "Makale", "Özet", "Tasarrufu Kısıtlanan Gayrimenkullerin Kurumlar Vergisi Kanununda Yer Alan Devir, Bölünme ve Kısmi Bölünme İşlemleri Yoluyla Devrinde Emlak Vergisi", ["corporate"], "Emlak vergisi · Tasarruf kısıtlaması · Birleşme ve bölünme", "Tasarrufu kısıtlanmış taşınmaz şirket birleşmesi veya bölünmesiyle devredilince tecil edilen emlak vergisi muaccel olur mu?", "Emlak Vergisi Kanunu m. 30'a göre satış veya devirde muaccel olan tecilli verginin, kurumların yeniden yapılanmasında devrin bilanço değeri üzerinden ve hisse karşılığı yapılması nedeniyle satış sayılmayacağını, bu yüzden muaccel olmayacağını savunuyor. Legal Mali Hukuk Dergisi, c. 9, sayı 101, s. 11–21 (TR Dizin).", egeTr(174719)],
  ["birlesme-direktifi", 2012, "Makale", "YÖK künyesi", "2009/133/EC Sayılı Birleşme Direktifi Kapsamında Hakkın Kötüye Kullanılması Kavramı", ["corporate", "eu"], "AB Birleşme Direktifi · Hakkın kötüye kullanılması · Vergi kaçınması", "AB Birleşme Direktifi vergi avantajlarının kötüye kullanılmasını nasıl engelliyor?", "Galatasaray Üniversitesi Hukuk Fakültesi Dergisi, sayı 1, s. 123–138.", egeYokUrl],
  ["varlik-barisi", 2009, "Makale", "YÖK künyesi", "Varlık Barışı Kapsamında Tam Mükellef Kurumların Elde Ettikleri Yurtdışı İştirak Kazançları İstisnası", ["corporate"], "Varlık barışı · Yurtdışı iştirak kazancı · Kurumlar vergisi istisnası", "Varlık barışıyla yurda getirilen iştirak kazançları kurumlar vergisi istisnasından yararlanır mı?", "Legal Mali Hukuk Dergisi, sayı 59, s. 2197–2203.", egeYokUrl],
  ["sporcu-ucretleri", 2005, "Makale", "YÖK künyesi", "Gelir Vergisi Açısından Sporcu Ücretlerinin Değerlendirilmesi", ["income"], "Gelir vergisi · Sporcu ücretleri", "Sporculara yapılan ödemeler gelir vergisi açısından nasıl değerlendirilir?", "Balca Çelener ile birlikte. Legal Mali Hukuk Dergisi, sayı 3. Künye YÖK'ten; OpenAlex'te Galatasaray AVESIS kaydı var.", egeYokUrl],
  // Bildiriler
  ["hmb-usul-esas", 2025, "Bildiri", "YÖK künyesi", "Vergi Kanunlarında Hazine ve Maliye Bakanlığına Verilen Usul ve Esasları Belirleme Yetkisinin Sınırı", ["constitution"], "Usul ve esas belirleme yetkisi · Verginin yasallığı", "Vergi kanunlarının Bakanlığa verdiği “usul ve esasları belirleme” yetkisinin sınırı nerede?", "Asoscongress 7. Uluslararası Hukuk Sempozyumu, özet bildiri, ISBN 978-625-7813-80-8.", egeYokUrl, "27.05.2025"],
  ["insan-haklari-vergi", 2020, "Bildiri", "YÖK künyesi", "İnsan Hakları Bakımından Vergilendirmenin Sınırı", ["constitution"], "Vergilendirme yetkisi · İnsan hakları · Mülkiyet", "Devletin vergilendirme yetkisi insan hakları açısından nerede sınırlanır?", "XI. Ankara Barosu Uluslararası Hukuk Kurultayı: İnsan Hakları ve Hak Savunuculuğu, tam metin, ISBN 978-605-7848-38-6.", egeYokUrl, "09.01.2020"],
  ["faiz-gideri", 2017, "Bildiri", "YÖK künyesi", "Alman Kurumlar Vergisi Faiz Giderlerinin Kısıtlanmasına İlişkin Hükmünün Alman Anayasası'na Aykırılığı Sorunu Bağlamında Türk Vergi Mevzuatında Yer Alan Faiz Giderlerinin Kısıtlanmasına İlişkin Hükümlerin Değerlendirilmesi", ["corporate", "eu"], "Faiz gideri kısıtlaması · Alman Anayasası · Kurumlar vergisi", "Almanya'da anayasaya aykırılığı tartışılan faiz gideri sınırlaması Türk mevzuatı için ne anlatıyor?", "Türk Vergi Sisteminde Vergilendirme İlkeleri ve Beklentiler sempozyumu, özet bildiri.", egeYokUrl, "24.05.2017"],
  ["yurutmenin-durdurulmasi", 2017, "Bildiri", "Künye", "Vergi Yargısında Yürütmenin Durdurulması, Sorunlar/Öneriler", ["procedure"], "Yürütmenin durdurulması · Vergi yargısı", "Vergi davalarında yürütmenin durdurulması uygulamasında hangi sorunlar var?", "İdari Yargılama Usulü Kanunu'nun Yürürlüğe Girişinin 35. Yılında İdari Yargı Sempozyumu. YÖK'te özet bildiri; konuşma metni sempozyum kitabında (On İki Levha, Ekim 2017) yer alıyor ve Lexpera'da görüldü.", "https://www.lexpera.com.tr/", "26.04.2017"],
  ["hukuki-yapi-tarafsizligi", 2016, "Bildiri", "YÖK künyesi", "Hukuki Yapı Tarafsızlığı Bakımından Kurumlar Vergisi Mükellefleri", ["corporate"], "Hukuki yapı tarafsızlığı · Kurumlar vergisi mükellefiyeti", "Kurumlar vergisi mükellefiyeti işletmenin hukuki yapısından bağımsız olmalı mı?", "Vergi Hukuku Platformu (VEHUP) 2. Ulusal Kongresi, tam metin.", egeYokUrl, "02.05.2016"],
  // Kitap ve bölümler
  ["birlesme-kitap", 2012, "Kitap", "YÖK künyesi", "Vergi Hukukunda Birleşme, Bölünme ve Hisse Değişimi İşlemleri", ["corporate"], "Birleşme · Bölünme · Hisse değişimi · Vergi ertelemesi", "Şirket birleşme, bölünme ve hisse değişimleri vergi hukukunda nasıl ele alınır?", "Legal Yayıncılık, Şubat 2012. 2011 doktora tezine dayanıyor; Lexpera'da birleşme ve bölünme üzerine çok sayıda eserde kaynak gösteriliyor.", egeYokUrl],
  ["telif-kazanclari", 2021, "Kitap bölümü", "YÖK künyesi", "Gelir Vergisi Kanunu'nda Yer Alan Telif Kazançları İstisnasında 7194 Sayılı Kanun'la Yapılan Değişikliklerin (Vergilendirme İlkeleri Açısından) Değerlendirilmesi", ["income"], "Telif kazançları istisnası · 7194 sayılı Kanun", "7194 sayılı Kanun'un telif kazançları istisnasında yaptığı değişiklikler vergilendirme ilkelerine uygun mu?", "Cenker Göker ile birlikte. Hukuk ve Sanat (ed. Yener Ünver, Özlem Yenerer Çakmut), Seçkin Yayıncılık, ISBN 978-975-02-6802-1.", egeYokUrl],
  ["corporate-residence", 2018, "Kitap bölümü", "YÖK künyesi", "Turkey Country Report", ["corporate", "eu"], "Kurumların vergisel ikametgâhı · Şirket mobilitesi · EATLP", "Türkiye'de şirketlerin vergisel ikametgâhı ve taşınması nasıl düzenleniyor?", "Murat Yusuf Akın ve Abdulkadir Kahraman ile birlikte. Corporate Tax Residence and Mobility (ed. Edoardo Traversa), IBFD, ISBN 978-90-8722-451-6; EATLP 2017 kongresi ulusal raporu.", egeYokUrl],
  ["atad-karsilastirma", 2018, "Kitap bölümü", "Künye", "Türk Vergi Hukuku Mevzuatı ile AB'nin Vergiden Kaçınmaya Karşı Paketi'nin Karşılaştırılması", ["eu", "corporate"], "ATAD · BEPS · Vergiden kaçınma", "Türk vergi mevzuatı AB'nin vergiden kaçınmaya karşı paketiyle ne kadar uyumlu?", "VEHUP 2. Yıllık Kongresi: Dolaysız Vergilerin Dolanılmasıyla Mücadelede Türkiye ve AB Arasında İşbirliği Stratejileri (ed. Funda Başaran Yavaşlar), On İki Levha, Mayıs 2018, s. 121–165 (Lexpera). Aynı kitaptaki İngilizce “The EU Anti-Tax Avoidance Package: Comparison with the OECD/G20's BEPS Action Plan” (s. 105–119) ve 2017 kongre bildirisi aynı çalışmanın parçası sayıldı; bir kez sayıldı.", "https://www.lexpera.com.tr/"],
  // Kendi tezleri
  ["doktora-tezi", 2011, "Doktora tezi", "YÖK künyesi", "Vergi Hukukunda Birleşme, Bölünme ve Hisse Değişimi İşlemleri", ["corporate"], "Birleşme · Bölünme · Tez 291505", "Şirket yeniden yapılanmaları vergi hukukunda nasıl düzenlenmeli?", "Marmara Üniversitesi Sosyal Bilimler Enstitüsü, Maliye Anabilim Dalı, Mali Hukuk Bilim Dalı; danışman Yrd. Doç. Dr. Veysi İhsan Seviğ. Bir bölümü Paris I Üniversitesi'nde yürütüldü. Künye Tez Merkezi'nden; özet sistemde görüntülenemedi.", egeThesisSearch],
  ["yl-tezi", 2000, "Yüksek lisans tezi", "YÖK künyesi", "Anonim Ortaklıklarda Kanuni Yedek Akçeler", ["corporate"], "Kanuni yedek akçe · Anonim ortaklık · Tez 97037", "Anonim ortaklıklarda kanuni yedek akçeler nasıl ayrılır ve kullanılır?", "Marmara Üniversitesi Sosyal Bilimler Enstitüsü, Özel Hukuk Anabilim Dalı; danışman Prof. Dr. Merih Kemal Omağ. Künye Tez Merkezi'nden; Lexpera'da yedek akçe çalışmalarında kaynak gösteriliyor.", egeThesisSearch]
];

const egeProfile = {
  name: "H. Deniz Ege Göktuna",
  role: "Öğr. Gör. Dr.",
  field: "Mali Hukuk",
  bio: "Kurumlar vergisi, şirket yeniden yapılanmalarının vergilendirilmesi, katma değer vergisi, AB ve uluslararası vergi hukuku üzerine çalışıyor; avukat. İstanbul Hukuk mezunu (1997); Marmara'da özel hukuk yüksek lisansı (2000) ve mali hukuk doktorası (2011) yaptı; doktora çalışmasının bir bölümünü Paris I'de yürüttü, 2006'da Bologna'da misafir araştırmacı oldu. 1997'den itibaren Galatasaray Hukuk'ta çalıştı. Eylül 2013 – Temmuz 2026 arasında Özyeğin Hukuk'ta tam zamanlı öğretim üyesiydi; şimdi konuk öğretim üyesi olarak vergi hukuku dersleri veriyor.",
  universityUrl: egeUniversityUrl,
  yokUrl: egeYokUrl,
  featured: "kdv-36-cumhurbaskani",
  summary: {
    areas: [
      ["Kurumlar vergisi ve yeniden yapılanma", "Birleşme, bölünme, hisse değişimi, asgari kurumlar vergisi"],
      ["Katma değer vergisi", "İndirim ve iade, deniz taşıma araçları istisnası, dijital içerikler"],
      ["Anayasal ilkeler ve vergilendirme yetkisi", "Verginin yasallığı, yürütmeye yetki devri, insan hakları"],
      ["AB ve uluslararası vergi hukuku", "ATAD, Birleşme Direktifi, şirketlerin vergisel ikametgâhı"],
      ["Vergi yargısı", "Yürütmenin durdurulması, KKDF uyuşmazlıklarında görevli mahkeme"],
      ["Gelir vergisi", "Telif kazançları istisnası, sporcu ücretleri"]
    ],
    recent: "2025'te Balca Çelener ile asgari kurumlar vergisinde geçmiş yıl zararları, KDV'de deniz taşıma araçları istisnası ve KKDF uyuşmazlıklarında görevli mahkeme üzerine üç makale; Bakanlığın usul ve esas belirleme yetkisinin sınırı üzerine bildiri.",
    example: "kkdf-gorevli-mahkeme",
    exampleLabel: "KKDF uyuşmazlıklarına hangi mahkeme bakmalı?"
  },
  themes: {
    corporate: "Kurumlar vergisi ve yeniden yapılanma",
    vat: "Katma değer vergisi",
    constitution: "Anayasal ilkeler ve vergilendirme yetkisi",
    eu: "AB ve uluslararası vergi hukuku",
    procedure: "Vergi yargısı",
    income: "Gelir vergisi"
  },
  themeNotes: {
    corporate: "Birleşme, bölünme, iştirak, asgari KV",
    vat: "İndirim ve iade, istisnalar, dijital içerik",
    constitution: "Yasallık ilkesi, yetki devri, insan hakları",
    eu: "ATAD, Birleşme Direktifi, ikametgâh",
    procedure: "Yürütmenin durdurulması, görevli mahkeme",
    income: "Telif kazançları, sporcu ücretleri"
  },
  works: egeWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "27 Kasım 2026'da kontrol edildi. Unvan Öğr. Gör. Av. Dr., alan Mali Hukuk; Eylül 2013 – Temmuz 2026 tam zamanlı, şimdi konuk öğretim üyesi. Sayfada yayın listesi yok.", egeUniversityUrl],
    ["YÖK Akademik", "Kayıt 40E5B57A9E2F5FCD (YÖK'te Dr. Öğr. Üyesi, Vergi Hukuku); ORCID alanı geçersiz bir değer içeriyor. 9 makale, 6 bildiri ve 4 kitap kaydı; editörlük ve proje kaydı yok. 2017 VEHUP bildirisi 2018'de kitap bölümü olarak çıktığı için bir kez sayıldı.", egeYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Yüksek lisans (97037, 2000) ve doktora (291505, 2011) tezleri bulundu; özetler görüntülenemedi. Danışman aramasındaki 32 sonucun hepsi başka alanlardan, başka kişilere ait; yönettiği tez çıkmadı.", egeThesisSearch],
    ["TR Dizin", "5 makale bulundu ve özetleri okundu. YÖK'teki 2025 asgari kurumlar vergisi makalesi TR Dizin'de henüz görünmüyor.", "https://search.trdizin.gov.tr/"],
    ["DergiPark ve dergi arşivleri", "DergiPark'ın kendi araması kullanılmadı. Site aramasında yazar profili çıkmadı; çıkan Ege Şentürk makalesi başka kişiye ait. Makaleler Legal Mali Hukuk ve Vergi Dünyası dergilerinde, DergiPark dışında.", "https://dergipark.org.tr/"],
    ["Crossref, OpenAlex ve ORCID", "Geçerli ORCID yok. OpenAlex'te 5 kayıt var ve listeyle örtüşüyor. Galatasaray AVESIS'teki 2024 “Kripto Varlıkların Vergi Düzenlemeleri” sunumunun yeri doğrulanamadığı için sayılmadı.", "https://openalex.org/A5119117205"],
    ["Google Akademik", "Arama robot doğrulamasına (CAPTCHA) düştü; aşılmadı ve taranmadı.", "https://scholar.google.com/"],
    ["Özyeğin eResearch", "Tarayıcı onayı gerektirdiği için taranmadı.", "https://eresearch.ozyegin.edu.tr/"],
    ["Lexpera literatür", "Kurumsal oturumla yalnız künye düzeyinde arandı; 21 sonuç çıktı. ATAD bölümü (s. 121–165) ve İngilizce özet bölüm (s. 105–119) aynı kitapta; bir kez sayıldı. Yürütmenin durdurulması konuşması İYUK sempozyum kitabında görüldü. Diğerleri atıf, teşekkür ve jüri kayıtları.", "https://www.lexpera.com.tr/"],
    ["Projeler ve CORDIS", "YÖK'te proje kaydı yok. CORDIS'te “Goktuna” için sonuç çıkmadı.", "https://cordis.europa.eu/"]
  ]
};
