# Veb aloqa formalaridan imkoniyatlar yaratish

Veb-saytga aloqa formasini qo'shish tashrif buyuruvchilarni lidlar va imkoniyatlarga 
aylantirishni osonlashtiradi. Tashrif buyuruvchi o'z ma'lumotlarini yuborishdan so'ng, 
imkoniyat avtomatik ravishda yaratilishi va belgilangan sotuv jamoasi hamda 
sotuvchiga tayinlanishi mumkin.

## Aloqa formalarini sozlash

Odatiy bo'lib, Odoo veb-saytidagi *Contact Us* sahifasi oldindan sozlangan aloqa 
formasini ko'rsatadi. Ushbu formani muayyan sotuv jamoasining ehtiyojlariga 
mos ravishda kerak bo'lsa sozlash mumkin.

`Website app ‣ Contact Us` ga o'ting, keyin veb muharririni ochish uchun 
ekranning yuqori o'ng qismidagi `Edit` tugmasini bosing. O'ng yon panelda 
forma sozlash parametrlarini ochish uchun veb-sahifa asosiy qismidagi forma 
blokiga bosing. O'ng yon panelning `From` bo'limidan aloqa formasini sozlash 
uchun quyidagi opsiyalar mavjud:

![The form configuration settings on an Odoo website.](opportunities_form/form-customization.png)

- `Action`: aloqa formasi uchun standart harakat `Send an Email` dir. 
  Ma'lumotni *CRM* ilovasida qo'lga kiritish uchun pastga tushish ro'yxatidan 
  `Create an Opportunity` ni tanlang.
- `Sales Team`: ushbu formadan keladigan imkoniyatlar tayinlanishi kerak bo'lgan 
  sotuv jamoasini pastga tushish menyusidan tanlang. Ushbu maydon **faqat** 
  `Action` maydoni `Create an Opportunity` ga o'rnatilgan bo'lsagina paydo bo'ladi.
- `Salesperson`: agar imkoniyatlar aniq sotuvchiga tayinlanishi kerak bo'lsa, 
  ularni pastga tushish menyusidan tanlang. Agar ushbu maydondan hech narsa 
  tanlanmasa, imkoniyatlar jamoaning mavjud qoidalariga asoslanib tayinlanadi.
- `Marked Fields`: ushbu maydondan forma belgilangan maydonlar bilan qanday 
  ishlashini o'zgartirish uchun foydalaning. Standart opsiya belgilangan 
  maydonlarni `Required` sifatida ko'rib chiqishdir, bu tavsiya etilgan sozlama.
- `Mark Text`: `Marked Fields` qanday aniqlanishi kerakligini tanlang. 
  Standart belgi yulduzcha ([\*]) dir.
- `Labels Width`: agar kerak bo'lsa, yorliqlarning piksel kengligini o'zgartirish 
  uchun ushbu maydondan foydalaning.
- `On Success`: mijoz formani muvaffaqiyatli yuborgandan so'ng veb-sahifa qanday 
  munosabat bildirishi kerakligini tanlang. `Nothing` mijozni xuddi shu ekranda 
  qoldiradi, forma muvaffaqiyatli yuborilganligini tasdiqlash xabari bilan. 
  `Redirect` mijozni quyidagi `URL` maydonida ko'rsatilgan manzil asosida yangi 
  veb-sahifaga yuboradi. `Show Message` formani mijozga kimdir tez orada javob 
  berishi kerakligini bildiruvchi oldindan sozlangan xabar bilan almashtiradi.
- `URL`: agar `On Success` maydonida `Redirect` tanlangan bo'lsa, formani 
  muvaffaqiyatli yuborgandan so'ng mijozlar yo'naltirilishi kerak bo'lgan 
  veb-sahifa uchun URL ni kiriting.
- `Visibility`: agar kerak bo'lsa, ushbu maydon uchun har qanday ko'rinish 
  shartlarini qo'shish uchun pastga tushish menyusidan foydalaning.

::: warning

Agar *CRM* sozlamalarida *lidlar* faollashtirilgan bo'lsa, `Create an Opportunity` 
tanlash o'rniga lid yaratadi. Lidlarni faollashtirish uchun 
`CRM app ‣ Configuration ‣ Settings` ga o'ting va `Leads` katakchasini 
belgilang. Keyin `Save` tugmasini bosing.
::::

### Aloqa formasi maydonlarini sozlash

Forma sozlamalariga qo'shimcha ravishda, har bir maydonning sozlamalarini ham 
sozlash mumkin. Veb muharriri menyusi hali ochiq turgan holda, yon panelda 
`Field` sozlash parametrlari bo'limini ochish uchun maydonga bosing. Maydonni 
sozlash uchun quyidagi opsiyalar mavjud:

- `Type`: maxsus maydon opsiyasini yoki mavjud maydon turini tanlang.
- `Input Type`: mijozlar qanday turdagi ma'lumot kiritishi kerakligini belgilang. 
  Mavjud opsiyalar `Text`, `Email`, `Telephone` yoki `Url` dir. Ushbu maydondan 
  qilingan tanlov mijozlar ma'lumot kiritishda foydalanishi mumkin bo'lgan 
  formatni cheklaydi.
- `Label`: maydon uchun nomni kiriting.
- `Position`: yorliqning formaning qolgan qismi bilan qanday tekislanishini 
  tanlang. Yorliqni yashirish, maydon ustida, maydonning chap tomonida yoki 
  o'ng tomonga tekislangan va maydonga yaqinroq qilish mumkin.
- `Description`: mijozlarga qo'shimcha ko'rsatmalar berishi mumkin bo'lgan 
  maydon uchun tavsif qo'shish uchun tumblerni suring. Tavsifni qo'shish uchun 
  formadagi maydon ostiga bosing.
- `Placeholder`: formatlash muhim bo'lgan joylarda, masalan, telefon raqami yoki 
  email manzili kabi ma'lumotni qanday kiritishni bilishlariga yordam berish uchun 
  foydalanuvchilarga misol kiriting.
- `Default Value`: mijoz maydondan ma'lumot bermaganida, standart ravishda 
  formaga kiritish uchun qiymatni kiriting. *Majburiy maydonlar uchun standart 
  qiymat kiritish tavsiya etilmaydi*.
- `Required`: agar har bir yuborish uchun ushbu maydon **albatta** to'ldirilishi 
  kerak bo'lsa, uni majburiy deb belgilash uchun tumblerni suring.
- `Visibility`: ushbu maydon qachon ko'rinishi kerakligini tanlang. Ushbu 
  maydonni kompyuter foydalanuvchilariga ko'rsatish yoki yashirish uchun chap 
  tugmadan foydalaning. Ushbu maydonni mobil foydalanuvchilarga ko'rsatish yoki 
  yashirish uchun o'ng tugmadan foydalaning.
- `Animation`: ushbu maydon biron-bir animatsiyaga ega bo'lishi kerakligini tanlang.

![The field configuration settings on an Odoo website.](opportunities_form/field-customization.png)

## Imkoniyatlarni ko'rish

Mijoz aloqa formasini yuborgandan va imkoniyat yaratilgandan so'ng, u 
`form settings` ga asoslanib tayinlanadi. Imkoniyatlarni ko'rish uchun 
`CRM app ‣ Sales ‣ My Pipeline` ga o'ting.

::: tip

Agar ma'lumotlar bazasida lidlar faollashtirilgan bo'lsa, aloqa formasi 
yuborishlari imkoniyatlar emas, lidlar sifatida yaratiladi. Lidlarni 
faollashtirish uchun `CRM app ‣ Configuration ‣ Settings` ga o'ting va 
`Leads` katakchasini belgilang. Keyin `Save` tugmasini bosing.

Yangi yaratilgan lidlarni ko'rish uchun `CRM app ‣ Leads` ga o'ting.
::::

`My Pipeline` boshqaruv panelida imkoniyat yozuvini ochish uchun Kanban 
ko'rinishida imkoniyat kartasiga bosing. Mijoz tomonidan yuborilgan ma'lumot 
imkoniyat yozuvida ko'rinadi.

::: tip

Aloqa formasi maydonlari sozlanishi mumkin bo'lganligi sababli, forma ma'lumotlari 
saqlanadigan imkoniyat yozuvidagi maydonlar shunga mos ravishda o'zgaradi.

Agar oldindan sozlangan aloqa formasi ishlatilsa, *Subject* maydoni `Title` 
maydoniga qo'shiladi va `Your Question` deb belgilangan `Notes` maydonidagi 
kontent `Internal Notes` oynasiga qo'shiladi.
::::