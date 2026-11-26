const nilayUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/nilaysenol";
const nilayYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=E969A1A3402C266D";
const nilayThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";

const nilayB = (id, year, title, topics, tags, question, finding, date) =>
  [id, year, "Bildiri", "YÖK künyesi", title, topics, tags, question, finding, nilayYokUrl, date];
const nilayTez = (id, no, yazar, yil, uni, baslik, topics, tags, question, note) =>
  [id, yil, "Tez danışmanlığı", "YÖK künyesi", baslik, topics, `${tags} · Tez ${no}`, question, `${yazar}, ${uni} yüksek lisans tezi (Tez No ${no}), tamamlandı. ${note}`, nilayThesisSearch];

const nilayWorks = [
  ["sharenting", 2025, "Makale", "Özet", "Legal Design for Informed Sharenting and Consent of the Child on Social Networking Sites", ["children"], "Sharenting · Çocuğun rızası · Hukuki tasarım · Scopus", "Ebeveynler sosyal medyada çocuklarının verilerini paylaşırken çocuğun rızası nasıl alınmalı?", "Özge Uzun Kazmacı, Esra Hamamcıoğlu, Argun Karamanlıoğlu ve Güler Akduman Büyüktarakçı ile birlikte. Ebeveynlerin çocuklarının fotoğraf ve kişisel verilerini paylaşmasının (sharenting) çocuğu “dijital kaçırma” ve ileride akran zorbalığı gibi ömür boyu sürebilecek risklere açtığını anlatıyor; bilgilendirilmiş paylaşım ve çocuğun rızası için hukuki tasarım önerileri getiriyor. Bratislava Law Review, c. 9, sayı 1, s. 75–98 (Scopus).", "https://doi.org/10.46282/blr.2025.9.1.967"],
  ["annales-mletr", 2024, "Makale", "Özet", "Uncitral Model Law on Electronic Transferable Records: Is It an Applicable Legal Framework for Bills of Lading Under Turkish Law?", ["ip"], "MLETR · Elektronik konişmento · Fonksiyonel eşdeğerlik · Scopus", "UNCITRAL'ın elektronik devredilebilir kayıtlar model kanunu Türk hukukunda konişmento için uygulanabilir mi?", "Işık Özer ve Gülfer Meriç ile birlikte. Model kanunun kâğıt belgelerin dijitalleştirilmesi için kâğıt belge ile elektronik kayıt arasında “fonksiyonel eşdeğerlik” aradığını ve teknoloji tarafsızlığını benimsediğini anlatıyor; Türk hukukunda konişmentonun bu çerçeveye girip girmediğini inceliyor. Annales de la Faculté de Droit d'Istanbul, sayı 75, s. 255–280 (Scopus).", "https://doi.org/10.26650/annales.2024.75.0010"],
  ["muris-muvazaasi", 2020, "Makale", "Özet", "5403 Sayılı Kanun Çerçevesinde Terekedeki Tarım Arazilerinin Devredilmesi Karşısında Muris Muvazaası", ["property", "family"], "Muris muvazaası · Tarım arazisi · 5403 sayılı Kanun · ESCI", "Tarım arazilerinin bölünmesini önleyen 5403 sayılı Kanun muris muvazaasına başvurmayı nasıl etkiliyor?", "Özge Uzun Kazmacı ile birlikte. Kanunun tarım arazilerinin bütünlüğünü korumak ve miras yoluyla bölünmesini önlemek için araziyi mirasçılardan birine, aile ortaklığına ya da şirkete bırakma imkânı getirdiğini anlatıyor ve bu düzenlemenin muris muvazaası karşısındaki etkisini değerlendiriyor. İstanbul Hukuk Mecmuası, c. 78, sayı 1, s. 161–192 (ESCI, TR Dizin). YÖK'te Türkçe ve İngilizce başlıkla iki kez girilmiş; bir kez sayıldı.", "https://doi.org/10.26650/mecmua.2020.78.1.0006"],
  ["tasinmaz-noter", 2020, "Makale", "Özet", "Taşınmaz Satış ve Satış Vaadi Sözleşmelerinin Hukuki Niteliği ve Uygulama Çerçevesinde Taşınmaz Satış Sözleşmelerinin Noterler Tarafından Yapılıp Yapılamayacağı Üzerine Bir Değerlendirme", ["property"], "Taşınmaz satışı · Satış vaadi · Noter · Resmî şekil", "Taşınmaz satış sözleşmelerini tapu yerine noterler de yapabilir mi?", "Taşınmaz satış ve satış vaadi sözleşmelerinin kanuni şekle tabi olduğunu, ama bu şekli kimin gerçekleştireceğinin Medeni Kanun ve Borçlar Kanunu'nda belirtilmediğini anlatıyor: Tapu Kanunu satış için tapu müdürlüğünü, Noterlik Kanunu ise satış vaadi için noterleri yetkili kılıyor. Kadir Has Üniversitesi Hukuk Fakültesi Dergisi, c. 8, sayı 2, s. 357–376 (TR Dizin). 2023'te “Borçlar Hukukunun Güncel Meseleleri” derlemesinde aynı konuda bir bölüm olarak da yer aldı; o bölüm ayrı sayılmadı.", "https://search.trdizin.gov.tr/tr/yayin/detay/412653"],
  ["bedelde-muvazaa", 2020, "Makale", "Özet", "Taşınmaz Satış Sözleşmelerinde Bedelde Muvazaa ve Sonuçları", ["property"], "Bedelde muvazaa · Tapu · Önalım hakkı · Vergi", "Tapuda satış bedelini gerçekte anlaşılandan farklı göstermenin hukuki sonuçları nelerdir?", "Tapuda bedelin genellikle daha az vergi ve harç ödemek için düşük, önalım hakkının kullanılmasını engellemek için ise yüksek gösterildiğini anlatıyor ve irade ile beyan arasındaki bu uyumsuzluğun yarattığı bedelde muvazaanın sonuçlarını inceliyor. Yeditepe Üniversitesi Hukuk Fakültesi Dergisi, c. 17, sayı 1, s. 305–337 (TR Dizin).", "https://search.trdizin.gov.tr/tr/yayin/detay/369643"],
  ["sunnet-cocuk", 2019, "Makale", "Özet", "Sünnet ve Çocuğun Menfaati", ["children", "family", "liability"], "Sünnet · Çocuğun rızası · Olgun küçük · Gillick yeterliliği", "Tıbbi gereklilik olmadan yapılan sünnette çocuğun rızası ve menfaati nasıl gözetilmeli?", "Çocukların erginliğe ulaşmadan önce de, özellikle vücut bütünlüğüne ilişkin konularda ayırt etme gücüne ve olgunluğa sahip olabileceğini anlatıyor; yabancı hukuklardaki olgun küçük doktrini ve Gillick yeterliliğini örnek vererek sünnette çocuğun rızasının önemini tartışıyor. Marmara Üniversitesi Hukuk Fakültesi Hukuk Araştırmaları Dergisi, c. 25, sayı 2, s. 1337–1357 (TR Dizin).", "https://doi.org/10.33433/maruhad.665544"],
  ["yibk-karar-incelemesi", 2007, "Makale", "Künye", "Karar İncelemesi: 27.02.2007 Tarihinde Resmî Gazete'de Yayımlanan Yargıtay İçtihadı Birleştirme Genel Kurulu Kararı Tahlili", ["contracts"], "Karar incelemesi · Yargıtay İBGK", "27 Şubat 2007'de yayımlanan Yargıtay içtihadı birleştirme kararı nasıl değerlendirilmeli?", "Maltepe Üniversitesi Hukuk Fakültesi Dergisi, sayı 1, s. 451–462. Künye YÖK'ten; kararın konusu künyeden anlaşılmıyor, metin okunmadı.", nilayYokUrl],

  ["teminat-geri-alim", 2022, "Kitap", "Künye", "Teminat Amaçlı Geri Alım Sözleşmeleri", ["contracts"], "Geri alım · Teminat · Doçentlik eseri · Yetkin", "Bir malın teminat amacıyla satılıp geri alınması hukuken nasıl nitelendirilir?", "Yetkin Yayınları 2022, ISBN 978-605-05-1155-0. Kadro sayfasına göre 2022'de doçentlik unvanını aldığı başlıca eser.", nilayYokUrl, "2022"],
  ["bayilik-kitap", 2011, "Kitap", "Künye", "Bayilik Sözleşmesi: Sona Ermesi ve Sonuçları", ["contracts"], "Bayilik · Dağıtım sözleşmeleri · Fesih", "Bayilik sözleşmesi nasıl sona erer ve bunun taraflar için sonuçları nelerdir?", "Vedat Kitapçılık 2011, ISBN 978-605-4446-22-3. Doktora tezine dayanıyor; Lexpera'da akaryakıt bayiliği üzerine bir kitapta kaynak olarak gösteriliyor.", nilayYokUrl],

  ["istirak-nafakasi", 2024, "Kitap bölümü", "Künye", "İştirak Nafakasında Hâkimin Taleple Bağlı Olmaması", ["family", "children"], "İştirak nafakası · Taleple bağlılık · Çocuğun üstün yararı", "Hâkim çocuk için iştirak nafakasına karar verirken tarafların talebiyle bağlı mı?", "Özge Uzun Kazmacı ve Evren Kılıçoğlu ile birlikte. Prof. Dr. Serap Helvacı'nın Anısına Armağan (On İki Levha, Aralık 2024), s. 1209–1234. Lexpera'da sayfa aralığıyla doğrulandı.", nilayYokUrl],
  ["avukatlik-azil", 2022, "Kitap bölümü", "Künye", "Avukatlık Sözleşmesinin Azil veya İstifa ile Sonlanması Durumunda Avukat Ücret ve Tazminat Talep Edebilir mi?", ["contracts"], "Avukatlık sözleşmesi · Azil · İstifa · Vekâlet ücreti", "Avukat azledildiğinde ya da istifa ettiğinde ücret ve tazminat isteyebilir mi?", "KHAS Hukuk Bülteni 2021–2022 Akademik Yılı Derlemesi (On İki Levha, Aralık 2022), s. 317–331. Lexpera'da doğrulandı.", nilayYokUrl],
  ["istihkak-elatma", 2021, "Kitap bölümü", "Künye", "Mülkiyet Hakkının Korunması: İstihkak ve El Atmanın Önlenmesi Davası", ["property"], "İstihkak davası · Elatmanın önlenmesi · Mülkiyet", "Malik mülkiyet hakkını istihkak ve elatmanın önlenmesi davalarıyla nasıl korur?", "Özge Uzun Kazmacı ile birlikte. Ayşe Havutçu, Müslüm Akıncı ve Mutlu Dinç'in editörlüğündeki “Gayrimenkul Davaları” (Seçkin 2021), s. 487–550.", nilayYokUrl],
  ["vekalet-serhi", 2017, "Kitap bölümü", "Künye", "Ölüm, Ehliyetin Kaybedilmesi ve İflas (TBK m. 513); Hükümleri (TBK m. 514)", ["contracts"], "Vekâlet sözleşmesi · Sona erme · Şerh", "Vekâlet sözleşmesi taraflardan birinin ölümü, ehliyet kaybı ya da iflasıyla nasıl sona erer?", "Özge Uzun Kazmacı ile birlikte. Hakan Topbaş'ın editörlüğündeki “Vekâlet Sözleşmesi Kısa Şerhi” (Aristo 2017), s. 162–183.", nilayYokUrl],

  ["aile-hukuku-ed", 2006, "Editörlük", "Künye", "Uygulamalı Aile Hukuku Sertifika Programı: Medeni Hukuk ve Milletlerarası Özel Hukuk ile İlişkili Güncel Aile Hukuku Meseleleri", ["family"], "Aile hukuku · Sertifika programı · Derleme", "Medeni hukuk ve milletlerarası özel hukuk açısından güncel aile hukuku meseleleri nelerdir?", "Şükran Şıpka, Ebru Şensöz Malkoç ve Arif Barış Özbilen ile birlikte editörlük (İstanbul Ticaret Üniversitesi Yayınları 2006; 18–20 Kasım 2005 programı). Künye YÖK'ten; Google Akademik'te bu derlemedeki bir bölüme yapılan atıflarda editörler arasında adı geçiyor.", nilayYokUrl],

  nilayB("aile-vakfi", 2023, "Aile Vakfı", ["family"], "Aile vakfı · Medeni Kanun", "Aile vakfı Türk hukukunda nasıl düzenleniyor ve hangi amaçlarla kurulabilir?", "Özge Uzun Kazmacı ile birlikte. Medeni Hukuk Kongresi, Aralık 2023 (özet).", "Aralık 2023"),
  nilayB("bosanma-protokolu", 2021, "Anlaşmalı Boşanma Protokolündeki Mali Düzenlemelere İlişkin Güncel Sorunlar", ["family"], "Anlaşmalı boşanma · Protokol · Mali sonuçlar", "Anlaşmalı boşanma protokolündeki mali düzenlemeler uygulamada hangi sorunları doğuruyor?", "Özge Uzun Kazmacı ile birlikte. II. Medeni Hukuk Kongresi, Aralık 2021 (tam metin).", "Aralık 2021"),
  nilayB("fsek-47", 2021, "Anayasa Mahkemesi Kararı Çerçevesinde FSEK m. 47 “Kamuya Mal Etme” Düzenlemesinin Değerlendirilmesi", ["ip"], "Kamuya mal etme · FSEK 47 · Anayasa Mahkemesi", "Bir eserin kamuya mal edilmesini düzenleyen FSEK 47 Anayasa Mahkemesi kararından sonra nasıl değerlendirilmeli?", "Özel Hukukun Güncel Sorunları ve Anayasa'nın Özel Hukuka Etkileri sempozyumu, Nisan 2021 (özet; bildiri kitabı s. 167–170).", "Nisan 2021"),
  nilayB("genel-kredi-gik", 2019, "Genel Kredi Sözleşmelerindeki Hükümlerin Genel İşlem Koşulları Düzenlemesi Bakımından Değerlendirilmesi", ["contracts", "consumer"], "Genel kredi sözleşmesi · Genel işlem koşulları · Banka", "Bankaların genel kredi sözleşmelerindeki standart hükümler genel işlem koşulları denetimine takılır mı?", "Seri üretimle birlikte her hükmün tek tek müzakere edilmediği standart sözleşmelerin ortaya çıktığını ve içeriklerinin tek yanlı hazırlanmış genel işlem koşullarından oluştuğunu anlatıyor; genel kredi sözleşmelerini bu açıdan inceliyor (özet OpenAlex'ten okundu). ICES-2019, İstanbul, Haziran 2019 (tam metin).", "Haziran 2019"),
  nilayB("deprem-yapi-denetim", 2019, "Depremden Doğan Zararlarda Yapı Denetim Kuruluşlarının ve Yapı Malikinin Sorumluluğuna İlişkin Hükümlerin Değerlendirilmesi", ["liability", "property"], "Deprem · Yapı denetimi · Yapı malikinin sorumluluğu", "Depremde yıkılan binalardan doğan zararlardan yapı denetim kuruluşu ve yapı maliki nasıl sorumlu olur?", "VI. Uluslararası Deprem Sempozyumu, Eylül 2019 (özet).", "Eylül 2019"),
  nilayB("cinsiyet-degisikligi", 2019, "Gender Reassignment in Turkish Civil Code", ["family"], "Cinsiyet değişikliği · TMK 40 · Kişiler hukuku", "Türk Medeni Kanunu cinsiyet değişikliğine hangi şartları bağlıyor?", "7th International Conference on Gender Studies, KKTC, Ekim 2019 (özet).", "Ekim 2019"),
  nilayB("evlat-edinme", 2015, "Personality Rights in Adoption in Turkey (Türk Hukukunda Evlat Edinmede Kişilik Hakkı)", ["family", "children"], "Evlat edinme · Kişilik hakkı · Türkiye-Slovenya", "Evlat edinmede çocuğun ve tarafların kişilik hakları nasıl korunuyor?", "IV. Türkiye-Slovenya Karşılaştırmalı Hukuk Sempozyumu: Kişilik Hakları, Ekim 2015 (tam metin; Seçkin, ISBN 978-975-02-4029-4).", "Ekim 2015"),
  nilayB("hekim-tazminat", 2014, "Hekimin Tazminat Sorumluluğu (Hekimin Hukuki Sorumluluğu)", ["liability"], "Hekimin hukuki sorumluluğu · Tazminat · Tıbbi müdahale", "Hekim tıbbi müdahaleden doğan zararlardan hangi koşullarda tazminatla sorumlu olur?", "Kadir Has Üniversitesi II. Ulusal Sağlık Hukuku Sempozyumu, Mayıs 2014 (tam metin; s. 117–132).", "Mayıs 2014"),
  nilayB("estetik-cerrahi", 2012, "Civil Liability of Physicians for Cosmetic Surgery", ["liability"], "Estetik cerrahi · Hekimin sorumluluğu · Eser sözleşmesi tartışması", "Estetik ameliyatta hekimin hukuki sorumluluğu sıradan tıbbi müdahaleden farklı mı?", "I. Türkiye-Slovenya Uluslararası Hukuk Sempozyumu, Slovenya, Haziran 2012 (tam metin).", "Haziran 2012"),
  nilayB("satis-iliskisi-haklar", 2011, "Türk Borçlar Kanununda Satış İlişkisi Doğuran Haklar", ["contracts", "property"], "Önalım · Geri alım · Alım hakkı · TBK", "Yeni Türk Borçlar Kanunu önalım, geri alım ve alım haklarını nasıl düzenliyor?", "I. Türk-Azerbaycan Uluslararası Hukuk Sempozyumu, Temmuz 2011 (tam metin).", "Temmuz 2011"),

  ["doktora-tezi", 2010, "Doktora tezi", "Tez özeti", "Bayilik Sözleşmesinin Sona Ermesi ve Sona Ermenin Sonuçları", ["contracts"], "Bayilik · İsimsiz sözleşme · Haklı fesih · Tez 277926", "Bayilik sözleşmesi hangi sebeplerle sona erer ve sona ermenin taraflara etkileri nelerdir?", "İstanbul Üniversitesi Sosyal Bilimler Enstitüsü Medeni Hukuk, danışman Prof. Dr. Saibe Oktay Özdemir. Bayiliğin üreticinin dağıtım ağına dahil olan bayiin malı kendi adına satmayı üstlendiği çerçeve ve sürekli bir isimsiz sözleşme olduğunu; ölüm, iflas, ehliyet kaybı, anlaşma ve olağan ya da haklı fesihle sona erebileceğini anlatıyor.", nilayThesisSearch],
  ["yl-tezi", 2004, "Yüksek lisans tezi", "YÖK künyesi", "The Protection of Computer Programs in Turkish Law on Intellectual and Artistic Works", ["ip"], "Bilgisayar programları · FSEK · Telif hakkı · Tez 148718", "Bilgisayar programları Fikir ve Sanat Eserleri Kanunu'nda nasıl korunuyor?", "Marmara Üniversitesi Avrupa Birliği Enstitüsü AB Hukuku (İngilizce), danışman Doç. Dr. Serap Helvacı. Künye Tez Merkezi'nden; özet okunamadı.", nilayThesisSearch],

  nilayTez("tez-969015", "969015", "Tibet Ege Ermutlu", 2025, "Özyeğin Üniversitesi", "Gelir Paylaşımlı İnşaat Sözleşmelerinde Tarafların Hak ve Borçları", ["contracts", "property"], "Gelir paylaşımlı inşaat · Eser sözleşmesi", "Gelir paylaşımlı inşaat sözleşmelerinde tarafların hak ve borçları nelerdir?", "Başlık ve künye Tez Merkezi'nden."),
  nilayTez("tez-890801", "890801", "Sina Onur Andaç", 2024, "Özyeğin Üniversitesi", "Futbol Menajerliği Sözleşmesi", ["contracts"], "Futbol menajerliği · Spor hukuku", "Futbol menajerliği sözleşmesinin hukuki niteliği nedir?", "Başlık ve künye Tez Merkezi'nden."),
  nilayTez("tez-860266", "860266", "Gültekin Can Gökalp", 2024, "Özyeğin Üniversitesi", "Rekabet Hukuku Bakımından İlaç Sektöründeki Dağıtım Sözleşmelerine Yönelik Sınırlamalar", ["consumer", "contracts"], "Dağıtım sözleşmeleri · İlaç sektörü · Rekabet hukuku", "Rekabet hukuku ilaç sektöründeki dağıtım sözleşmelerine hangi sınırlar getiriyor?", "Başlık ve künye Tez Merkezi'nden."),
  nilayTez("tez-761108", "761108", "Ozan Köroğlu", 2022, "Bahçeşehir Üniversitesi", "Avukatın Sözleşmeden Doğan Hukuki Sorumluluğu", ["contracts", "liability"], "Avukatın sorumluluğu · Vekâlet sözleşmesi", "Avukat müvekkiline karşı sözleşmeden doğan hangi sorumluluğu taşır?", "Önceki kurumu Bahçeşehir'de danışmanlık; başlık ve künye Tez Merkezi'nden."),
  nilayTez("tez-719434", "719434", "Oğuzhan Kundak", 2022, "Bahçeşehir Üniversitesi", "6502 Sayılı Tüketicinin Korunması Hakkında Kanun Çerçevesinde Elektronik Ticarette Aldatıcı Reklamlara Karşı Tüketicinin Korunması", ["consumer"], "Aldatıcı reklam · Elektronik ticaret · Tüketici", "Elektronik ticarette aldatıcı reklamlara karşı tüketici nasıl korunuyor?", "Önceki kurumu Bahçeşehir'de danışmanlık; başlık ve künye Tez Merkezi'nden.")
];

const nilayProfile = {
  name: "Ayşe Nilay Şenol",
  role: "Doç. Dr.",
  field: "Medeni Hukuk",
  bio: "Medeni hukuk, borçlar ve sözleşmeler hukuku, gayrimenkul hukuku ve fikri mülkiyet üzerine çalışıyor. İstanbul Hukuk mezunu (2001); Marmara Avrupa Birliği Enstitüsü'nde bilgisayar programlarının FSEK'te korunması üzerine yüksek lisans, İstanbul Üniversitesi'nde bayilik sözleşmesinin sona ermesi üzerine doktora yaptı. 2022'de “Teminat Amaçlı Geri Alım Sözleşmeleri” çalışmasıyla doçent oldu. Arabulucu; Aile Hukuku Derneği ve İstanbul Barosu Fikri ve Sınai Mülkiyet Komisyonu üyesi. 1 Haziran 2022'den beri Özyeğin Hukuk'ta.",
  universityUrl: nilayUniversityUrl,
  yokUrl: nilayYokUrl,
  featured: "teminat-geri-alim",
  summary: {
    areas: [
      ["Sözleşmeler ve borçlar hukuku", "Bayilik, teminat amaçlı geri alım, vekâlet ve avukatlık sözleşmeleri"],
      ["Taşınmaz hukuku", "Taşınmaz satışı, bedelde muvazaa, muris muvazaası ve elatmanın önlenmesi"],
      ["Aile ve kişiler hukuku", "Boşanma protokolü, iştirak nafakası, evlat edinme, cinsiyet değişikliği"],
      ["Çocuk hakları", "Sharenting, sünnette çocuğun rızası"],
      ["Fikri mülkiyet ve dijitalleşme", "Bilgisayar programları, kamuya mal etme, elektronik konişmento"],
      ["Sorumluluk hukuku", "Hekimin ve yapı denetiminin sorumluluğu"],
      ["Tüketici ve rekabet", "Genel işlem koşulları, aldatıcı reklam, dağıtım sözleşmeleri"]
    ],
    recent: "2024–2025'te Özyeğin ekibiyle ortak iki makale: elektronik konişmento için UNCITRAL model kanunu (Annales) ve sosyal medyada çocuk verilerinin paylaşılmasında hukuki tasarım (Bratislava Law Review). Helvacı Armağanı'nda iştirak nafakası bölümü; danışmanı olduğu iki tez 2024–2025'te Özyeğin'de tamamlandı.",
    example: "bedelde-muvazaa",
    exampleLabel: "Tapuda satış bedelini düşük göstermenin hukuki sonucu nedir?"
  },
  themes: {
    contracts: "Sözleşmeler ve borçlar hukuku",
    property: "Taşınmaz ve eşya hukuku",
    family: "Aile ve kişiler hukuku",
    children: "Çocuk hakları",
    ip: "Fikri mülkiyet ve dijitalleşme",
    liability: "Sorumluluk hukuku",
    consumer: "Tüketici ve rekabet"
  },
  themeNotes: {
    contracts: "Bayilik, geri alım, vekâlet, avukatlık ve tezler",
    property: "Taşınmaz satışı, muvazaa, istihkak",
    family: "Boşanma, nafaka, aile vakfı, evlat edinme",
    children: "Sharenting, sünnet, nafaka, evlat edinme",
    ip: "Bilgisayar programları, FSEK 47, MLETR",
    liability: "Hekim, estetik cerrahi, deprem",
    consumer: "Genel işlem koşulları, reklam, rekabet"
  },
  works: nilayWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026'da kontrol edildi. Unvan Doç. Dr., alan Medeni Hukuk. 1 Haziran 2022'den beri Özyeğin'de. Sayfada yayın listesi yok.", nilayUniversityUrl],
    ["YÖK Akademik", "Kayıt E969A1A3402C266D, ORCID 0000-0001-7144-9698. 8 makale kaydı, 10 bildiri, 7 kitap kaydı ve 1 editörlük; proje kaydı yok. İHM makalesi Türkçe ve İngilizce başlıkla iki kez girilmiş, bir kez sayıldı. 2023 “Borçlar Hukukunun Güncel Meseleleri” bölümü 2020 KHAS makalesiyle aynı konuda olduğu için ayrı sayılmadı.", nilayYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Kendi iki tezi bulundu (doktora 277926, yüksek lisans 148718); doktora özeti okundu. Danışman aramasında 5 yüksek lisans tezi çıktı (3 Özyeğin, 2 Bahçeşehir); özetleri okunmadı.", nilayThesisSearch],
    ["TR Dizin", "Üç 2020 makalesinin (KHAS, Yeditepe, İHM) özeti okundu. Ad aramasında yazar eşleşmesi çalışmadı; başlıkla bulundu.", "https://search.trdizin.gov.tr/"],
    ["DergiPark", "Doğrudan arama kullanılmadı (CAPTCHA). DergiPark'taki Marmara, İHM ve Annales makaleleri DOI üzerinden doğrulandı.", "https://dergipark.org.tr/"],
    ["Crossref, OpenAlex ve ORCID", "ORCID kaydı boş. OpenAlex'te 4 eser var ve özetleri okundu (Bratislava, Annales, Marmara, ICES bildirisi).", "https://orcid.org/0000-0001-7144-9698"],
    ["Google Akademik", "Profil var (Özyeğin); 15 kayıt, yeni bir eser çıkmadı. Aramada görünen 2016 tarihli “VUK 371 ve muvazaa” ve “Beslemelik” başlıkları yalnız atıf kaydı; doğrulanamadığı için sayılmadı.", "https://scholar.google.com/citations?user=z_RT4i0AAAAJ"],
    ["Özyeğin eResearch", "Tarayıcı onayı gerektirdiği için taranmadı. Google Akademik'te görünen eResearch kaydı (sharenting makalesi) listede.", "https://eresearch.ozyegin.edu.tr/"],
    ["Lexpera literatür", "Kurumsal oturumla yalnız künye düzeyinde arandı; 10 sonuç çıktı. İki kitap bölümü sayfa aralığıyla doğrulandı; diğerleri atıf ve teşekkür kayıtları.", "https://www.lexpera.com.tr/"],
    ["Projeler ve CORDIS", "YÖK proje kaydı yok. CORDIS'te “Şenol” ve “Nilay” birlikte 0 sonuç verdi.", "https://cordis.europa.eu/"]
  ]
};
