# FitLife — Fitness & Sağlık Mobil Uygulaması

React Native (Expo) ile geliştirilmiş, antrenman takibi ve ilerleme izleme uygulaması.
Software Persona Yazılım Stajı 2026 — Mobil Uygulama Projesi.

## Kullanılan Teknolojiler ve Sürümler

| Teknoloji | Sürüm | Açıklama |
|-----------|-------|----------|
| **React Native** | 0.73.6 | Çapraz platform mobil uygulama çerçevesi |
| **Expo SDK** | 50.0.0 | React Native geliştirme ortamı |
| **React** | 18.2.0 | UI kütüphanesi |
| **React Navigation** | 6.x | Ekranlar arası gezinme (Bottom Tabs + Native Stack) |
| **react-native-svg** | 14.1.0 | İkonlar, halkalar ve grafik çizimleri için |
| **Node.js** | 18+ önerilir | Paket yönetimi ve geliştirme sunucusu |
| **Flutter** | Kullanılmadı — bu proje React Native ile geliştirilmiştir | Alternatif çerçeve olarak değerlendirilmiş, React Native + Expo ekosistemi tercih edilmiştir |

> **Not (Flutter sürümü hakkında):** Bu proje seçilen çerçeve olarak **React Native + Expo** kullanılarak geliştirilmiştir. **Flutter bu projede kullanılmamıştır;** yukarıdaki tabloda framework karşılaştırması amacıyla ayrıca belirtilmiştir.

## Özellikler

- **Ana Sayfa:** Günlük kalori hedefi (dairesel ilerleme halkası), hızlı eylem kartları ve haftalık aktivite grafiği
- **Antrenman Kütüphanesi:** Arama ve filtre çipleri ile antrenman listesi
- **Antrenman Detay:** Süre/kalori/seviye özeti ve numaralandırılmış hareket listesi
- **İlerleme:** İstatistikler, aylık aktivite çizgi grafiği (SVG) ve başarım rozetleri
- **Profil:** Kullanıcı bilgileri, beden istatistikleri ve ayar menüsü

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
├── app.json                    # Expo yapılandırması
├── babel.config.js             # Babel ayarları
└── package.json                # Bağımlılıklar
```

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Expo geliştirme sunucusunu başlat
npm start

# Android emülatör / cihaz üzerinde çalıştır
npm run android

# iOS simülatör üzerinde çalıştır
npm run ios
```

Expo Go uygulamasıyla QR kodu okutarak gerçek cihazda da test edilebilir.

## Tasarım Sistemi

Uygulama koyu tema (#0E1116 zemin) üzerine lime (#C8FF3D) ve coral (#FF6B5C) aksanlar kullanır. Tüm renk ve boşluk değerleri merkezi `src/theme.js` dosyasında tanımlıdır.

## Geliştirici

**Yiğit Erkan** — yigiterkan321@gmail.com
