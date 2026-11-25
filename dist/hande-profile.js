const handeUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/handegur";
const handeYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=8CCA31317D974199";
const handeThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";
const handeTrDizin = id => `https://search.trdizin.gov.tr/tr/yayin/detay/${id}`;

const handeWorks = [
  ["nonint-zamansal", 2022, "Makale", "Özet", "Uluslararası İnsancıl Hukukun Zamansal Kapsamı (II): “Uluslararası Olmayan Silahlı Çatışmalarda” İnsancıl Hukukun Uygulanmaya Başlaması", ["ihl"], "Uluslararası olmayan silahlı çatışma · Eşik · Meltem Sarıbeyoğlu Skalar", "Bir iç karışıklık hangi noktada uluslararası olmayan silahlı çatışmaya dönüşür ve insancıl hukuk ne zaman uygulanmaya başlar?", "Uluslararası olmayan silahlı çatışmalarda insancıl hukukun başlangıç anını belirlemenin uluslararası çatışmalara göre çok daha zor olduğunu, çünkü iç şiddetin ancak belli bir eşiği aştığında bu kurallara tabi olduğunu anlatıyor ve bu eşiğin nasıl tespit edileceğini inceliyor. Meltem Sarıbeyoğlu Skalar ile, Gür ilk yazar. MÜHFHAD 28/1, s. 223–239. Özet Crossref ve DergiPark makale sayfasından okundu.", "https://doi.org/10.33433/maruhad.1083038"],
  ["int-zamansal", 2021, "Makale", "Özet", "Uluslararası İnsancıl Hukukun Zamansal Kapsamı: “Uluslararası Silahlı Çatışmalarda” İnsancıl Hukukun Uygulanmaya Başlaması", ["ihl"], "Uluslararası silahlı çatışma · Çatışmanın sınıflandırılması · Meltem Sarıbeyoğlu Skalar", "Uluslararası bir silahlı çatışmada insancıl hukuk kuralları hangi andan itibaren uygulanır?", "İnsancıl hukukun uygulanmaya başlaması için çatışmanın başladığı anın ve çatışmanın uluslararası mı uluslararası olmayan mı olduğunun saptanması gerektiğini, günümüz çatışmalarında bu ayrımın her zaman net yapılamadığını anlatıyor. Meltem Sarıbeyoğlu Skalar (ilk yazar) ile. Galatasaray Üniversitesi Hukuk Fakültesi Dergisi 2021/2, s. 2213–2252. TR Dizin 510055, açık erişim.", handeTrDizin(510055)],
  ["isteksiz-aciz", 2017, "Makale", "Özet", "Devlet-Dışı Aktörlere Karşı Meşru Müdafaada “İsteksiz veya Aciz” Doktrini: Suriye ve DAEŞ Örneği", ["force"], "Meşru müdafaa · Devlet dışı aktörler · DAEŞ · Selami Kuran", "Bir devlet, kendi ülkesindeki silahlı grupları durdurmaya isteksiz ya da muktedir değilse, mağdur devlet o ülkede kuvvet kullanabilir mi?", "Devlet dışı aktörlerin faaliyetleri için bir ev sahibi devletin ülkesine ihtiyaç duyduğunu, ev sahibi devletin isteksiz veya aciz olması durumunda mağdur devletin o ülkede kuvvet kullanıp kullanamayacağını DAEŞ’e yönelik müdahale üzerinden tartışıyor. Selami Kuran (ilk yazar) ile; yüksek lisans teziyle aynı konu. MÜHFHAD 23/1, s. 57–88. TR Dizin 270253, açık erişim.", handeTrDizin(270253)],
  ["afgan-kadinlar", 2025, "Bildiri", "Bildiri künyesi", "Afgan Kadınlarına Yönelik Cinsiyet Ayrımcılığının Uluslararası Adalet Divanına Taşınması", ["icj"], "Afganistan · Taliban · CEDAW · Uluslararası Adalet Divanı", "Taliban yönetimindeki Afganistan’da kadınlara yönelik ayrımcılık Uluslararası Adalet Divanı önüne nasıl getirilebilir?", "Toplumsal Cinsiyet Eşitliği, Kadın ve Hukuk etkinliği, 5 Mart 2025. YÖK ve özgeçmişten; bildiri türü ve kitap bilgisi kayıtta yok, metin okunmadı.", handeYokUrl],
  ["guney-afrika-israil", 2024, "Bildiri", "Özet bildiri künyesi", "Güney Afrika’nın İsrail Aleyhine Uluslararası Adalet Divanı Başvurusunun Hukuksal Analizi", ["icj","palestine"], "Soykırım Sözleşmesi · Gazze · Uluslararası Adalet Divanı", "Güney Afrika’nın Soykırım Sözleşmesi’ne dayanarak İsrail aleyhine açtığı dava hukuken nasıl değerlendirilmeli?", "3. Selçuk Hukuk Kongresi, 5 Şubat 2024. Özet bildiri, kitap s. 147–148, ISBN 978-625-371-317-1. YÖK ve özgeçmişten.", handeYokUrl],
  ["baris-icin-birlik", 2024, "Bildiri", "Bildiri künyesi", "Barış için Birlik Kararı Bağlamında İsrail’e Askerî Yaptırımların İmkânı", ["palestine","force"], "Barış için Birlik · BM Genel Kurulu · Yaptırımlar", "Güvenlik Konseyi tıkandığında BM Genel Kurulu “Barış için Birlik” yoluyla İsrail’e askerî yaptırım önerebilir mi?", "Uluslararası Hukukta Filistin Konferansı ve Öğrenci Forumu 1, İstanbul, 20 Aralık 2024. YÖK ve özgeçmişten, metin okunmadı.", handeYokUrl],
  ["filistin-danisma-2023", 2023, "Bildiri", "Bildiri künyesi", "İsrail-Filistin Anlaşmazlığı Yeniden Lahey’de: İşgal Altındaki Filistin Toprakları Hakkında Yaklaşan Uluslararası Adalet Divanı Danışma Görüşü", ["icj","palestine","occupation"], "Danışma görüşü · İşgal altındaki Filistin toprakları · Lahey", "Uluslararası Adalet Divanı’ndan istenen danışma görüşü İsrail’in işgali hakkında neyi belirleyecek?", "İnsan Hakları Hukuku – İnsancıl Hukuk Bağlamında İsrail-Filistin Uyuşmazlığı etkinliği, İstanbul, 26 Ekim 2023. YÖK ve özgeçmişten. Konu 2025’teki kitap bölümünde danışma görüşü verildikten sonra yeniden ele alınıyor.", handeYokUrl],
  ["isgal-mesru-mudafaa", 2021, "Bildiri", "Özet bildiri künyesi", "İşgal Altındaki Toprakların Geri Alınması İçin Meşru Müdafaa Kapsamında Kuvvet Kullanılması: Devam Eden Silahlı Saldırı Meselesi", ["force","occupation"], "Meşru müdafaa · İşgal · Devam eden silahlı saldırı · Karabağ", "Bir devlet, yıllardır işgal altında olan topraklarını geri almak için meşru müdafaaya dayanabilir mi?", "Uluslararası Hukukun Güncel Sorunları Konferansı, İstanbul, 23 Eylül 2021. Özet bildiri, s. 15–19, ISBN 978-625-432-233-4. YÖK ve özgeçmişten.", handeYokUrl],
  ["filistin-danisma-gorusu", 2025, "Kitap bölümü", "Künye", "İsrail’in Filistin Topraklarındaki İşgaline İlişkin Uluslararası Adalet Divanı Danışma Görüşü", ["icj","palestine","occupation"], "2024 danışma görüşü · İşgal hukuku · Ali Kerem Kayhan", "Uluslararası Adalet Divanı İsrail’in Filistin topraklarındaki işgalinin hukuka uygunluğu hakkında ne dedi?", "Uluslararası Hukukta Filistin Meselesi (ed. Ali Kerem Kayhan, Ali Osman Karaoğlu), Adalet Yayınevi, 2025, s. 279–316, ISBN 9786253770624. Künye YÖK ve özgeçmişten.", handeYokUrl],
  ["isgalci-cevre", 2024, "Kitap bölümü", "Künye", "Uluslararası Hukukta İşgalci Gücün Çevresel Yükümlülükleri: İşgal Durumlarında Doğal Kaynakların Sürdürülebilir Kullanımı", ["occupation"], "İşgal hukuku · Doğal kaynaklar · Sürdürülebilir kalkınma", "İşgalci güç, işgal ettiği topraklardaki doğal kaynakları nasıl kullanabilir ve çevreyi korumakla yükümlü mü?", "Sürdürülebilir Kalkınma Hukukuna Disiplinlerarası Yaklaşımlar (ed. Meltem Sarıbeyoğlu Skalar, Oya Boyar), On İki Levha, 2024, s. 125–141, ISBN 978-625-5994-66-0. Aynı metin 30 Mayıs 2024’teki Sürdürülebilir Kalkınmaya Hukuksal Bakış sempozyumunda tam metin bildiri olarak sunuldu; YÖK’te bildiri ve bölüm olarak iki kez kayıtlı, aynı ISBN’li tek yayın olduğu için bir kez sayıldı.", handeYokUrl],
  ["bm-baris-kuvvet", 2024, "Kitap bölümü", "Künye", "Birleşmiş Milletler Barışı Koruma Operasyonlarında Kuvvet Kullanma", ["peacekeeping","force"], "Barışı koruma · Kuvvet kullanma · Jus ad bellum", "BM barışı koruma güçleri hangi durumlarda ve hangi hukuki dayanakla kuvvet kullanabilir?", "Post-Vestfalyan Dönemde Kuvvet Kullanma Hukuku (Jus Ad Bellum): Temel Esaslar ve Güncel Konular (ed. Fatma Taşdemir, Gökhan Albayrak, Adem Özer), Adalet Yayınevi, 2024, s. 257–283, ISBN 9786253770815. Künye YÖK ve özgeçmişten.", handeYokUrl],
  ["karabag-uti-possidetis", 2022, "Kitap bölümü", "Künye", "Bir Uluslararası Hukuk İlkesi Olarak Uti Possidetis Juris Bağlamında Karabağ", ["force"], "Uti possidetis juris · Karabağ · Sınırlar", "Uti possidetis juris ilkesi Karabağ üzerindeki egemenlik tartışmasında neyi gösteriyor?", "2020 Karabağ Savaşı: İlham Aliyev: Karabağ Azerbaycan’dır! (ed. Ali Samir Merdan), Nobel, 2022, s. 61–78, ISBN 978-625-398-120-4. Künye YÖK ve özgeçmişten.", handeYokUrl],
  ["doktora-tezi", 2023, "Doktora tezi", "Tez özeti", "Birleşmiş Milletler Barışı Koruma Operasyonlarında Sivillerin Korunması", ["peacekeeping","ihl"], "Sivillerin korunması · Barışı koruma · Jus in bello · Tez 805177", "BM barışı koruma güçlerinin sivilleri korumak için kuvvet kullanması hangi hukuki rejime tabi olmalı?", "Son otuz yılda sivillere yönelik kitlesel zulümler karşısında BM barışı koruma operasyonlarına daha sık başvurulduğunu, en tartışmalı gelişmenin sivilleri korumak için kuvvet kullanılması olduğunu anlatıyor. Uygulamada kuvvete başvurmanın hukuki dayanağı ile uygulanacak hukuki rejim arasında ayrım yapılmamasının sorun yarattığını savunuyor. Marmara Üniversitesi Sosyal Bilimler Enstitüsü, danışman Prof. Dr. Meltem Sarıbeyoğlu Skalar. Doktora sırasında Köln Üniversitesi’nde araştırma yaptı. YÖK Tez 805177.", handeThesisSearch],
  ["yl-tezi", 2016, "Yüksek lisans tezi", "YÖK künyesi", "The “Unwilling or Unable” Doctrine of Self-Defense Against Non-State Actors", ["force"], "Meşru müdafaa · Devlet dışı aktörler · Marmara · Tez 437041", "Devlet dışı aktörlere karşı meşru müdafaada “isteksiz veya aciz devlet” doktrini uluslararası hukukta kabul görür mü?", "İngilizce yüksek lisans tezi, Marmara Üniversitesi Sosyal Bilimler Enstitüsü. Türkçe başlığı Devlet-Dışı Aktörlere Karşı Meşru Savunmada “İsteksiz veya Aciz” Doktrini. Konusu 2017 MÜHFHAD makalesine taşındı. YÖK Tez 437041. Tez Merkezi erişimi tarama sırasında engellendiği için danışman bilgisi ve özet okunamadı.", handeThesisSearch]
];

const handeProfile = {
  name: "Hande Gür Orcan",
  role: "Dr. Öğr. Üyesi",
  field: "Milletlerarası Kamu Hukuku",
  bio: "Uluslararası insancıl hukuk, uluslararası hukukta kuvvet kullanma, sivillerin korunması ve BM barışı koruma operasyonları üzerine çalışıyor. Ankara Hukuk mezunu, yüksek lisans ve doktorası Marmara Üniversitesi kamu hukukundan. 2014–2023 arasında Marmara’da araştırma görevlisi, doktora sırasında Köln Üniversitesi’nde araştırmacı. 2023’ten beri Özyeğin’de.",
  universityUrl: handeUniversityUrl,
  yokUrl: handeYokUrl,
  featured: "nonint-zamansal",
  summary: {
    areas: [
      ["Uluslararası insancıl hukuk", "Silahlı çatışmanın başladığı an, çatışmaların sınıflandırılması ve sivillerin korunması"],
      ["Kuvvet kullanma", "Devlet dışı aktörlere karşı meşru müdafaa, işgal altındaki toprakların geri alınması ve barışı koruma"],
      ["Filistin ve Uluslararası Adalet Divanı", "İşgal hakkındaki danışma görüşü, Güney Afrika–İsrail davası ve BM Genel Kurulu’nun rolü"]
    ],
    recent: "2023’te BM barışı koruma operasyonlarında sivillerin korunması üzerine doktorasını tamamladı. 2024–2025’te Filistin meselesi, Uluslararası Adalet Divanı’ndaki davalar ve işgalci gücün çevresel yükümlülükleri üzerine bildiri ve kitap bölümleri yazdı.",
    example: "isteksiz-aciz",
    exampleLabel: "Silahlı gruplara karşı başka bir devletin topraklarında kuvvet kullanılabilir mi?"
  },
  themes: {
    ihl: "Uluslararası insancıl hukuk",
    force: "Kuvvet kullanma ve meşru müdafaa",
    peacekeeping: "BM barışı koruma",
    occupation: "İşgal hukuku",
    palestine: "Filistin meselesi",
    icj: "Uluslararası Adalet Divanı"
  },
  themeNotes: {
    ihl: "İnsancıl hukukun zamansal kapsamı ve sivillerin korunması",
    force: "İsteksiz veya aciz devlet doktrini, işgal altındaki toprakları geri alma, Barış için Birlik ve Karabağ",
    peacekeeping: "Barışı koruma operasyonlarında kuvvet kullanma ve sivillerin korunması",
    occupation: "İşgalin hukuka uygunluğu, işgalcinin doğal kaynaklara ilişkin çevresel yükümlülükleri, devam eden silahlı saldırı",
    palestine: "Danışma görüşü, Güney Afrika–İsrail davası ve askerî yaptırımlar",
    icj: "Danışma görüşü, Güney Afrika–İsrail davası ve Afgan kadınlarına yönelik ayrımcılık"
  },
  works: handeWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026’da kontrol edildi. Adı Hande Gür Orcan, unvan Dr. Öğr. Üyesi, alan Milletlerarası Kamu Hukuku. 15 Eylül 2023’ten beri Özyeğin’de. Biyografi Ankara Hukuk lisansı (2012), Marmara yüksek lisans ve doktorası, Köln Üniversitesi’ndeki araştırmasını veriyor. Yayın listesi yok.", handeUniversityUrl],
    ["YÖK Akademik ve özgeçmiş", "Kayıt 8CCA31317D974199, 13 yayın (3 makale, 6 bildiri, 4 kitap bölümü). Özgeçmiş aynı listeyi ve bölüm sayfa aralıklarını veriyor. Proje, ödül ve tez danışmanlığı kaydı yok. 2024 çevresel yükümlülükler metni hem bildiri hem bölüm olarak listelenmiş, bir kez sayıldı.", handeYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Doktora tezi 805177 (2023, danışman Meltem Sarıbeyoğlu Skalar) ve yüksek lisans tezi 437041 (2016) bulundu. Ad araması aynı adlı başka kişilerin (ör. Hande Gürbüz) tezlerini de getiriyor, onlar dışlandı. Yüksek lisans tezinin künyesi açılırken Tez Merkezi erişimi geçici olarak engelledi; danışman ve özet bu yüzden okunamadı.", handeThesisSearch],
    ["TR Dizin", "2017 ve 2021 makaleleri kayıtlı, özetler buradan okundu. 2022 MÜHFHAD makalesi ad aramasında çıkmadı, Crossref’ten doğrulandı.", handeTrDizin(510055)],
    ["DergiPark", "Doğrudan arama kullanılmadı (CAPTCHA). Google Akademik sonuçlarındaki DergiPark makale sayfaları ve DOI üzerinden MÜHFHAD 2017 ve 2022 makaleleri doğrulandı. Marmara açık arşivinde 2022 makalesi ayrıca kayıtlı.", "https://dergipark.org.tr/en/pub/maruhad/article/1083038"],
    ["Crossref, OpenAlex ve ORCID", "ORCID 0000-0002-3066-6343 açık ama eser listesi boş. Crossref’te aynı adlı bir sosyologun (maneviyat, Mevlevilik, coğrafya ders kitapları) yayınları var; OpenAlex’te Alberta Üniversitesi’ne bağlı Hande Gür kaydı da ona ait. Bunlar dışlandı.", "https://orcid.org/0000-0002-3066-6343"],
    ["Google Akademik", "Profil yok. Ad aramaları iki makaleyi, iki tezi (ProQuest kayıtları) ve Marmara arşiv kaydını doğruladı. Yeni yayın çıkmadı.", "https://scholar.google.com/scholar?q=%22H+G%C3%BCr%22+insanc%C4%B1l+hukuk"],
    ["Özyeğin eResearch", "“Gür, Hande”, “Gür Orcan” ve “Orcan, Hande” aramalarında kendi yayını yok. Çıkan tek kayıt, yazarı ve danışmanları başkası olan bir doktora tezi.", "https://eresearch.ozyegin.edu.tr/"],
    ["Projeler ve CORDIS", "YÖK proje kaydı yok. CORDIS’te “Hande Gür” ve “Hande Gur” 0 sonuç verdi.", "https://cordis.europa.eu/search?q=%27Hande%20G%C3%BCr%27"]
  ]
};
