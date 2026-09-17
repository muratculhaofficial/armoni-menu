# Armoni Cafe QR Menü Sitesi

Bu proje tamamen statik HTML/CSS/JavaScript ile hazırlanmıştır.
Sunucu, veritabanı veya ücretli servis gerektirmez.

## Dosyalar

- `index.html` — ana sayfa
- `styles.css` — tasarım
- `script.js` — dijital menü verileri ve kategori sistemi

## Menü nasıl eklenir?

`script.js` dosyasında bulunan `menuData` listesindeki `items` alanlarına ürünleri ekleyin.

Örnek:

```js
{
  category: "Sıcak İçecekler",
  items: [
    { name: "Türk Kahvesi", description: "Geleneksel sunum", price: "90 ₺" },
    { name: "Latte", description: "Espresso ve süt", price: "120 ₺" }
  ]
}
```

## Ücretsiz yayınlama

En kolay seçeneklerden biri GitHub Pages'tir.

1. GitHub hesabı açın/giriş yapın.
2. Yeni bir repository oluşturun.
3. Bu klasördeki `index.html`, `styles.css` ve `script.js` dosyalarını yükleyin.
4. Repository > Settings > Pages bölümüne girin.
5. Deploy from branch seçin.
6. `main` ve `/root` seçip kaydedin.
7. Oluşan bağlantıyı QR koda çevirin.

QR kod aynı bağlantıya yönlendirdiği için daha sonra menü fiyatlarını güncellediğinizde QR kodu yeniden basmanız gerekmez.

## Sonradan eklenecek bilgiler

- Kafenin tam adresi
- Telefon numarası
- Instagram hesabı
- Gerçek menü ürünleri ve fiyatları
- İstenirse masa numarasına özel QR sistemi


## Güncel menü

Menü kategorileri ve ürün açıklamaları 16 Eylül 2026 itibarıyla siteye eklenmiştir.
Fiyat bilgileri henüz paylaşılmadığı için ürünlerde fiyat gösterilmemektedir.
Fiyatlar geldiğinde `script.js` içindeki her ürünün `price` alanına örneğin `"180 ₺"` yazılması yeterlidir.
