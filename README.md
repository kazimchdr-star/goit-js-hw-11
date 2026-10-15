# Görsel Arama — JavaScript Ödev 11

Vite ile hazırlanmış Pixabay görsel arama uygulaması. iziToast bildirimleri,
SimpleLightbox galerisi ve CSS Loaders projesinden uyarlanmış yükleme göstergesi kullanır.

## Kurulum

```sh
npm install
```

`.env.example` dosyasını `.env` adıyla kopyala. [Pixabay API sayfasında](https://pixabay.com/api/docs/)
ücretsiz hesabına giriş yapıp kendi API anahtarını al ve `.env` dosyasına ekle:

```dotenv
VITE_PIXABAY_API_KEY=buraya_kendi_anahtarini_yaz
```

```sh
npm run dev
```

Anahtar değiştiğinde geliştirme sunucusunu yeniden başlat. Anahtar olmadan uygulama
açılır ancak arama yapılamaz; açıklayıcı bir iziToast bildirimi gösterilir.

## Kullanım

Arama terimini yazıp **Search** düğmesine bas. Önceki sonuçlar temizlenir ve
istek boyunca yükleme göstergesi görünür. Kartlarda Likes, Views, Comments ve
Downloads bilgileri yer alır. Fotoğrafa tıklayarak büyük halini açabilir,
ok tuşlarıyla gezebilir ve Escape ile kapatabilirsin.

Boş sonuç ve bağlantı hataları bildirim olarak gösterilir. Yeni arama devam eden
isteği iptal eder; eski yanıtlar yeni sonuçların üzerine yazılmaz.

## Kontrol ve derleme

```sh
npm run format:check
npm run build
npm run preview
```

## GitHub Pages

1. Depoda **Settings → Secrets and variables → Actions → New repository secret**
   yolundan `VITE_PIXABAY_API_KEY` adıyla kendi anahtarını ekle.
2. **Settings → Pages → Source** değerini **GitHub Actions** seç.
3. Dosyaları `main` dalına gönder. Deploy to GitHub Pages iş akışı projeyi derler ve yayımlar.
4. Anahtarı sonradan eklersen Actions sekmesinden iş akışını yeniden çalıştır.

Kaynak depo: https://github.com/kazimchdr-star/goit-js-hw-11

Yayın tamamlandıktan sonra beklenen canlı adres: https://kazimchdr-star.github.io/goit-js-hw-11/

Bu statik istemci uygulamasında Vite değişkeni derleme sırasında JavaScript'e eklenir;
API anahtarı tarayıcıdan görülebilir. `.env` Git'e dahil edilmez.

## Kaynaklar

- [Pixabay API](https://pixabay.com/api/docs/)
- [iziToast](https://izitoast.marcelodolza.com/)
- [SimpleLightbox](https://github.com/andreknieriem/simplelightbox)
- [CSS Loaders](https://github.com/vineethtrv/css-loader): spinner CSS'i projeye uyarlanmıştır.
  Bu kaynak, Webpack'in aynı adlı `css-loader` paketi değildir.
- [CSS Loaders kullanım videosu](https://user-images.githubusercontent.com/5153908/140642916-e8d0e071-96ab-45ac-98d3-10c858e504a5.mp4)
