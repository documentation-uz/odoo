# Manufacturing product configuration

Odoo Manufacturing'da mahsulotni ishlab chiqarish uchun mahsulot to‘g‘ri sozlangan bo‘lishi kerak. Buning uchun mahsulotga "Manufacturing" yo‘nalishini yoqish va mahsulot uchun materiallar spetsifikatsiyasini (BoM) sozlash kerak. Ushbu bosqichlar bajarilgandan so‘ng, mahsulotni yangi ishlab chiqarish buyrug‘ini yaratishda tanlash mumkin bo‘ladi.

## Ishlab chiqarish yo'nalishini faollashtirish

"Ishlab chiqarish" yo‘nalishi har bir mahsulot uchun uning mahsulot sahifasida alohida faollashtiriladi. Buning uchun, avvalo, Manufacturing ‣ Products ‣ Products bo‘limiga o‘ting. So‘ng, mavjud mahsulotni tanlang yoki Yangi tugmasini bosib, yangi mahsulot yarating.

Mahsulot sahifasida Inventory (Ombor) yorlig‘ini tanlang va Routes (Yo‘nalishlar) bo‘limida Manufacture (Ishlab chiqarish) katagiga belgi qo‘ying. Bu Odoo'ga mahsulotni ishlab chiqarish mumkinligini bildiradi.

![Manufacturing Route](https://www.odoo.com/documentation/18.0/_images/manufacturing-route.png)

## Lot/seriya raqami orqali kuzatish

Yangi ishlab chiqarilgan mahsulotlarga lot yoki seriya raqamlarini tayinlash majburiy emas. Agar mahsulotlarga lot yoki seriya raqamlarini ixtiyoriy ravishda tayinlamoqchi bo‘lsangiz, Inventory (Ombor) yorlig‘idagi Traceability (Kuzatish) bo‘limiga o‘ting. Tracking (Kuzatuv) maydonida By Unique Serial Number (Yagona seriya raqami bo‘yicha) yoki By Lots (Lotlar bo‘yicha) variantlaridan birini tanlang.

Bu sozlama ishlab chiqarish buyurtmasida Lot/Serial Number maydonini yoki Shop Floor ilovasidagi ish buyurtmasi kartasida Register Production (Ishlab chiqarishni ro‘yxatga olish) ko‘rsatmasini faollashtiradi.

![...](https://www.odoo.com/documentation/18.0/_images/lot-number-field.png)

<p style="text-align: center">Ishlab chiqarish buyurtmasida (MO) Lot/Seriya raqami maydoni.</p>

![...](https://www.odoo.com/documentation/18.0/_images/register-production1.png)

<p style="text-align: center">Ish buyurtmasi kartasida lot/seriya raqamini yaratish uchun Ishlab chiqarishni ro‘yxatga olish opsiyasi.</p>

## Materiallar spetsifikatsiyasini (BoM) sozlash

Keyingi bosqichda mahsulot uchun BoM (Materiallar spetsifikatsiyasi) sozlanishi kerak, shunda Odoo mahsulot qanday ishlab chiqarilishini biladi. BoM — bu mahsulotni ishlab chiqarish uchun kerak bo‘lgan komponentlar va jarayonlar ro‘yxatidir.

Muayyan mahsulot uchun BoM yaratish uchun Manufacturing ‣ Products ‣ Products bo‘limiga o‘ting va mahsulotni tanlang. Mahsulot sahifasining yuqori qismida joylashgan Bill of Materials aqlli tugmasini bosing, so‘ng yangi BoM yaratish uchun New tugmasini tanlang.

![...](https://www.odoo.com/documentation/18.0/_images/bom-smart-button.png)

BoM sahifasida Product (Mahsulot) maydoni avtomatik ravishda tanlangan mahsulot bilan to‘ldiriladi. Quantity (Miqdor) maydonida ushbu BoM orqali ishlab chiqariladigan birliklar sonini ko‘rsating.

BoMga komponent qo‘shish uchun Components (Komponentlar) yorlig‘iga o‘ting va Add a line (Qator qo‘shish) tugmasini bosing. Component (Komponent) ochiluvchi menyusidan kerakli komponentni tanlang va uning miqdorini Quantity maydonida kiriting. Barcha kerakli komponentlar kiritilgunga qadar yangi qatorlar qo‘shishda davom eting.

![...](https://www.odoo.com/documentation/18.0/_images/components-tab.png)

Keyin Amaliyotlar (Operations) yorlig‘ini tanlang. Qator qo‘shish (Add a line) tugmasini bosing, shunda Amaliyot yaratish (Create Operations) pop-up oynasi paydo bo‘ladi. Amaliyot (Operation) maydonida qo‘shilayotgan amaliyot nomini kiriting (masalan, Yig‘ish (Assemble), Kesish (Cut) va h.k.). Ish markazi (Work Center) ochiluvchi menyusidan ushbu amaliyot bajariladigan ish markazini tanlang. Nihoyat, amaliyotni qo‘shishni tugatish uchun Saqlash & Yopish (Save & Close) tugmasini, yoki yana amaliyot qo‘shish uchun Saqlash & Yangi (Save & New) tugmasini bosing.

::: warning Muhim
Amaliyotlar (Operations) yorlig‘i faqat Ish buyurtmalari (Work Orders) sozlamasi yoqilganda paydo bo‘ladi. Buni yoqish uchun Ishlab chiqarish (Manufacturing) ‣ Sozlamalar (Configuration ‣ Settings) bo‘limiga o‘ting va Ish buyurtmalari (Work Orders) belgisini faollashtiring.
:::

![...](https://www.odoo.com/documentation/18.0/_images/operations-tab.png)

::: info Batafsil
Yuqoridagi bo‘lim Odoo’da mahsulotni ishlab chiqarish uchun asosiy Materiallar spesifikatsiyasi (BoM - Bill of Materials) yaratish bo‘yicha ko‘rsatmalarni beradi. Biroq, bu BoM sozlamalaridagi barcha imkoniyatlarni to‘liq qamrab oluvchi qo‘llanma emas. Materiallar spesifikatsiyasi haqida batafsil ma’lumot olish uchun tegishli hujjatlarni ko‘rib chiqing.
:::
