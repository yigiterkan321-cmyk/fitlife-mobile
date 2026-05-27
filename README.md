# FitLife — Fitness & Sağlık Mobil Uygulaması

React Native (Expo) ile geliştirilmiş, antrenman takibi ve ilerleme izleme uygulaması.
Software Persona Yazılım Stajı 2026 — Mobil Uygulama Projesi.

## Özellikler

- **Ana Sayfa:** Günlük kalori hedefi (dairesel ilerleme halkası), hızlı eylem kartları ve haftalık aktivite grafiği
- **Antrenman Kütüphanesi:** Arama ve filtre çipleri ile antrenman listesi
- **Antrenman Detay:** Süre/kalori/seviye özeti ve numaralandırılmış hareket listesi
- **İlerleme:** İstatistikler, aylık aktivite çizgi grafiği (SVG) ve başarım rozetleri
- **Profil:** Kullanıcı bilgileri, beden istatistikleri ve ayar menüsü

## Teknolojiler

- React Native 0.73 + Expo SDK 50
- React Navigation (Bottom Tabs + Native Stack)
- react-native-svg ile özel ikonlar, halka ve grafik çizimleri
- Koyu tema, merkezi tasarım sistemi (`src/theme.js`)

## Klasör Yapısı

```
FitLifeMobile/
├── App.js                      # Navigasyon kurulumu
├── src/
│   ├── theme.js                # Renk ve ölçü tokenları
│   ├── components/Icon.js      # SVG ikon seti
│   ├── data/workouts.js        # Örnek antrenman verisi
│   └── screens/
│       ├── HomeScreen.js
│       ├── WorkoutListScreen.js
│       ├── WorkoutDetailScreen.js
│       ├── ProgressScreen.js
│       └── ProfileScreen.js
└── app.json
```

## Kurulum ve Çalıştırma

```bash
npm install
npm start          # Expo geliştirme sunucusu
npm run android    # Android emülatör / cihaz
npm run ios        # iOS simülatör
```

Expo Go uygulamasıyla QR kodu okutarak gerçek cihazda da test edilebilir.

## Geliştirici

**Yiğit Erkan** — yigiterkan321@gmail.com
