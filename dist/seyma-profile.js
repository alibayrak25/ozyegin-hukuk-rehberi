const seymaYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=05E49AFE93CF68A3";
const seymaUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/seymacebeci";
const seymaThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";

const seymaWorks = [
  ["gocmen-kacakciligi", 2026, "Makale", "Tam metin", "Bir Yabancının Vatandaşı Olduğu Ülkeye Girmesi İçin Yurt Dışına Çıkmasına İmkân Sağlamanın Göçmen Kaçakçılığı Suçu Bakımından Değerlendirilmesi", ["special","rights"], "Göçmen kaçakçılığı · TCK m. 79 · Yargıtay içtihadı · Yurda girme hakkı", "Bir yabancının kendi ülkesine dönmek için yurt dışına çıkmasına imkân sağlamak göçmen kaçakçılığı suçu oluşturur mu?", "Yargıtay’ın 2017’den beri bu eylemi suç saymayan yerleşik içtihadını, dayandığı Anayasa m. 23/5, AİHS Ek 4 No’lu Protokol m. 3/2 ve Göçmen Kaçakçılığına Karşı Protokol üzerinden inceliyor. Anayasa hükmünün yalnız Türk vatandaşlarını, Protokol m. 3/2’nin ise yalnız vatandaşı olunan devleti bağladığını, TCK m. 79’un Protokol’den daha sıkı bir önlem olarak meşru olduğunu ve yabancının uyruğuna göre ayrım yapmadığını savunuyor. Sonuçta eylemin suç sayılmasını engelleyen hukuki gerekçe bulunmadığına varıyor. Akdeniz Üniversitesi Hukuk Fakültesi Dergisi 16/1, s. 93–119.", "https://doi.org/10.54704/akdhfd.1875899"],
  ["konut-mesru-amac", 2025, "Makale", "Özet", "Konut Dokunulmazlığının İhlali Suçunda Meşru Amaç", ["special","principles"], "Konut dokunulmazlığı · TCK m. 116/3 · Rıza · Kanunilik", "Aynı konutta yaşayan birinin verdiği rızanın “meşru amaca” yönelik olması ne anlama gelir?", "Özete göre TCK m. 116/3’teki meşru amaç kavramı tanımlanmadığı için doktrinde yasal amaç ile gelenek ve göreneklere uygun amaç görüşleri ayrışıyor, Yargıtay ise ikinci görüşü benimsiyor. Kavramı suçta ve cezada kanunilik ile belirlilik ilkesi ışığında açıklamayı amaçlıyor. Kadir Has Üniversitesi Hukuk Fakültesi Dergisi 13/1, s. 29–45. Özet, derginin resmî sitesindeki içindekiler ve özler dosyasından okundu.", "https://eresearch.ozyegin.edu.tr/entities/publication/ac492f88-1873-400b-b3ae-b0ad5dc523d4"],
  ["basit-tibbi-mudahale", 2019, "Makale", "Tam metin", "Basit Tıbbi Müdahale ile Giderilebilecek Ölçüde Hafif Yaralama Sonucunda Ölüm Neticesinin Meydana Gelmesine İlişkin Yargıtay Kararlarının Değerlendirilmesi", ["special","general"], "Kasten yaralama · TCK m. 86/2 ve 87/4 · Netice sebebiyle ağırlaşmış suç · Taksir karinesi", "Basit tıbbi müdahaleyle giderilebilecek hafif yaralama ölüme yol açtığında fail neden ve nasıl sorumlu tutulmalı?", "TCK m. 87/4’ün m. 86/2 yaralamalarına atıf yapmadığını, bu nedenle ölüm halinde sorumluluğun genel hükümlere göre, taksir varsa taksirle öldürmeden belirlenmesi gerektiğini gösteriyor. Yargıtay’ın öngörülebilirlik aramadan nedensellik bağını yeterli sayan yerleşik uygulamasının objektif sorumluluk yarattığını eleştiriyor. Kanun değişikliğine gerek olmadığını, TCK m. 23’teki “en azından taksirle” ölçütünün zaten öngörülebilirlik incelemesini gerektirdiğini savunuyor. Suç ve Ceza 12/2, s. 1–40.", "https://openaccess.bilgi.edu.tr/items/aaedd402-f009-49d6-9bdd-46fec63dd216"],
  ["tanik-kitap", 2024, "Kitap", "Künye", "Ceza Muhakemesi Hukukunda Tanık Beyanının Güvenilirliği", ["procedure"], "Tanık beyanı · Delil · Adli psikoloji · Monografi", "Tanık beyanının güvenilirliği ceza muhakemesinin temel ilkeleriyle çelişmeden nasıl artırılabilir?", "Adalet Yayınevi, Ankara, 2024, ISBN 978-625-6147-44-7. YÖK ve Google Akademik künyesi. Aynı başlıklı doktora tezinin kitap hali, tez ile kitap ayrı kayıt olarak tutuldu. Kitap metni ayrıca açılmadı, içerik bilgisi için doktora tezi kaydına bakın.", seymaYokUrl],
  ["ne-bis-in-idem-kitap", 2021, "Kitap", "İçindekiler", "Türk Ceza Hukuku Bağlamında Ne Bis in İdem İlkesi", ["principles","procedure"], "Ne bis in idem · Aynı fiil · Sınıraşan uygulama · Monografi", "Kişinin aynı fiilden birden fazla yargılanmaması ilkesi iç hukukta ve uluslararası alanda nasıl uygulanıyor?", "On İki Levha, İstanbul, 2021, ISBN 978-625-7528-60-3. Yayınevinin örnek dosyasındaki içindekiler görüldü: kavram ve tarihçe, yerel ve sınıraşan uygulama, aynı fiil ve aynı kişi unsurları. Aynı başlıklı 2018 yüksek lisans tezinin kitap hali.", "https://www.onikilevha.com.tr/images/books/9786257528603.pdf"],
  ["fikri-ictima", 2026, "Kitap bölümü", "Künye", "Fikri İçtimanın ve Özel Fikri İçtima Düzenlemelerinin Hukuki Temeli Üzerine", ["general"], "Fikri içtima · Suçların içtimaı · Turgut Tarhanlı’ya Armağan", "Fikri içtimanın ve özel fikri içtima düzenlemelerinin hukuki temelini ele alan armağan bölümü.", "Dolunay Özbek, Pınar Çağlı, Cemile Gökyayla ve Hilal Nur Şarbak (ed.), Prof. Dr. Turgut Tarhanlı’ya Armağan: Politika, Ekonomi ve Toplum Kesişiminde Hukuk ve İnsan, On İki Levha, 2026, ISBN 978-625-8506-73-0. YÖK künyesi. Metin okunamadı.", seymaYokUrl],
  ["ultima-ratio-bolum", 2023, "Kitap bölümü", "Künye", "Ceza Hukukunun Son Çare Olması (Ultima Ratio) İlkesiyle Bağdaşmayan Düzenlemelerin Hak ve Özgürlükler Bağlamında Değerlendirilmesi", ["principles","rights"], "Son çare ilkesi · Suç politikası · Hak ve özgürlükler", "Ceza hukukunun son çare olması ilkesiyle bağdaşmayan düzenlemeleri hak ve özgürlükler açısından değerlendiren bölüm.", "Zülfiye Yılmaz Yamaç (ed.), Cumhuriyet’in Yüzüncü Yılına Kadın Hukukçuların Armağanı: Kamu Hukukunun Temel Sorunları ve Eleştirel Hukuk Çalışmalarına Bir Katkı, On İki Levha, İstanbul, 2023, s. 279–297. YÖK künyesi. Metin okunamadı.", seymaYokUrl],
  ["ergin-kilinma", 2025, "Bildiri", "Özet bildiri künyesi", "Cinsel Dokunulmazlığa Karşı İşlenen Suçların Faili ve Mağduru Bakımından Evlenmeyle veya Mahkeme Kararıyla Ergin Kılınma", ["special"], "Cinsel suçlar · Ergin kılınma · Fail ve mağdur", "Evlenme veya mahkeme kararıyla ergin kılınmanın cinsel dokunulmazlığa karşı suçlarda fail ve mağdur bakımından sonuçlarını ele alan özet bildiri.", "Yetkin Yayınları’nca basılan özet kitabında, s. 111–114, ISBN 978-605-05-2407-9, 8 Mayıs 2025. YÖK künyesi. Etkinlik adı ve özet metni ayrıca açılamadı.", seymaYokUrl],
  ["mesru-savunma-sapma", 2025, "Bildiri", "Program", "Savunmanın Saldırana Karşı Gerçekleştirilmesi Şartı Bakımından Meşru Savunmada Hedefte Sapma", ["general"], "Meşru savunma · Hedefte sapma · Hukuka uygunluk sebepleri", "Meşru savunmada savunmanın saldırana yöneltilmesi şartı hedefte sapma halinde nasıl uygulanır?", "20. Türk Ceza Hukuku Günleri, İçtihatlar Perspektifinden Hukuka Uygunluk Sebepleri, İstanbul Bilgi Üniversitesi, 31 Mayıs 2025, VI. Oturum. Program kaydı. YÖK’te bu sunum yok, metni görülmedi.", seymaYokUrl],
  ["tck-97-terk", 2022, "Bildiri", "Bildiri künyesi", "Terk Nedeniyle Mağdurun Hastalığa Yakalanması, Yaralanması ya da Ölmesi Suçunu Düzenleyen TCK m. 97/2’nin Kanunilik İlkesi Bakımından Değerlendirilmesi", ["principles","special"], "Terk suçu · TCK m. 97/2 · Kanunilik ilkesi", "TCK m. 97/2’deki terk sonucu ağırlaşan suçu kanunilik ilkesi bakımından değerlendiren bildiri.", "Bilkent Üniversitesi Hukuk Fakültesi III. Genç Hukukçu Araştırmacılar Sempozyumu, 26 Kasım 2022. YÖK’te tam metin bildiri olarak ve ISBN 978-625-4326-61-5 ile kayıtlı. Bildiri kitabı ayrıca açılamadı.", seymaYokUrl],
  ["doktora-tezi", 2024, "Doktora tezi", "Tez özeti", "Ceza Muhakemesi Hukukunda Tanık Beyanının Güvenilirliği", ["procedure"], "Tanık beyanı · Adli psikoloji · CMK · Tez 869871", "Vazgeçilemeyen ama hataya açık bir delil olan tanık beyanının güvenilirliği nasıl artırılabilir?", "Özete göre tanık beyanını yanlış hatırlama ve yalan riskine rağmen çoğu zaman tek ya da belirleyici delil olarak görüyor ve güvenilirliği artırmayı tek çözüm sayıyor. Delil ilkelerini, adli psikoloji araştırmalarını, tanığın hak ve yükümlülüklerini ve çağrılmasından değerlendirilmesine kadar süreci inceleyerek hukuki öneriler getiriyor. Galatasaray Üniversitesi, danışman Prof. Dr. Vesile Sonay Evik. Tübingen’de TÜBİTAK destekli misafir araştırma ile yürütüldü. YÖK Tez 869871.", seymaThesisSearch],
  ["yl-tezi", 2018, "Yüksek lisans tezi", "Tez özeti", "Türk Ceza Hukuku Bağlamında Ne Bis in İdem İlkesi", ["principles","procedure"], "Ne bis in idem · İnsan hakları · KYOK kararı · Tez 541174", "Ne bis in idem ilkesi Türk hukukunda ve Türkiye’nin taraf olduğu sözleşmelerde nasıl düzenleniyor?", "Özete göre ilkeyi insan haklarıyla ilişkilendiriyor, uluslararası sözleşmeler ile iç hukuk arasındaki çelişkileri ortaya koyuyor ve kovuşturmaya yer olmadığı kararının ilke kapsamında etki doğurup doğurmadığını inceliyor. İlkenin yalnız kovuşturmada değil muhakemenin tümünde etkili olduğu sonucuna varıyor. İstanbul Bilgi Üniversitesi, danışman Dr. Öğr. Üyesi Asuman Aytekin İnceoğlu. YÖK Tez 541174.", "https://openaccess.bilgi.edu.tr/items/e1b6171e-e85d-41dc-8be9-ed11cafbc839"]
];

const seymaProfile = {
  name: "Şeyma Cebeci Bingöl",
  role: "Dr. Öğr. Üyesi",
  field: "Ceza ve Ceza Muhakemesi Hukuku",
  bio: "Ceza muhakemesinde delil ve tanık beyanı, ceza hukukunun temel ilkeleri ve özel hükümler üzerine çalışıyor. 2024’ten beri Özyeğin’de, öncesinde İstanbul Bilgi Üniversitesi’nde araştırma görevlisi.",
  universityUrl: seymaUniversityUrl,
  yokUrl: seymaYokUrl,
  featured: "gocmen-kacakciligi",
  summary: {
    areas: [
      ["Ceza muhakemesi ve delil", "Tanık beyanının güvenilirliği ve ne bis in idem"],
      ["Ceza hukukunun temel ilkeleri", "Kanunilik, son çare ilkesi ve fikri içtima"],
      ["Özel hükümler ve içtihat", "Göçmen kaçakçılığı, konut dokunulmazlığı ve yaralama"]
    ],
    recent: "2024’te tanık beyanının güvenilirliği üzerine doktora tezini kitaplaştırdı. 2025–2026’da konut dokunulmazlığında meşru amaç ve göçmen kaçakçılığına ilişkin Yargıtay içtihadını eleştiren makaleler yayımladı, meşru savunmada hedefte sapma üzerine sunum yaptı.",
    example: "basit-tibbi-mudahale",
    exampleLabel: "Hafif yaralama ölüme yol açarsa fail neden sorumlu?"
  },
  themes: {
    procedure: "Ceza muhakemesi ve delil",
    principles: "Ceza hukukunun temel ilkeleri",
    general: "Genel hükümler",
    special: "Özel hükümler ve Yargıtay içtihadı",
    rights: "İnsan hakları ve ceza hukuku"
  },
  themeNotes: {
    procedure: "Tanık beyanının güvenilirliği ve ne bis in idem ilkesi",
    principles: "Kanunilik ve belirlilik, son çare ilkesi ve ne bis in idem",
    general: "Netice sebebiyle ağırlaşmış suç, fikri içtima ve meşru savunma",
    special: "Göçmen kaçakçılığı, konut dokunulmazlığı, yaralama, terk ve cinsel suçlar",
    rights: "Yurda girme hakkı ve son çare ilkesinin hak ve özgürlüklerle ilişkisi"
  },
  works: seymaWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve profil", "25 Kasım 2026’da kontrol edildi. Kadroda 5. sırada, unvan Dr. Öğr. Üyesi, Ceza ve Ceza Muhakemesi Hukuku. Profil eğitimi, Bilgi’deki araştırma görevliliğini (2017–2024) ve Tübingen’deki TÜBİTAK destekli misafir araştırmayı veriyor. Yayın listesi ve CV bağlantısı yok.", seymaUniversityUrl],
    ["YÖK Akademik", "Kimlik 05E49AFE93CF68A3, ORCID 0000-0002-7459-2120. 9 yayın satırı: 3 makale, 2 bildiri, 4 kitap ve bölüm. Özgeçmiş PDF’i aynı listeyi veriyor. Yönetilen tez, proje, ödül ve üyelik yok. Eski kayıtlar Şeyma Cebeci adıyla.", seymaYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Yazar araması iki tezi verdi: yüksek lisans 541174 (Bilgi, 2018) ve doktora 869871 (Galatasaray, 2024). Danışman araması sonuç vermedi.", seymaThesisSearch],
    ["Bilgi, Galatasaray ve Özyeğin arşivleri", "Bilgi açık arşivinde 2019 makalesinin tam metni ve yüksek lisans tezi var. OpenAlex, doktora tezini Galatasaray AVESİS’te, 2025 makalesini Özyeğin eResearch’te gösteriyor.", "https://openaccess.bilgi.edu.tr/items/445a4e65-5784-480f-989f-de5cb6528e05"],
    ["TR Dizin, DergiPark ve dergi siteleri", "TR Dizin’de yalnız 2026 Akdeniz makalesi bulundu, tam metni DergiPark’tan okundu. 2025 makalesinin özeti Kadir Has dergisinin resmî sitesinden okundu.", "https://dergipark.org.tr/tr/pub/akdhfd/article/1875899"],
    ["ORCID, OpenAlex ve Google Akademik", "ORCID açık, eser listesi boş. OpenAlex A5140271291’de 3 eser var. Google Akademik doğrulanmış profil göstermiyor, başlık aramaları YÖK’teki eserleri ve iki kitabı doğruladı, yeni eser çıkmadı.", "https://orcid.org/0000-0002-7459-2120"],
    ["Yayınevleri", "Ne bis in idem kitabının içindekiler sayfası On İki Levha’nın örnek dosyasından görüldü. Tanık beyanı kitabı ve iki armağan bölümü YÖK ile Google Akademik künyesine dayanıyor.", "https://www.onikilevha.com.tr/images/books/9786257528603.pdf"],
    ["Sempozyum ve kongreler", "YÖK’teki 2 bildiri künyesi alındı. 20. Türk Ceza Hukuku Günleri programında (31 Mayıs 2025) meşru savunma sunumu görüldü ve ayrı kayıt yapıldı. 19. Türk Ceza Hukuku Günleri’nde (1 Haziran 2024) yalnız çalışma grubu üyesi olarak yer aldığı için eser sayılmadı.", "https://im.haberturk.com/images/others/2025/05/30/20tchgprogramiwebsitesine.pdf"],
    ["Projeler: TÜBİTAK, CORDIS", "YÖK proje sekmesi boş. TÜBİTAK desteği proje değil doktora araştırma bursu olarak kaydedildi. CORDIS’te ad aramaları 0 sonuç verdi, doğrulanmış kişisel eşleşme bulunamadı.", "https://cordis.europa.eu/search?q=%27Cebeci%27"]
  ]
};
