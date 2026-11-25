const aycaUniversityUrl = "https://www.ozyegin.edu.tr/tr/akademik-kadro/aycakucuk";
const aycaYokUrl = "https://akademik.yok.gov.tr/academician-details?authorGuidId=50EC90E2D5B227EB";
const aycaThesisSearch = "https://tez.yok.gov.tr/UlusalTezMerkezi/tarama.jsp";

const aycaWorks = [
  ["kamusal-alan-ortacag", 2023, "Doktora tezi", "Tez özeti", "Kamusal Alanın Ortaçağ’daki Kaynakları", ["philosophy", "history"], "Kamusal alan · Devlet ve birey · Yüksek Ortaçağ · İktidar · Tez 836158", "Devlet ile birey arasındaki ilişkiyi biçimlendiren kamusal alan düşüncesi hangi Ortaçağ yapılarından beslendi?", "İktidarın ve kamusal alanın sınırlarının bugün de tartışıldığından yola çıkıyor; bu kavramların oluşmaya başladığı dönemi tarihsel bir perspektifle inceliyor. Devlet ve birey kavramlarının ve kamusal alan öğelerinin izini sürerek Yüksek Ortaçağ’da kamusal alan düşüncesinin gelişimine kaynaklık eden yapıları ele alıyor. İstanbul Üniversitesi Sosyal Bilimler Enstitüsü Kamu Hukuku Anabilim Dalı, danışman Prof. Dr. Mehmet Tevfik Özcan.", aycaThesisSearch],
  ["thomas-paine", 2012, "Yüksek lisans tezi", "Tez özeti", "Thomas Paine Düşüncesinde Sivil Toplum ve Devlet", ["philosophy"], "Thomas Paine · Sivil toplum · Devlet · Amerikan Devrimi · 18. yüzyıl · Tez 317727", "Thomas Paine toplum ile yönetimi nasıl ayırdı ve bireyi bu ayrımın neresine koydu?", "18. yüzyıl düşünürü ve siyasetçisi Thomas Paine’in (1737–1809) siyasi düşüncesini, özellikle sivil toplum ve devlet algısını inceliyor. Düşünürün bireyi yerleştirdiği toplumsal alana ve bireyin yönetimle etkileşimine odaklanıyor; her bölümde Paine’in toplum ile yönetimin ayrışmasına ilişkin görüşlerinden hareketle teoride ve pratikte sivil toplum ve devlet anlayışını ele alıyor. İstanbul Üniversitesi Sosyal Bilimler Enstitüsü Kamu Hukuku Anabilim Dalı, danışman Yrd. Doç. Dr. Haydar Burak Gemalmaz. Lexpera’daki üç kitapta kaynak olarak gösteriliyor.", aycaThesisSearch],
  ["lozan-150likler", 2025, "Bildiri", "Künye", "Sovereignty and International Law Perspectives on Treason and Amnesty in the Interwar Turkish Republic: The Peace Conference of Lausanne (1922–1923) and the ‘150’ers’", ["history", "international"], "Lozan Barış Konferansı · 150’likler · Vatana ihanet · Af · Egemenlik", "Lozan’da kararlaştırılan genel af, vatana ihanetle suçlanan 150’liklerin dışarıda bırakılmasıyla egemenlik ve uluslararası hukuk açısından nasıl bir yere oturur?", "A Global History of Treason: The Legal Framework çalıştayında (7–8 Şubat 2025) sunulan İngilizce tam metin bildiri; YÖK’te uluslararası kapsamlı olarak kayıtlı. Çalıştayı Southampton ve Freiburg üniversitelerinden araştırmacılar Southampton’da düzenledi; çalıştay duyurusu konuşmacıları listelemiyor ve bildiri metni ya da bildiri kitabı çevrimiçi bulunamadı. Künye YÖK’ten.", aycaYokUrl],
  ["kadin-dergileri", 2025, "Bildiri", "Künye", "Geç Osmanlı ve Erken Cumhuriyet Döneminde Kadın Dergileri ve Hukuk", ["history", "society"], "Geç Osmanlı · Erken Cumhuriyet · Kadın dergileri · Toplumsal cinsiyet", "Geç Osmanlı ve erken Cumhuriyet kadın dergileri hukuku ve kadınların hukuki konumunu nasıl tartıştı?", "Toplumsal Cinsiyet Eşitliği, Kadın ve Hukuk Sempozyumu’nda (5–6 Mart 2025) sunulan Türkçe tam metin bildiri. Bildiri metni ya da bildiri kitabı çevrimiçi bulunamadı; künye YÖK’ten.", aycaYokUrl],
  ["hayvanlarin-statusu", 2025, "Bildiri", "Künye", "Batı Avrupa ve Osmanlı İmparatorluğu’nda Hayvanların Hukuki Statüsünün Karşılaştırmalı Tarihi: Bugünün Sorularına Yanıtlar", ["history", "society"], "Hayvanların hukuki statüsü · Sokak hayvanları · Osmanlı hukuku · Erken modern dönem · Kent yaşamı", "Batı Avrupa ve Osmanlı kentlerinde hayvanlara nasıl bir hukuki statü tanındı ve bu tarih bugünkü tartışmalara ne söyler?", "Özyeğin Hukuk’un Çekmeköy Belediyesi ve MODOKO ile düzenlediği “Ego”dan “Eko”ya: Çok Disiplinli Yaklaşımdan Hayvan Meselesi Sempozyumu’nda (15–16 Mayıs 2025) sunulan özet bildiri. Etkinlik sayfası konuşmacıları listelemiyor; özet metni çevrimiçi bulunamadı. Künye YÖK’ten.", aycaYokUrl],
  ["bm-3379", 2024, "Bildiri", "Künye", "Siyonizmi Irkçılığın Bir Türü Olarak Kabul Eden 3379 Sayılı BM Kararının (1975) Öyküsü", ["international"], "Birleşmiş Milletler · 3379 sayılı karar · Filistin · Siyonizm · Irkçılık", "BM Genel Kurulu’nun 1975’te kabul ettiği 3379 sayılı karar hangi koşullarda çıktı ve sonra ne oldu?", "Disiplinlerarası Filistin Meselesi Sempozyumu’nda (28 Kasım 2024) sunulan Türkçe tam metin bildiri. Bildiri metni ya da bildiri kitabı çevrimiçi bulunamadı; künye YÖK’ten.", aycaYokUrl]
];

const aycaProfile = {
  name: "Ayça Küçük",
  role: "Dr. Öğr. Üyesi",
  field: "Hukuk Felsefesi ve Sosyolojisi / Hukuk Tarihi",
  bio: "Hukuk felsefesi ve hukuk tarihi üzerine çalışıyor; doktorasını kamusal alan düşüncesinin Ortaçağ kaynakları üzerine yazdı. İstanbul Üniversitesi Hukuk Fakültesi mezunu (2009). İÜ Sosyal Bilimler Enstitüsü’nde yüksek lisans (2012) ve doktora (2023) yaptı. 2011–2013 arasında İÜ Hukuk Genel Kamu Hukuku Anabilim Dalı’nda araştırma görevlisiydi; 2013–2024 arasında avukatlık yaptı. 1 Eylül 2024’ten beri Özyeğin Hukuk’ta.",
  universityUrl: aycaUniversityUrl,
  yokUrl: aycaYokUrl,
  featured: "kamusal-alan-ortacag",
  summary: {
    areas: [
      ["Hukuk ve siyaset felsefesi", "Kamusal alan, devlet ve birey; Thomas Paine’de sivil toplum"],
      ["Hukuk tarihi", "Ortaçağ’dan geç Osmanlı ve erken Cumhuriyet’e hukuki kurumlar"],
      ["Uluslararası hukukun tarihi", "Lozan, af ve vatana ihanet; BM’nin 3379 sayılı kararı"],
      ["Toplum ve hukuk", "Kadın dergileri ve hayvanların hukuki statüsü"]
    ],
    recent: "Özyeğin’e geçtiği 2024’ten beri dört bildiri sundu: BM’nin 3379 sayılı kararı (Kasım 2024), Lozan ve 150’likler (Şubat 2025), geç Osmanlı kadın dergileri (Mart 2025) ve hayvanların hukuki statüsünün karşılaştırmalı tarihi (Mayıs 2025). Henüz yayımlanmış makale ya da kitap kaydı yok.",
    example: "lozan-150likler",
    exampleLabel: "Lozan’daki genel af, 150’likleri neden dışarıda bıraktı?"
  },
  themes: {
    philosophy: "Hukuk ve siyaset felsefesi",
    history: "Hukuk tarihi",
    international: "Uluslararası hukukun tarihi",
    society: "Toplum ve hukuk"
  },
  themeNotes: {
    philosophy: "Kamusal alan, devlet ve birey; sivil toplum",
    history: "Ortaçağ, geç Osmanlı ve erken Cumhuriyet",
    international: "Lozan, af, egemenlik ve BM kararları",
    society: "Kadınlar ve hayvanlar"
  },
  works: aycaWorks.map(
    ([id, year, type, evidence, title, topics, tags, question, finding, url, date]) =>
      ({id, year, date: date || String(year), type, evidence, title, topics, tags, question, finding, url})
  ),
  audit: [
    ["Özyeğin kadro sayfası ve biyografi", "26 Kasım 2026’da kontrol edildi. Unvan Dr. Öğr. Üyesi, alan Hukuk Felsefesi ve Sosyolojisi / Hukuk Tarihi. 1 Eylül 2024’ten beri Özyeğin’de. Sayfada yalnız iki tezin adı var; yayın listesi ya da özgeçmiş dosyası yok.", aycaUniversityUrl],
    ["YÖK Akademik", "Kayıt 50EC90E2D5B227EB, ORCID 0000-0001-9192-8450. 4 bildiri (3 tam metin, 1 özet) var. Makale, kitap, editörlük, proje, ödül, üyelik ve yönetilen tez kaydı yok. Öğrenim ve deneyim bilgileri kadro sayfasıyla uyumlu.", aycaYokUrl],
    ["YÖK Ulusal Tez Merkezi", "Kendi iki tezi bulundu (doktora 836158, yüksek lisans 317727); aynı ad aramasında çıkan diğer iki tez mühendislik ve mimarlık alanında başka kişilere ait. Danışman olarak aramada sonuç yok.", aycaThesisSearch],
    ["TR Dizin", "Ad ve bildiri konularıyla yapılan aramalarda bu yazara ait yayın yok; çıkan “Küçük” kayıtları tıp ve mühendislik alanında başka kişilere ait.", "https://search.trdizin.gov.tr/"],
    ["DergiPark", "Doğrudan arama kullanılmadı (CAPTCHA). Web aramalarında çıkan DergiPark dosyaları ve TBB Dergisi sayıları kontrol edildi; hiçbirinde bu yazarın makalesi yok.", "https://dergipark.org.tr/"],
    ["Crossref, OpenAlex ve ORCID", "ORCID kaydı herkese açık eser göstermiyor. OpenAlex’te yazar kaydı yok; Crossref’te bu yazara ait kayıt yok.", "https://orcid.org/0000-0001-9192-8450"],
    ["Google Akademik", "Profil yok. Aramada yalnız yüksek lisans tezi (İÜ AVESİS kaydı) çıktı. Aynı sonuçlardaki Gemalmaz, Türkyılmaz ve Saçar eserleri başka yazarlara ait.", "https://scholar.google.com/scholar?q=%22Ay%C3%A7a+K%C3%BC%C3%A7%C3%BCk%22"],
    ["Özyeğin eResearch", "“Küçük, Ayça” ve ad varyantlarıyla kayıt yok.", "https://eresearch.ozyegin.edu.tr/"],
    ["Lexpera literatür", "Kurumsal oturumla yalnız künye düzeyinde arandı; 3 sonuç çıktı. Üçü de başka yazarların kitabı: yüksek lisans tezine yapılan iki atıf ve bir teşekkür. Yazar olduğu bir eser yok.", "https://www.lexpera.com.tr/"],
    ["Projeler ve CORDIS", "YÖK proje kaydı yok. CORDIS’te “Ayça Küçük” 0 sonuç verdi.", "https://cordis.europa.eu/search?q=%27Ay%C3%A7a%20K%C3%BC%C3%A7%C3%BCk%27"]
  ]
};
