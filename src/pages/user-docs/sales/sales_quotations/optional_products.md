# Ixtiyoriy mahsulotlar

Ixtiyoriy mahsulotlardan foydalanish — bu asosiy mahsulot bilan birga bog‘liq mahsulotlarni taklif qilish orqali savdoni
oshirishga qaratilgan marketing strategiyasidir. Maqsad — mijozga foydali va mos mahsulotlarni taklif etish orqali sotuv
hajmini oshirishdir.

Masalan, agar mijoz avtomobil sotib olmoqchi bo‘lsa, u massajli o‘rindiqlarni ham buyurtma qilish imkoniyatiga ega
bo‘ladi yoki bu taklifni rad etib, faqat avtomobilni xarid qilishi mumkin. Ixtiyoriy mahsulotlarni tanlash
imkoniyatining mavjudligi mijoz tajribasini yanada boyitadi.

## Taklifnomalarda ixtiyoriy mahsulotlar

Odoo’ning *Savdo* ilovasida taklifnoma formasidagi `Ixtiyoriy mahsulotlar` (`Optional Products`) tabiga o‘tish orqali
to‘g‘ridan-to‘g‘ri ixtiyoriy mahsulotlarni qo‘shish yoki tahrirlash mumkin.

![Odoo Sales’da taklifnomalarga ixtiyoriy mahsulotlarni qo‘shish.](optional_products/optional-products-tab.png)

Taklifnomaga ixtiyoriy mahsulot(lar)ni qo‘shish uchun, `Ixtiyoriy mahsulotlar` tabida `Mahsulot qo‘shish` (
`Add a product`) tugmasini bosing. Bu amal `Mahsulot` ustunida bo‘sh maydonni ochadi.

Bo‘sh maydonga bosganingizda, ochiluvchi menyuda mavjud mahsulotlar ro‘yxati paydo bo‘ladi. Tanlangan mahsulot
taklifnomaga ixtiyoriy mahsulot sifatida qo‘shiladi.

::: tip

Agar kerakli mahsulot ro‘yxatda ko‘rinmasa, mahsulot nomini yozing — u ochiluvchi menyuda paydo bo‘ladi. So‘ng uni
tanlang va taklifnomaga qo‘shing.

:::

::: tip

Mahsulot qo‘shilganda, odatiy `Miqdor` qiymati [1] bo‘ladi, ammo uni xohlagan vaqtda o‘zgartirish mumkin.

:::

`Ixtiyoriy mahsulotlar` tabidagi har qanday qatorni o‘chirish uchun, o‘sha qatorning o‘ng tomonidagi `🗑️` (axlat qutisi)
ikonkasini bosing.

Taklifnoma yuqori chap burchagidagi `Ko‘rish` (`Preview`) tugmasini bosing — bu orqali mijozga email orqali
yuboriladigan taklifnomaning oldindan ko‘rinishini ko‘rish mumkin. Taklifnoma ostida `Variantlar` (`Options`) bo‘limi
mavjud bo‘lib, mijoz u yerdan qo‘shimcha mahsulotlarni buyurtmaga qo‘shishi mumkin.

![Odoo Sales’da taklifnoma ko‘rinishini oldindan ko‘rish.](optional_products/optional-products-checkout.png)

Mijoz qo‘shimcha mahsulotni buyurtmaga qo‘shish uchun mahsulot qatorining o‘ng tomonidagi `🛒` (savat) ikonkasini bosadi.

Agar mijoz ixtiyoriy mahsulot(lar)ni tanlasa, ular avtomatik ravishda savdo vakili tomonidan boshqarilayotgan
taklifnomaga qo‘shiladi.

Mijoz buyurtmaga ixtiyoriy mahsulot qo‘shganida yoki boshqa biror o‘zgarish kiritganida, savdo vakiliga bu haqda darhol
bildirishnoma yuboriladi. Bu orqali savdo vakillari *Savdo* ilovasining administrator panelida buyurtma holatidan doimiy
xabardor bo‘lib turishadi.

## Taklifnoma shablonlarida ixtiyoriy mahsulotlar

::: tip

Quyidagi ma'lumotlarni o‘qishdan oldin `quote_template` hujjatini ko‘rib chiqib, taklifnoma shablonlari qanday
ishlashini yaxshiroq tushunib oling.

:::

Taklifnoma shablonlarida ham, oddiy taklifnoma shaklidagidek, `Ixtiyoriy mahsulotlar` (`Optional Products`) tab mavjud.
Bu yerda bog‘liq mahsulot yoki xizmatlarni shablonga qo‘shish mumkin.

Ixtiyoriy mahsulotlarni taklifnoma shabloniga qo‘shish uchun quyidagi yo‘ldan o‘ting:

`Savdo ilovasi ‣ Konfiguratsiya ‣ Taklifnoma shablonlari`.

So‘ng, mavjud taklifnoma shablonini tanlang yoki `Yangi` (`New`) tugmasini bosib yangisini yarating.

Taklifnoma shabloni formasida `Ixtiyoriy mahsulotlar` tabini oching. Shu tabda `Qator qo‘shish` (`Add a line`) tugmasini
bosing va kerakli mahsulotni tanlab, shablonga ixtiyoriy mahsulot sifatida qo‘shing.

![Odoo Sales’da taklifnoma shablonidagi ixtiyoriy mahsulotlar.](optional_products/optional-products-tab-quotation-template.png)

`Ixtiyoriy mahsulotlar` tabida qo‘shilgan mahsulotlar, ushbu taklifnoma shablonidan foydalanilganda taklifnomada
avtomatik tarzda aks etadi. Shuningdek, bu mahsulotlar mijozga yuborilishdan oldin olib tashlanishi yoki yangilari
qo‘shilishi mumkin.

::: tip

Ixtiyoriy mahsulot sifatida, mijozni qo‘shimcha mahsulotlar qo‘shishga undaydigan yoki tanlagan mahsulotining qimmatroq
versiyasini xarid qilishga jalb qiladigan mahsulotlarni taklif qilish eng maqsadga muvofiqdir.

Masalan, agar mijoz yog‘ochdan yasalgan stul xarid qilayotgan bo‘lsa, ixtiyoriy mahsulot sifatida kafolat yoki charm
o‘rindiqli yog‘och stul taklif qilish mumkin.

:::

::: tip

Taklifnoma shabloniga cheksiz miqdorda ixtiyoriy mahsulotlar qo‘shish mumkin.

:::
