const selminUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/cansudemir";
const selminOrcid = "https://orcid.org/0000-0002-5485-8569";
const selminThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";

const selminWorks = [
  ["cezaevi-cocuklar", 2026, "Makale", "Özet", "Human Condition of Children Living with Incarcerated Mothers in Türkiye", ["prison","juvenile"], "Cezaevinde anneyle kalan çocuklar · Prizonizasyon · Punishment & Society · Özlem Yenerer Çakmut", "Annesiyle cezaevinde kalan 0–6 yaş çocuklar, hüküm giymedikleri hâlde ceza düzenine nasıl dâhil oluyor?", "Tutuklu ve hükümlü anneleri temsil etmiş 15 avukatla yapılan derinlemesine görüşmelere dayanıyor. Çocukların mahkûmiyet olmadan cezaevi içinde yönetildiğini anlatmak için “tabiiyet yoluyla prizonizasyon” kavramını öneriyor. Şevkiye Berfin Işık Yılmaz (ilk yazar), Alev Özeroğlu, Didem Köse, Özlem Yenerer Çakmut ve İlkim Reyhan Sertoğlu ile, Demir dördüncü yazar. Punishment & Society, 2026 (çevrim içi). Özet Crossref’ten okundu.", "https://doi.org/10.1177/14624745261485380"],
  ["hijyenik-urun", 2026, "Makale", "Özet", "Amicable Settlement on Free Access to Hygienic Products for Incarcerated Women in the Context of the Right to Health in Prison: An Exemplary Case from Türkiye", ["prison","gender"], "Cezaevinde sağlık hakkı · Hijyenik ped · Dostane çözüm", "Cezaevindeki kadınların hijyenik ürünlere ücretsiz erişimi sağlık hakkının parçası mı?", "Devletin cezaevindekilerin sağlık hakkını ücretsiz sağlama yükümlülüğünden ve kadınların menstrüel sağlık ihtiyaçlarının cinsiyete duyarlı yaklaşım gerektirdiğinden yola çıkıyor. Mahpus kadınların hijyenik pede ücretsiz erişememesi üzerine varılan dostane çözümü örnek vaka olarak inceliyor. Özlem Yenerer Çakmut, Ferhat Yıldırım ve Anıl Akyıldız ile. Dokuz Eylül Üniversitesi Hukuk Fakültesi Dergisi 28/1, s. 31–58. Açık erişim, TR Dizin 1414098.", "https://doi.org/10.33717/deuhfd.1829473"],
  ["deprem-siddet", 2024, "Makale", "Özet", "Earthquake, Social Disorder, Violence", ["violence","gender"], "6 Şubat depremi · Sosyal düzensizlik kuramı · Aile içi şiddet · Ezgi Ildırım · Yasemen Öztürkcan", "6 Şubat 2023 Kahramanmaraş depremlerinin ardından görülen şiddet olayları nasıl açıklanabilir?", "Deprem sonrasında medyaya yansıyan şiddet olaylarını sosyal düzensizlik kuramıyla açıklıyor. Artan stres yükünün aile içi şiddeti artırdığını, refakatsiz çocukların kaybolması, çocuk istismarı, kadına yönelik şiddet ve mültecilere yönelik nefret suçlarının akut dönemde öne çıktığını, denetim boşluğunun bunu kolaylaştırdığını anlatıyor. Ezgi Ildırım ve Yasemen Öztürkcan ile, Demir ilk yazar. Journal of Awareness 9, Özel Sayı, s. 17–30. Crossref kaydındaki ORCID ile kimlik eşleşti.", "https://doi.org/10.26809/joa.2260"],
  ["cocuk-infaz", 2019, "Makale", "Özet", "Çocuk Ceza Adaletinde İnfaz Sorunları", ["juvenile","prison"], "Çocukların hapsedilmesi · Son çare ilkesi · BM Çocuk Hakları Sözleşmesi", "Türkiye’de özgürlüğünden yoksun bırakılan çocuklar hangi infaz sorunlarıyla karşılaşıyor?", "Tutukluluk, hapis, denetimli serbestlik, alternatif ve koruyucu destekleyici tedbirler gibi çocuk ceza adaletindeki infaz uygulamalarını kapsıyor. Özellikle çocukların hapsedilmesinden doğan sorunlara ve hak ihlallerine odaklanıyor. Özgürlükten yoksun bırakmanın son çare olması ve çocukların yaşa bağlı ihtiyaçlarının gözetilmesi ilkelerini esas alıyor. Suç ve Ceza 11/1, s. 45–69 (Cansu Selmin Demir adıyla). TR Dizin 455740, açık erişim.", "https://search.trdizin.gov.tr/tr/yayin/detay/455740"],
  ["cinsel-taciz", 2018, "Makale", "Künye", "Cinsel Taciz: Hukuki ve Psikolojik Bir Değerlendirme", ["gender","violence"], "Cinsel taciz · TCK m. 105 · Psikoloji · Güliz Kolburan", "Cinsel taciz hukuki ve psikolojik açıdan nasıl değerlendirilmeli?", "Güliz Kolburan ile, ilk yazar Kolburan. Türkiye Klinikleri Adli Tıp Özel Dergisi (Forensic Medicine – Special Topics), 2018. Künye OpenAlex ve Google Akademik’te eşleşti, dergi sayfası açılamadı. Metin okunmadı.", "https://scholar.google.com/scholar?q=%22Cinsel+taciz%3A+hukuki+ve+psikolojik+bir+de%C4%9Ferlendirme%22"],
  ["ilo-isyeri-siddet", 2024, "Rapor", "Künye", "Perceptions and Experiences of Workplace Violence and Harassment", ["violence","gender"], "İş yerinde şiddet ve taciz · ILO · Teknik rapor · Özge Yücel Dericiler", "Türkiye’de iş yerinde şiddet ve taciz nasıl algılanıyor ve deneyimleniyor?", "Teknik rapor, s. 1–96, Ekim 2024. H. Canan Sümer, Alper Açık, Alpkan Birelma, Gözde Çörekçioğlu-İshakoğlu, Senem Timuroğlu, Yonca Toker, Özge Yücel Dericiler, Oğuz Can Ok ve Sezin Demirci ile, Demir beşinci yazar. ODTÜ açık arşivinde kayıtlı ve ILO yayın sayfasına bağlanıyor. Rapor metni ve özeti okunmadı.", "https://open.metu.edu.tr/handle/11511/117128"],
  ["mahpus-kiz-cocuk", 2018, "Rapor", "Özet", "Adli Süreçte Mahpus Kız Çocuğu Olmak", ["juvenile","prison","gender"], "Kız çocukları · Çocuk adalet sistemi · Cezaevi · CİSST", "Adalet ve infaz sisteminde kız çocukları neden görünmez kalıyor?", "Politikaların ve araştırmaların erkek çocuklar ile yetişkin erkekler üzerine kurulduğunu, kız çocuklarının bu yüzden gözden kaçtığını savunuyor. Kız çocuklarıyla çalışan altı profesyonelle yapılan derinlemesine görüşmelere göre çoğunun istismar, aile içi şiddet ve ruh sağlığı sorunları geçmişi var, kurumlarda cinsiyete duyarlı bakım, eğitim, hijyen, sağlık ve tahliye sonrası destek eksik. Dilek Çelik ve Fatmanur Caygın ile. Ceza İnfaz Sisteminde Sivil Toplum Derneği (CİSST). Yıl raporda yazmıyor, 2018 Google Akademik’ten alındı.", "https://cisst.org.tr/wp-content/uploads/2025/05/Adli-Su%CC%88rec%CC%A7te-Mahpus-Kiz-C%CC%A7ocug%CC%86u-Olmak.pdf", "2018 (tahmini)"],
  ["doktora-tezi", 2024, "Doktora tezi", "Tez özeti", "Çocuk Ceza Yargılamasının Çocuk Hakları Bağlamında Değerlendirilmesi", ["juvenile"], "Suça sürüklenen çocuk · Nitel araştırma · Çocuğun yüksek yararı · Tez 891018", "Çocuk ceza yargılaması mevzuatı ve uygulaması çocuk haklarına uygun mu, süreç çocuklar tarafından nasıl deneyimleniyor?", "Özete göre çocukken soruşturma ve kovuşturma geçirmiş yetişkinlerle, çocuk ceza yargılamasında görev alan avukat ve uzmanlarla nitel görüşmeler yapılıyor ve içerik analiziyle inceleniyor. Bulgular süreçlerde çocukların yüksek yararı ile yaşama ve gelişme haklarına ilişkin sorunlara işaret ediyor. Selmin Cansu Demir Yıldız adıyla, İstanbul Üniversitesi-Cerrahpaşa Adli Tıp ve Adli Bilimler Enstitüsü, danışman Prof. Dr. Neylan Ziyalar. YÖK Tez 891018.", selminThesisSearch]
];

const selminProfile = {
  name: "Selmin Cansu Demir",
  role: "Öğr. Gör. Dr., Hukuk Klinikleri Koordinatörü",
  field: "İnsan Hakları",
  bio: "Çocuk hukuku ve çocuk ceza adaleti, cezaevindeki kadın ve çocuklar ve toplumsal cinsiyet eşitliği üzerine çalışıyor. 2016’dan beri Özyeğin’de öğretim görevlisi ve hukuk klinikleri koordinatörü. Serbest avukat ve uzman arabulucu.",
  universityUrl: selminUniversityUrl,
  yokUrl: null,
  altProfile: ["ORCID", selminOrcid],
  featured: "cocuk-infaz",
  summary: {
    areas: [
      ["Çocuk ceza adaleti", "Suça sürüklenen çocukların yargılanması ve özgürlükten yoksun bırakılması"],
      ["Cezaevi ve infaz", "Cezaevinde anneleriyle kalan çocuklar, kız çocukları ve kadın mahpusların sağlık hakkı"],
      ["Toplumsal cinsiyet ve şiddet", "Cinsel taciz, iş yerinde şiddet ve afet sonrası şiddet"]
    ],
    recent: "2024’te çocuk ceza yargılaması üzerine nitel doktora tezini tamamladı ve 6 Şubat depremleri sonrası şiddeti yazdı. 2026’da Özyeğin’deki meslektaşlarıyla cezaevindeki kadınların hijyenik ürünlere erişimi ve anneleriyle cezaevinde kalan çocuklar üzerine iki makalede yer aldı.",
    example: "mahpus-kiz-cocuk",
    exampleLabel: "Adalet sisteminde kız çocukları neden görünmez?"
  },
  themes: {
    juvenile: "Çocuk ceza adaleti",
    prison: "Cezaevi ve infaz",
    gender: "Toplumsal cinsiyet",
    violence: "Şiddet ve taciz"
  },
  themeNotes: {
    juvenile: "Çocuk ceza yargılaması, çocukların hapsedilmesi ve kız çocukları",
    prison: "Cezaevinde anneyle kalan çocuklar, kadın mahpusların sağlık hakkı ve infaz sorunları",
    gender: "Kadın mahpuslar, cinsel taciz ve iş yerinde şiddet",
    violence: "Cinsel taciz, iş yerinde şiddet ve taciz, deprem sonrası şiddet"
  },
  works: selminWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026’da kontrol edildi. Kadroda 8. sırada, unvan Öğr. Gör. Dr., Hukuk Klinikleri Koordinatörü, araştırma alanı İnsan Hakları. 1 Ağustos 2016’dan beri Özyeğin’de. Biyografi Marmara lisans (2008), Bilgi insan hakları yüksek lisansı ve İÜC doktorasını veriyor. Yayın listesi yok.", selminUniversityUrl],
    ["YÖK Akademik", "Selmin Cansu Demir, Selmin Cansu, Selmin Demir ve Cansu Demir aramalarında Özyeğin’e bağlı bir kayıt çıkmadı. Bu yüzden profilde YÖK bağlantısı yerine ORCID gösteriliyor ve YÖK’e dayalı kayıt yok.", "https://akademik.yok.gov.tr/AkademikArama/"],
    ["YÖK Ulusal Tez Merkezi", "Doktora tezi 891018 (2024) Selmin Cansu Demir Yıldız adıyla bulundu. Bilgi Üniversitesi’ndeki yüksek lisans için tez kaydı çıkmadı, program tezsiz olabilir. Tez danışmanlığı kaydı yok.", selminThesisSearch],
    ["TR Dizin", "İki kayıt: 2019 Suç ve Ceza makalesi (Cansu Selmin Demir adıyla) ve 2026 DEÜHFD makalesi. Özetler bu kaynaktan okundu.", "https://search.trdizin.gov.tr/tr/yayin/detay/455740"],
    ["ORCID, Crossref ve OpenAlex", "ORCID 0000-0002-5485-8569 açık ama eser listesi boş. Crossref’te deprem makalesi bu ORCID ile bağlı. OpenAlex’te iki yazar kaydı var (A5041182663 ile 4 eser, A5146250806 ile 2019 makalesi). Aynı adlı hemşirelik yayınları başka kişilere ait, dışlandı.", selminOrcid],
    ["Google Akademik", "Profil yok. Ad araması CİSST raporu ve ODTÜ/ILO teknik raporunu buldu. Aynı kısaltmalı (SC Demir) kadın doğum ve dilbilim yayınları başka kişilere ait, dışlandı.", "https://scholar.google.com/scholar?q=%22Selmin+Cansu+Demir%22"],
    ["Raporlar ve sivil toplum", "CİSST raporunun kapağı ve özeti okundu, yazarlar arasında “Öğretim Görevlisi, Özyeğin Üniversitesi” olarak yer alıyor. ODTÜ açık arşivindeki ILO teknik raporunda beşinci yazar. Biyografide anılan insan hakları örgütlerindeki araştırmacı ve danışmanlık görevlerine ait başka yayın bulunamadı.", "https://open.metu.edu.tr/handle/11511/117128"],
    ["Projeler ve CORDIS", "YÖK proje kaydı yok. CORDIS’te “Selmin Cansu Demir” 0 sonuç verdi. “Cansu Demir” araması otomotiv alanındaki 4 kaydı getirdi, başka kişiye ait sayıldı.", "https://cordis.europa.eu/search?q=%27Selmin%20Cansu%20Demir%27"]
  ]
};
