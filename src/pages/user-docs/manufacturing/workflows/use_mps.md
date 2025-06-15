# Asosiy ishlab chiqarish jadvali

Odoo ning *Manufacturing* dasturida *asosiy ishlab chiqarish jadvali* (MPS) mahsulotlar va komponentlarning prognozlashtirilgan miqdori asosida ishlab chiqarish buyruqlari (MO) va sotib olish buyruqlarini (PO) qo'lda rejalashtirish uchun ishlatiladi.

Tasdiqlangan `MOs (manufacturing orders)` va `POs (purchase orders)` ning ta'sirini, shuningdek qo'lda sozlangan talab prognozlarini hisobga olgan holda, `MPS (Master Production Schedules)` uzoq muddatli mahsulot to'ldirishni boshqarish uchun ishlatilishi mumkin. Bu zarur mahsulotlar va komponentlarning doimiy mavjudligini ta'minlaydi.

`MPS (Master Production Schedules)` qo'lda aralashuvga imkon berganligi sababli, u mavjud savdo buyruqlari (SO) talabi kelajakdagi ehtimoliy talabni aks **ettirmaydigan** mahsulotlarni to'ldirish uchun foydalidir.

::: example
Chakana savdo do'koni bayram mavsumida sun'iy *Rojdestvo daraxtlarini* sotadi. Hozir sentyabr oyi va do'konda dekabr oyi uchun tasdiqlangan o'ndan kam Rojdestvo daraxti `MOs (manufacturing orders)` mavjud.

Tasdiqlangan `MOs (manufacturing orders)` soni-ga qaramay, ta'minot menejeri bayram mavsumi boshlanganidan so'ng dekabr oyida Rojdestvo daraxtlariga talab ancha yuqori bo'lishini biladi. Natijada, ular mijozlar talabining o'sishiga vaqtida tayyorgarlik ko'rish uchun `MPS (Master Production Schedules)` ga qo'lda kattaroq talabni kiritadilar.
:::

::: warning

`MPS (Master Production Schedules)` **QOLDA** vosita ekanligini eslab qolish muhimdir. Mahsulotni `MPS (Master Production Schedules)` ga qo'shish uni avtomatik ravishda ishlab chiqarish yoki sotib olishga olib kelmaydi. `MPS (Master Production Schedules)` shunchaki to'ldirilishi kerak bo'lgan mahsulot miqdorini taklif qiladi, lekin uni to'ldirish uchun ishlatiladigan `MOs (manufacturing orders)` yoki `POs (purchase orders)` yaratish uchun foydalanuvchi kiritishini talab qiladi.

Shu sababli, `MPS (Master Production Schedules)` ni bir xil mahsulot uchun qayta buyurtma qilish qoidalari bilan birga ishlatmaslik tavsiya etiladi. Qayta buyurtma qilish qoidalari avtomatlashtirilgan ish jarayoni bo'lganligi sababli, ular `MPS (Master Production Schedules)` ning qo'lda to'ldirish usuli bilan zid keladi. Ikkalasini birga ishlatish noto'g'ri prognozlarga va keraksiz to'ldirish buyruqlarining yaratilishiga olib kelishi mumkin.
::::

## `MPS (Master Production Schedules)` ni yoqish va sozlash

`MPS (Master Production Schedules)` funksiyasidan foydalanish uchun `Manufacturing app ‣ Configuration ‣ Settings` ga o'ting va `Planning` bo'limidagi `Master Production Schedule` katakchani belgilang. Nihoyat, `Save` tugmasini bosing.

`Master Production Schedule` funksiyasini yoqgandan so'ng, `Settings` sahifasida uning ostida ikkita yangi maydon paydo bo'ladi: `Time Range` va `Number of Columns`.

`Time Range` maydoni rejalashtirish amalga oshiriladigan vaqt oralig'ini tanlash uchun ishlatiladi va uchta variantni taklif qiladi: `Monthly`, `Weekly` va `Daily`. Masalan, agar `Monthly` tanlansa, `MPS (Master Production Schedules)` mahsulotlar va komponentlarning ishlab chiqarish talablarini oylik asosda rejalashtiradi.

`Number of Columns` maydoni `MPS (Master Production Schedules)` sahifasida ko'rsatiladigan tanlangan `Time Range` birliklarining sonini belgilash uchun ishlatiladi. Masalan, agar `Time Range` maydoni `Monthly` ga o'rnatilgan bo'lsa va `Number of Columns` maydoniga [12] kiritilsa, `MPS (Master Production Schedules)` joriy oydan boshlab keyingi 12 oy uchun bittadan ustun ko'rsatadi.

Agar `Time Range` yoki `Number of Columns` maydonlarining qiymatlari o'zgartirilsa, o'zgarishlarni saqlash uchun yana `Save` tugmasini bosing.

![Manufacturing dasturi sozlamalaridagi MPS sozlamasi.](use_mps/mps-setting.png)

## `MPS (Master Production Schedules)` boshqaruv paneli

`MPS (Master Production Schedules)` ni ochish uchun `Manufacturing app ‣ Planning ‣ Master Production Schedule` ga o'ting. `MPS (Master Production Schedules)` ko'rinishi quyidagicha ko'rinadi:

![Manufacturing dasturidagi Asosiy ishlab chiqarish jadvali.](use_mps/mps.png)

Ekranning chap tomonidagi kulrang ustun `MPS (Master Production Schedules)` ga qo'shilgan har bir mahsulot uchun bo'limni ko'rsatadi, har bir mahsulot bo'limi kichikroq qatorlarga bo'linadi. Qatorlarda ko'rsatiladigan ma'lumotlar sahifa tepasidagi `Search...` paneli ochiladigan menyusida tanlangan filtrlarga bog'liq. Qatorlarda paydo bo'ladigan standart toifalar:

- `[Product] by [unit]` `fa-area-chart`: har bir vaqt davri boshida prognozlashtirilgan zaxira miqdori. `[Product]` va `fa-area-chart` bosish mumkin bo'lgan tugmalar bo'lib, ular mos ravishda mahsulot sahifasi yoki mahsulot uchun prognoz hisobotini ochadi.

- `- Forecasted Demand`: qo'lda kiritilgan talab prognozi. Bu har bir vaqt davri davomida mahsulotga bo'lgan talabning taxminini bildiradi.

- `- Indirect Demand Forecast`: bu standart toifa bo'lsa-da, u **faqat** boshqa mahsulotlarning komponentlari bo'lgan mahsulotlar uchun ko'rinadi. Bu mavjud MO lardan komponentga bo'lgan talabni bildiradi.

- `+ Suggested Replenishment`: `MOs (manufacturing orders)` yoki `POs (purchase orders)` orqali to'ldirilishi tavsiya etiladigan mahsulot miqdori. Toifa sarlavhasining o'ng tomonida tavsiya etilgan to'ldirish miqdoriga asoslangan holda mahsulotni qo'lda to'ldirish uchun ishlatiladigan `Replenish` tugmasi mavjud.

  
  
  "+ Suggested Replenishment" qatoridagi "Replenish" tugmasi.
  

- `= Forecasted Stock`: taklif qilingan to'ldirish sonlari bajarilgani deb faraz qilganda, har bir vaqt davri oxirida zaxirada bo'lishi prognozlashtirilgan mahsulot miqdori.

Umuman olganda, bu standart toifalar tenglamani tashkil etadi:

$$\text + \text = \text$$

Komponentlar holatida `Indirect Demand Forecast` ham hisobga olinadi.

`- Forecasted Demand` va `+ Suggested Replenishment` maydonlari mahsulot ustunining o'ng tomonidagi istalgan vaqt davrlari uchun tahrir qilinishi mumkin. Buni amalga oshirish tenglamani o'zgartiradi va `Forecasted Stock` maydonida ko'rsatilgan qiymatni yangilaydi.

`+ Suggested Replenishment` maydonidagi qiymatni o'zgartirish shuningdek maydonning chap tomonida `fa-times` `(reset)` tugmasining paydo bo'lishiga olib keladi. Qiymatni `MPS (Master Production Schedules)` tomonidan hisoblab chiqilgan qiymatga qaytarish uchun maydon yonidagi `fa-times` `(reset)` tugmasini bosing.

::: warning

`MPS (Master Production Schedules)` ni faqat standart toifalar yoqilgan holda ishlatish mumkin bo'lsa-da, `Actual Demand` toifasini ham yoqish tavsiya etiladi. Bu `Search...` panelining o'ng tomonidagi `fa-caret-down` `(pastga o'q)` tugmasini bosish va `Rows` sarlavhasi ostidagi `Actual Demand` opsiyasini yoqish orqali amalga oshiriladi.

`Actual Demand` opsiyasi yoqilgan holda `- Forecasted Demand` toifasi `- Actual / Forecasted Demand` toifasiga o'zgaradi. Qo'lda kiritilgan prognozlashtirilgan talabdan tashqari, bu toifa tasdiqlangan `SOs (sales orders)` ga asoslangan mahsulot uchun tasdiqlangan talabni ham ko'rsatadi.
::::

Mahsulotlar ustunining o'ng tomonidagi har bir ustun *Manufacturing* dasturi *Settings* sahifasidagi *Time Range* maydonida tanlangan vaqt davrining bitta birligini ro'yxatlaydi (masalan, oylar). Vaqt davri ustunlarining soni *Number of Columns* maydoniga kiritilgan qiymatga mos keladi.

Birinchi vaqt davri ustuni joriy vaqt davrini ifodalaydi. Masalan, agar `MPS (Master Production Schedules)` oylardan foydalanish uchun sozlangan bo'lsa, birinchi ustun joriy oy uchun ma'lumotlarni ko'rsatadi. Ushbu birinchi ustunda `+ Suggested Replenishment` maydoni beshta rangdan birida ko'rinadi:

- `Green`: zaxirani `Safety Stock Target` da saqlash uchun to'ldirish buyrug'i yaratilishi kerak.
- `Gray`: zaxirani `Safety Stock Target` da saqlash uchun to'ldirish buyrug'i allaqachon yaratilgan.
- `Yellow`: to'ldirish buyrug'i allaqachon yaratilgan, lekin u yaratilgan miqdor zaxirani `Safety Stock Target` da saqlash uchun yetarli emas.
- `Red`: to'ldirish buyrug'i allaqachon yaratilgan, lekin u yaratilgan miqdor zaxira miqdorini `Safety Stock Target` dan yuqori qo'yadi.

Agar hech qanday to'ldirish buyrug'i yaratilmagan bo'lsa va hozirgi vaqtda uni yaratish shart bo'lmasa, `+ Suggested Replenishment` maydoni oq rangda ko'rinadi.

## Mahsulot qo'shish

Mahsulotni to'ldirishni boshqarish uchun `MPS (Master Production Schedules)` dan foydalanish uchun `Manufacturing app ‣ Planning ‣ Master Production Schedule` ga o'ting. `MPS (Master Production Schedules)` sahifasining yuqori qismida `Add a Product` qalqib chiquvchi oynasini ochish uchun `Add a Product` tugmasini bosing.

::: warning

Mahsulotlar `MPS (Master Production Schedules)` orqali to'ldirilishi uchun to'g'ri sozlanishi **kerak**.

Ishlab chiqariladigan mahsulotlar holatida mahsulot formasining *Inventory* oynasidagi *Routes* bo'limida *Manufacture* marshrutini tanlash kerak.

Sotib olinadigan mahsulotlar holatida mahsulot formasining *Inventory* oynasidagi *Routes* bo'limida *Buy* marshrutini tanlash kerak. Bundan tashqari, *Purchase* oynasida sotuvchi va ular mahsulotni sotayotgan narx ham belgilanishi kerak.
::::

Qalqib chiquvchi oynada `Product` ochiladigan menyusida qo'shiladigan mahsulotni tanlang. Agar mahsulot ishlab chiqarish orqali to'ldirilsa, `Bill of Materials` maydonida mahsulotning `BoM (Bill of Materials)` ni tanlang.

::: tip

`MPS (Master Production Schedules)` ga mahsulot qo'shishda BoM ni tanlash BoM da ro'yxatlangan har qanday komponentlarni ham qo'shadi. Agar komponentlarni to'ldirishni `MPS (Master Production Schedules)` orqali boshqarish shart bo'lmasa, `Bill of Materials` maydonini bo'sh qoldiring.
::::

Agar ma'lumotlar bazasi bir nechta omborlar bilan sozlangan bo'lsa, `Add a Product` qalqib chiquvchi oynasida `Production Warehouse` maydoni paydo bo'ladi. Ushbu maydondan mahsulot qaysi omborga to'ldirilishini belgilash uchun foydalaning.

`Safety Stock Target` maydonida har doim buyurtmalar uchun mavjud bo'lishi kerak bo'lgan mahsulotning minimal miqdorini belgilang. Masalan, agar buyurtmalarni bajarish uchun har doim 20 dona mahsulot mavjud bo'lishi kerak bo'lsa, `Safety Stock Target` maydoniga [20] ni kiriting.

`Minimum to Replenish` maydonida mahsulotni to'ldirish uchun yaratilgan buyurtmalar uchun minimal mahsulot miqdorini kiriting. Masalan, agar bu maydoniga [5] kiritilsa, mahsulot uchun to'ldirish buyruqlari minimal besh dona birlikni o'z ichiga oladi.

`Maximum to Replenish` maydonida mahsulotni to'ldirish uchun yaratilgan buyurtmalar uchun maksimal mahsulot miqdorini kiriting. Masalan, agar bu maydoniga [100] kiritilsa, mahsulot uchun to'ldirish buyruqlari maksimal 100 dona birlikni o'z ichiga oladi.

Nihoyat, mahsulotni `MPS (Master Production Schedules)` ga qo'shish uchun `Save` tugmasini bosing. Mahsulot endi har safar ochilganda `MPS (Master Production Schedules)` sahifasida ko'rinadi. Agar `Add a Product` qalqib chiquvchi oynasining `Bill of Materials` maydonida `BoM (Bill of Materials)` tanlangan bo'lsa, `BoM (Bill of Materials)` da ro'yxatlangan har qanday komponentlar ham sahifada ko'rinadi.

![MPS dagi Add a Product qalqib chiquvchi oynasi.](use_mps/add-a-product.png)

### Mahsulotni tahrirlash

Mahsulotni `MPS (Master Production Schedules)` ga qo'shgandan so'ng, `Add a Product` qalqib chiquvchi oynasida kiritilgan to'ldirish qiymatlarini o'zgartirish kerak bo'lishi mumkin. Buning uchun mahsulot nomi ostidagi `+ Suggested Replenishment` qatorida `Replenish` tugmasining to'g'ridan-to'g'ri o'ng tomonidagi `# ≤…≤ #` tugmasini bosing.

::: tip

`# ≤…≤ #` tugmasida ko'rsatilgan birinchi va ikkinchi raqamlar mahsulotni `MPS (Master Production Schedules)` ga qo'shishda `Minimum to Replenish` va `Maximum to Replenish` maydonlariga kiritilgan qiymatlarga mos keladi.

Masalan, agar `Minimum to Replenish` maydoniga [5] kiritilgan va `Maximum to Replenish` maydoniga [100] kiritilgan bo'lsa, tugma `5 ≤…≤ 100` ko'rinishida ko'rinadi.
::::

`# ≤…≤ #` tugmasini bosish `Edit Production Schedule` qalqib chiquvchi oynasini ochadi. Ushbu qalqib chiquvchi oyna `Add a Product` qalqib chiquvchi oynasi bilan bir xil, faqat `Product` va `Bill of Materials` maydonlari tahrir qilinishi mumkin emas.

`Edit Production Schedule` qalqib chiquvchi oynasida `Safety Stock Target`, `Minimum to Replenish` va `Maximum to Replenish` maydonlariga kerakli qiymatlarni kiriting. Keyin o'zgarishlarni saqlash uchun `Save` tugmasini bosing.

### Mahsulotni olib tashlash

Mahsulotni `MPS (Master Production Schedules)` dan olib tashlash uchun uning nomi chap tomonidagi katakchani belgilang. Keyin ekran tepasidagi `fa-cog` `Actions` tugmasini bosing va paydo bo'lgan ochiladigan menyudan `Delete` ni tanlang. Nihoyat, `Confirmation` qalqib chiquvchi oynasida `Ok` tugmasini bosing.

Mahsulotni `MPS (Master Production Schedules)` dan o'chirish uni barcha ma'lumotlari bilan birga olib tashlaydi. Agar mahsulot qayta qo'shilsa, uning to'ldirish qiymatlari qayta sozlanishi kerak.

## `MPS (Master Production Schedules)` to'ldirish

`MPS (Master Production Schedules)` dagi mahsulotlar uchta usuldan biri bilan to'ldirilishi mumkin:

- Joriy oy uchun `Safety Stock Target` dan past bo'lgan har bir mahsulot uchun to'ldirish buyruqlarini yaratish uchun ekran tepasidagi `Replenish` tugmasini bosing.
- Muayyan mahsulot uchun to'ldirish buyrug'ini yaratish uchun o'sha mahsulotning `+ Suggested Replenishment` qatorining o'ng tomonidagi `Replenish` tugmasini bosing.
- Bir yoki bir nechta mahsulotning mahsulot nomi chap tomonidagi katakchani belgilang. Keyin ekran tepasidagi `fa-cog` `Actions` tugmasini bosing va paydo bo'lgan ochiladigan menyudan `Replenish` ni tanlang. Buni amalga oshirish har bir tanlangan mahsulot uchun to'ldirish buyrug'ini yaratadi.

Yaratilgan to'ldirish buyrug'ining turi mahsulot formasining *Inventory* oynasida tanlangan marshrutga mos keladi:

- Agar *Buy* marshrutini tanlangan bo'lsa, mahsulotni to'ldirish uchun `RfQ (Request for Quotation)` yaratiladi. `RfQs (Requests for Quotation)` larni `Purchase` dasturiga o'tish orqali tanlash mumkin. `MPS (Master Production Schedules)` tomonidan yaratilgan har qanday `RfQ (Request for Quotation)` ning `Source Document` maydonida `MPS` ro'yxatlangan.
- Agar *Manufacture* marshrutini tanlangan bo'lsa, mahsulotni to'ldirish uchun `MO (manufacturing order)` yaratiladi. `MOs (manufacturing orders)` larni `Manufacturing app ‣ Operations ‣ Manufacturing Orders` ga o'tish orqali tanlash mumkin. `MPS (Master Production Schedules)` tomonidan yaratilgan har qanday `MO (manufacturing order)` ning `Source Document` maydonida `MPS` ro'yxatlangan.