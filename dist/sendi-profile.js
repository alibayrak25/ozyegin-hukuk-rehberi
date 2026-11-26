const sendiUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/sendiyakuppur";
const sendiYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=3F6F6AF0A94DE482";
const sendiThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";

const sendiTez = (id, no, yazar, yil, baslik, topics, tags, question) =>
  [id, yil, "Tez danışmanlığı", "YÖK künyesi", baslik, topics, `${tags} · Tez ${no}`, question, `${yazar}, Özyeğin Üniversitesi yüksek lisans tezi (Tez No ${no}). Künye Tez Merkezi'nden.`, sendiThesisSearch];

const sendiWorks = [
  // Makaleler
  ["miras-reddi-iptal", 2023, "Makale", "Özet", "Mirası Reddeden Mirasçının Alacaklılarının TMK m. 617 Hükmüne Dayanarak Açabilecekleri İptal Davası", ["succession"], "Mirasın reddi · Alacaklıların iptal davası · TMK 617", "Mirası reddeden borçlu mirasçının alacaklıları reddin iptalini hangi şartlarla isteyebilir?", "Legal Hukuk Dergisi, c. 21, sayı 241, s. 83–106 (TR Dizin). Özet TR Dizin'de okundu.", "https://search.trdizin.gov.tr/tr/yayin/detay/1173110"],
  ["surrogacy-tourism", 2022, "Makale", "Özet", "The Effects of Legislation on Surrogacy Tourism", ["surrogacy"], "Taşıyıcı annelik · Üreme turizmi · Karşılaştırmalı hukuk", "Ülkelerin taşıyıcı annelik düzenlemeleri, bu yasaktan kaçmak için yurt dışına gidilmesini nasıl etkiliyor?", "Medicine, Law & Society, c. 15, sayı 1, s. 73–88 (ESCI), doi 10.18690/mls.15.1.73-88.2022. Özet OpenAlex kaydından okundu.", "https://doi.org/10.18690/mls.15.1.73-88.2022"],
  ["sadakat-bosanma", 2022, "Makale", "Özet", "Boşanma Davası Açıldıktan Sonra Eşlerin Sadakat Yükümlülüğü", ["family"], "Sadakat yükümlülüğü · Boşanma davası · Evlilik birliği", "Boşanma davası sürerken eşlerin sadakat yükümlülüğü devam eder mi?", "Bahçeşehir Üniversitesi Hukuk Fakültesi Dergisi, c. 17, sayı 209, s. 823–844 (TR Dizin). Özet TR Dizin'de okundu.", "https://search.trdizin.gov.tr/tr/yayin/detay/1129205"],
  ["noter-tasinmaz-satis", 2022, "Makale", "Özet", "Taşınmaz Satış Sözleşmelerinin Noterlerde Yapılabilmesine İlişkin Değerlendirmeler", ["property", "contracts"], "Taşınmaz satışı · Noter · Resmi şekil", "Taşınmaz satış sözleşmelerinin noterlerde yapılabilmesi tapu sistemine ve şekil kurallarına nasıl etki eder?", "Kadir Has Üniversitesi Hukuk Fakültesi Dergisi, c. 10, sayı 2, s. 649–665 (TR Dizin). Özet TR Dizin'de okundu.", "https://search.trdizin.gov.tr/tr/yayin/detay/1173235"],
  ["toplumsal-cinsiyet-egitim", 2021, "Makale", "Özet", "Türkiye'de Hukuk Eğitimi, Mevzuat ve Uygulamada Toplumsal Cinsiyete Duyarlılık", ["gender"], "Toplumsal cinsiyet · Hukuk eğitimi · Mevzuat", "Türk hukuk eğitimi, mevzuatı ve uygulaması toplumsal cinsiyete ne kadar duyarlı?", "Ferhat Yıldırım, Özge Yücel Dericiler, Özlem Yenerer Çakmut ve Işık Özer ile birlikte. Marmara Üniversitesi Hukuk Fakültesi Hukuk Araştırmaları Dergisi, c. 27, sayı 2, s. 933–982, doi 10.33433/maruhad.1016933 (DergiPark).", "https://doi.org/10.33433/maruhad.1016933"],
  ["aile-konutu-tapu", 2016, "Makale", "Özet", "Aile Konutu ve Tapu Kütüğüne Güven İlkesi", ["property", "family"], "Aile konutu · Tapu kütüğüne güven · İyiniyetli üçüncü kişi", "Aile konutu şerhi yokken konutu iyiniyetle edinen üçüncü kişi tapuya güvenden yararlanır mı?", "Bahçeşehir Üniversitesi Hukuk Fakültesi Dergisi, c. 11, sayı 145–146, s. 777–797 (TR Dizin). Özet TR Dizin'de okundu.", "https://search.trdizin.gov.tr/tr/yayin/detay/251630"],
  ["joint-parental-care", 2015, "Makale", "Özet", "Joint Parental Care", ["family"], "Ortak velayet · Evlilik dışı ana baba · Hakim takdiri", "Türk hukukunda ortak velayet kimlere ve hangi şartlarla tanınmalı?", "Medeni Kanun'un ortak velayeti yalnız evli ana babaya tanıdığını belirtiyor; yeni düzenlemenin bunu kural olarak değil, şartları varsa hakime takdir yetkisi vererek mümkün kılması gerektiğini savunuyor. Pravnik (Ljubljana), c. 70, sayı 9–10, s. 711–724. Özet Slovenya dijital kütüphanesinde (dLib) okundu.", "https://dlib.si/"],
  // Bildiriler
  ["temsil-kayyimi", 2022, "Bildiri", "YÖK künyesi", "Güncel Yargı Kararları Işığında Veli ile Küçüğün Menfaatinin Çatışması Nedeniyle Temsil Kayyımı Atanması Gereken Haller", ["family"], "Temsil kayyımı · Menfaat çatışması · Velayet", "Veli ile çocuğun menfaati çatıştığında hangi hallerde temsil kayyımı atanmalı?", "Çocuk Hukuku I, s. 21–24 (özet bildiri), ISBN 978-625-432-486-4.", sendiYokUrl, "16.12.2022"],
  ["tasiyici-annelik-kongre", 2019, "Bildiri", "YÖK künyesi", "Türkiye ve Dünyada Taşıyıcı Annelik Konusunda Hukuki Gelişmeler", ["surrogacy"], "Taşıyıcı annelik · Karşılaştırmalı hukuk", "Taşıyıcı annelik Türkiye'de ve dünyada hukuken nasıl düzenleniyor?", "V. Uluslararası Sağlık Hukuku Kongresi, tam metin, s. 237–245.", sendiYokUrl, "05.09.2019"],
  ["mirastan-feragat", 2018, "Bildiri", "YÖK künyesi", "Yargı Kararları Işığında Mirastan Feragat Sözleşmesine İlişkin Değerlendirmeler", ["succession", "contracts"], "Mirastan feragat sözleşmesi · Yargıtay kararları", "Yargıtay kararlarında mirastan feragat sözleşmesi nasıl değerlendiriliyor?", "Yargıtay Kararları Işığında Güncel Medeni Hukuk Problemleri Sempozyumu; tam metin On İki Levha, Şubat 2019, s. 489–504 (Lexpera'da sayfa aralığıyla doğrulandı). 2018 özet kitabındaki (s. 79–81) kayıt aynı çalışma; bir kez sayıldı.", sendiYokUrl],
  // Kitaplar, bölüm, editörlük
  ["resmi-defter", 2022, "Kitap", "YÖK künyesi", "Resmi Defter Tutma ve Mirasın Tutulan Deftere Göre Kabulü", ["succession"], "Resmi defter · Mirasın kabulü · Tereke borçları", "Mirasçı, terekenin borçlarından sorumluluğunu resmi defter yoluyla nasıl sınırlayabilir?", "Seçkin Yayıncılık, 208 s., ISBN 978-975-02-7748-1.", sendiYokUrl],
  ["tapu-guven-kitap", 2016, "Kitap", "YÖK künyesi", "Tapu Kütüğüne Güven İlkesi", ["property"], "Tapu sicili · İyiniyet · TMK 1023", "Tapu kütüğüne güven ilkesi kimi, hangi şartlarla korur?", "On İki Levha Yayıncılık, 240 s., ISBN 978-605-152-328-6. 2013 doktora tezine dayanıyor.", sendiYokUrl],
  ["eser-teslim-kitap", 2009, "Kitap", "YÖK künyesi", "Borçlar Kanunu'na Göre Eser Sözleşmesinde Müteahhidin Eseri Teslim Borcu ve Teslim Borcuna Aykırılıkları", ["contracts"], "Eser sözleşmesi · Teslim borcu · Borca aykırılık", "Müteahhidin eseri teslim borcu nedir ve bu borca aykırılığın sonuçları nelerdir?", "On İki Levha Yayıncılık, 142 s. 2009 yüksek lisans tezine dayanıyor.", sendiYokUrl],
  ["tasiyici-annelik-bolum", 2019, "Kitap bölümü", "Künye", "İleri Teknoloji Kullanılarak Gerçekleştirilen Taşıyıcı Annelik", ["surrogacy", "gender"], "Taşıyıcı annelik · Üremeye yardımcı teknikler · Toplumsal cinsiyet", "İleri üreme teknolojileriyle yapılan taşıyıcı annelik hukuken nasıl ele alınmalı?", "Toplumsal Cinsiyet ve Hukuk (ed. Zeynep Özlem Üskül Engin), On İki Levha, Nisan 2019, s. 273–297. Künye Lexpera'dan.", "https://www.lexpera.com.tr/"],
  ["siddet-esitlik-editorluk", 2022, "Editörlük", "YÖK künyesi", "Hukuk ve Disiplinlerarası Yaklaşımla Şiddet ve Toplumsal Eşitlik", ["gender"], "Şiddet · Toplumsal eşitlik · Disiplinlerarası", "Şiddet ve toplumsal eşitlik sorunlarına hukuk ve diğer disiplinler birlikte nasıl bakabilir?", "Özlem Yenerer Çakmut, Özge Yücel Dericiler, Ferhat Yıldırım ve Işık Özer ile birlikte editör. Seçkin Yayıncılık, ISBN 978-975-02-7429-9.", sendiYokUrl],
  // Kendi tezleri
  ["doktora-tezi", 2013, "Doktora tezi", "Tez özeti", "Tapu Kütüğüne Güven İlkesi", ["property"], "Tapu sicili · TMK 1023 · Tez 351625", "Tapu kütüğüne güvenerek iyiniyetle hak kazanan üçüncü kişi hangi şartlarla korunur?", "TMK 1023'ün tapuya güvenerek iyiniyetle ayni hak kazanan üçüncü kişiyi koruduğunu anlatıyor; ilkenin şartlarını, uygulandığı, uygulanmadığı ve uygulanıp uygulanmayacağı tartışmalı olan halleri inceliyor. İstanbul Üniversitesi Sosyal Bilimler Enstitüsü, danışman Prof. Dr. İlhan Helvacı. Özet Tez Merkezi'nde okundu.", sendiThesisSearch],
  ["yl-tezi", 2009, "Yüksek lisans tezi", "Tez özeti", "Borçlar Kanunu'na Göre Eser Sözleşmesinde Müteahhidin Eseri Teslim Borcu ve Teslim Borcuna Aykırılıkları", ["contracts"], "Eser sözleşmesi · Teslim borcu · Tez 262682", "Eser sözleşmesinde müteahhidin teslim borcu ve buna aykırılığın sonuçları nelerdir?", "İstanbul Üniversitesi Sosyal Bilimler Enstitüsü, danışman Prof. Dr. İlhan Helvacı. Özet Tez Merkezi'nde okundu; aynı yıl kitap olarak da yayımlandı.", sendiThesisSearch],
  // Tez danışmanlıkları
  sendiTez("tez-kvkk-gis", 903369, "Seren Deniz Yanık Uçar", 2024, "Kişisel Verilerin Korunması Kanunu Kapsamında Hazırlanan Metinlerin Genel İşlem Şartı Perspektifinden Değerlendirilmesi", ["contracts"], "Kişisel veriler · Genel işlem şartı", "KVKK kapsamında hazırlanan metinler genel işlem şartı denetimine tabi mi?"),
  sendiTez("tez-ticari-isletme", 860317, "Selim Sarfati", 2023, "Ticari İşletmenin Devrinde Ayıp", ["contracts"], "Ticari işletme devri · Ayıp", "Ticari işletmenin devrinde ayıptan sorumluluk nasıl işler?"),
  sendiTez("tez-aydinlatilmis-riza", 750390, "Hafize Özdilek", 2022, "Tıbbi Müdahalede Aydınlatılmış Rıza", ["surrogacy"], "Aydınlatılmış rıza · Tıbbi müdahale", "Tıbbi müdahaleye geçerli rıza için hasta nasıl aydınlatılmalı?"),
  sendiTez("tez-muris-muvazaasi", 694427, "Helin Rojda İlaldı", 2021, "Taşınmazlar Açısından Muris Muvazaası", ["succession", "property"], "Muris muvazaası · Taşınmaz", "Taşınmaz devirlerinde muris muvazaası nasıl tespit edilir ve sonuçları nelerdir?")
];

const sendiProfile = {
  name: "Sendi Yakuppur",
  role: "Doç. Dr.",
  field: "Medeni Hukuk",
  bio: "Tapu kütüğüne güven ve eşya hukuku, miras hukuku, aile hukuku, taşıyıcı annelik ve toplumsal cinsiyet üzerine çalışıyor; Özyeğin Hukuk'ta dekan yardımcısı. Koç Üniversitesi Hukuk mezunu (2007); bir yıl avukatlık yaptı, 2008–2014 arasında Koç'ta araştırma görevlisiydi. İstanbul Üniversitesi'nde Prof. Dr. İlhan Helvacı danışmanlığında yüksek lisans (2009) ve doktora (2013) yaptı. 1 Ocak 2014'ten beri Özyeğin'de; 2023'te doçent oldu.",
  universityUrl: sendiUniversityUrl,
  yokUrl: sendiYokUrl,
  featured: "aile-konutu-tapu",
  summary: {
    areas: [
      ["Tapu sicili ve taşınmaz", "Tapu kütüğüne güven, aile konutu, noterde taşınmaz satışı"],
      ["Aile hukuku", "Sadakat yükümlülüğü, ortak velayet, temsil kayyımı"],
      ["Miras hukuku", "Mirasın reddi, mirastan feragat, resmi defter, muris muvazaası"],
      ["Taşıyıcı annelik ve sağlık", "Taşıyıcı annelik düzenlemeleri, üreme turizmi, aydınlatılmış rıza"],
      ["Toplumsal cinsiyet ve hukuk", "Hukuk eğitimi, şiddet ve toplumsal eşitlik"],
      ["Sözleşmeler", "Eser sözleşmesi, ticari işletme devri, genel işlem şartları"]
    ],
    recent: "2023'te mirası reddeden mirasçının alacaklılarının iptal davası üzerine makale. 2022'de resmi defter kitabı, sadakat yükümlülüğü, noterde taşınmaz satışı ve taşıyıcı annelik turizmi makaleleri; şiddet ve toplumsal eşitlik kitabında ortak editörlük.",
    example: "sadakat-bosanma",
    exampleLabel: "Boşanma davası sürerken sadakat yükümlülüğü devam eder mi?"
  },
  themes: {
    property: "Tapu sicili ve taşınmaz",
    family: "Aile hukuku",
    succession: "Miras hukuku",
    surrogacy: "Taşıyıcı annelik ve sağlık",
    gender: "Toplumsal cinsiyet ve hukuk",
    contracts: "Sözleşmeler"
  },
  themeNotes: {
    property: "Tapuya güven, aile konutu, noter",
    family: "Sadakat, ortak velayet, temsil kayyımı",
    succession: "Reddin iptali, feragat, resmi defter",
    surrogacy: "Taşıyıcı annelik, aydınlatılmış rıza",
    gender: "Hukuk eğitimi, şiddet, eşitlik",
    contracts: "Eser sözleşmesi, işletme devri, GİŞ"
  },
  works: sendiWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026'da kontrol edildi. Unvan Doç. Dr., dekan yardımcısı, alan Medeni Hukuk; 1 Ocak 2014'ten beri Özyeğin'de. Sayfada 3 eser listeleniyor; hepsi aşağıda var.", sendiUniversityUrl],
    ["YÖK Akademik", "Kayıt 3F6F6AF0A94DE482, ORCID 0000-0001-9234-1715. Makale, bildiri, kitap ve editörlük kayıtları tek tek karşılaştırıldı. Mirastan feragat bildirisinin 2018 özet kitabı ve 2019 tam metin kaydı aynı çalışma; bir kez sayıldı. YÖK'te proje kaydı yok.", sendiYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Yüksek lisans (262682) ve doktora (351625) tezleri bulundu, özetleri okundu. Danışman aramasında 4 Özyeğin yüksek lisans tezi çıktı.", sendiThesisSearch],
    ["TR Dizin", "4 makale bulundu ve özetleri okundu. Ad aramasında çıkan Yakuplu/Yakuplar soyadlı ilgisiz kayıtlar elendi.", "https://search.trdizin.gov.tr/"],
    ["DergiPark ve dergi arşivleri", "DergiPark'ın kendi araması kullanılmadı. Site aramasında yazar profili çıkmadı; Marmara makalesi DOI üzerinden DergiPark'ta doğrulandı. Pravnik makalesinin özeti Slovenya dijital kütüphanesinde (dLib) okundu.", "https://doi.org/10.33433/maruhad.1016933"],
    ["Crossref, OpenAlex ve ORCID", "ORCID kaydı boş. OpenAlex'teki kayıtlar (taşıyıcı annelik turizmi makalesi dahil) listeyle örtüşüyor; yeni eser çıkmadı.", "https://orcid.org/0000-0001-9234-1715"],
    ["Google Akademik", "Arama robot doğrulamasına (CAPTCHA) düştü; aşılmadı ve taranmadı.", "https://scholar.google.com/"],
    ["Özyeğin eResearch", "Tarayıcı onayı gerektirdiği için taranmadı. OpenAlex'e yansıyan eResearch kayıtları listede zaten var.", "https://eresearch.ozyegin.edu.tr/"],
    ["Lexpera literatür", "Kurumsal oturumla yalnız künye düzeyinde arandı; 31 sonuç çıktı. Taşıyıcı annelik bölümü (s. 273–297) ve mirastan feragat tam metni (s. 489–504) sayfa aralığıyla doğrulandı; diğerleri atıf ve jüri kayıtları. Genel web aramasında ek eser çıkmadı.", "https://www.lexpera.com.tr/"],
    ["Projeler ve CORDIS", "YÖK'te proje kaydı yok. CORDIS'te “Sendi” ve “Yakuppur” birlikte ve “Yakuppur” tek başına 0 sonuç verdi.", "https://cordis.europa.eu/"]
  ]
};
