# HYPERTECH FRONT-END CASE PROJE KURULUM ADIMLARI

1 -> npm create vite@latest hypertech-task komutu ile Vite kullanılarak proje kurulumu gerçekleştirildi.

2 -> npm install tailwindcss @tailwindcss/vite komutu ile tailwind bağımlılıkları yüklendi, daha sonra aşağıdaki konfigurasyon ayarları vite.config.js dosyasına kaydedildi.

        import { defineConfig } from "vite";
        import react from "@vitejs/plugin-react";
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig({
        plugins: [react(), tailwindcss()],
        });

3 -> Son olarak index.css dosyası içerisinde @import "tailwindcss"; importu kullanılarak tailwind classları projeye aktarıldı.

4 -> layout klasörü oluşturuldu. İçerisinde 2 ana layout kısmı olan Navbar.jsx ve Content.jsx componentleri oluşturdu.

5 -> Navbar.jsx componenti içerisinde sol tarafa logo, sağ tarafa sepetim ve user iconları koyuldu ve stillendirmeleri tailwind kullanılarak yapıldı. Iconlar için react-icons kullanıldı.

6-> Content.jsx componenti içerisinde api'dan gelecek olan ürünleri listelemek için components klasörü içerisine CardItem.jsx componenti oluşturuldu.

7 -> Deneme amaçlı bir object array oluşturuldu ve bu array map fonksiyonu kullanılarak içerisinde CardItem bileşeni render edildi. Daha sonra oluşturulan array içerisindeki header, image ve fiyat bilgileri props kullanılarak CardItem componentine gönderildi.

8 -> Ürünleri ve sepetteki ürün sayısını tutmak amacıyla Redux Toolkit kurulumu yapılmasına karar verildi, bunun için store.js dosyası oluşturuldu. Store dosyasının içindeki store bileşeninin tüm uygulamayı kapsaması amacıyla main.jsx dosyasında Provider kullanıldı ve içerisine store bileşeni yerleştirildi.

9 -> controls klasörü oluşturuldu ve içerisine cardSlice.js adında bir slice dosyası yerleştirildi.

10 -> Slice ve initialState' ler cardSlice.js dosyasının içerisinde oluşturuldu ve cardSlice içerisindeki reducer store.js dosyasında import edilerek kullanıldı.

11 -> Deneme amacıyla Navbar.jsx componentinde useSelector kullanılarak initialState içerisindeki quantity(Sepete Ekli Ürün Sayısı) değeri çekildi ve bir hata olmadığı görüldü.

12 -> Api'dan çekeceğimiz verilerin redux içerisindeki initialState kısmına eklenmesi için cardSlice dosyası içerisinde setCardItems adında bir reducer oluşturuldu.

        setCardItems: (state, action) => {
            state.cardItems = action.payload.map((item) => ({
                ...item,
            }));
        }

13 -> Dökümantasyondaki API Postman üzerinde denendikten sonra Content.jsx componentinde axios kullanılarak çekildi ve response içerisindeki veriler incelendi.(Bearer Token için dökümantasyon içerisindeki siteye giriş yapıldı.)

14 -> axios ve useEffect kullanılarak alınan veriler oluşturulan setCardItems' reducer fonksiyonu ve Dispatch kullanılarak initialState içerisine yerleştirildi.

15 -> Api' dan gelen veriler initialState içerisine aktarıldıktan sonra Content.jsx componentinde useSelector' kullanılarak veriler tekrar çağırıldı. Verilerin içerisinden başlık fiyat ve görsel olarak kullanılacak kısımlar props aracılığı ile CardItem.jsx componentine aktarıldı.

16 -> Sepete ekli olan ürün sayısını(quantity) artırıp azaltmak amacıyla cardSlice içerisine bir reducer daha yazıldı.

        toggleCardItem: (state, action) => {
            const itemId = action.payload;
            const item = state.cardItems.find(
                (item) => item.productCategoryID === itemId
            );

            if (item) {
                item.selected = !item.selected;
                state.quantity += item.selected ? 1 : -1;
            }
        }

17 -> Hangi ürünün sepete ekli olduğunu takip etmek amacıyla setCardItem reducerı kullanılarak alınan değerlerin içerisine selected:false değişkeni koyuldu. Bu sayede sayfa ilk açıldığında hiçbir ürün sepette olmaması sağlandı.

18 -> CardItem.jsx componenti içerisinde Sepete Ekle butonuna tıklandığı zaman ürünün sepete eklenmesi için toggleCardItem reducer fonksiyonu kullanıldı. Map ile döndüğümüz ürünün seçili olup olmadığını görmek için ise useSelector ile birlikte aşağıdaki fonksiyon kullanıldı.

        const selected = useSelector(
            (state) =>
            state.card.cardItems.find(
                (item) => item.productCategoryID === productCategoryID
            )?.selected
        );

19 -> Sepete ekli olan ürün sayısı(quantity)' na useSelector kullanılarak Navbar.jsx componenti içerisinden erişildi ve Sepet iconunun sağ üst tarafında olacak şekilde konumlandırıldı.

20 -> Responsive yapı için flexbox kullanıldı, index.html içerisinden title ve favicon değiştirildi ve proje tamamlandı.

# ISTEGE BAGLI BOLUM

21 -> Gönderilen api tekrar kontrol edildi, https://api.hyperteknoloji.com.tr/Products/List api'ının çalışmaya başladığı tespit edildi ve axios.get metodu axios post ile bu endpointe yönlendirildi.

22 -> Api isteği için oluşturulan fonksiyon güncellendi, alınan değerler değiştiği için propslar güncellendi ve sepete ekleme kısmının reducer fonksiyonu güncellendi.

23 -> Favoriler ve Sepetim sayfasının yapımı için react-router-dom kütüphanesini indirdim. BrowserRouter ile uygulamamı sardıktan sonra App.jsx sayfası içerisinde Navbar altında routing işlemlerimi gerçekleştirdim.

24 -> Navbar sayfasında sepet iconunu link ile sarmalayarak "my-products" yolunu verdim bu şekilde routing işlemimi tamamladım, ana sayfaya tekrar dönülmesi için ise Hyper Teknoloji resmine "/" yolunu verdim.

25 -> Sepet içeriğinin gözükeceği MyProducts.jsx componentini oluşturdum ve içerisine ana sayfada seçili olan ürünleri sıraladım. Daha sonra sayfanın stillendirmesini yaptım.
