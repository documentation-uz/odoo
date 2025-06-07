# Yetkazib berilgan yoki buyurtma qilingan miqdor asosida hisob-faktura berish

Turli biznes siyosatlari hisob-faktura berish uchun turli variantlarni talab qilishi mumkin:

- *Buyurtma qilingan narsaga hisob-faktura berish* qoidasi Odoo *Sales* dasturida standart rejim sifatida ishlatiladi, ya'ni mijozlarga sotuv buyurtmasi tasdiqlangandan so'ng hisob-faktura beriladi.
- *Yetkazib berilgan narsaga hisob-faktura berish* qoidasi mijozlarga yetkazib berish amalga oshirilgandan so'ng hisob-faktura beradi. Bu qoida ko'pincha katta miqdorda materiallar, suyuqliklar yoki oziq-ovqat mahsulotlarini sotadigan korxonalar uchun ishlatiladi. Bunday hollarda buyurtma qilingan miqdor yetkazib berilgan miqdordan biroz farq qilishi mumkin, shuning uchun haqiqatda yetkazib berilgan miqdorga hisob-faktura berish afzalroq bo'ladi.

Turli hisob-faktura variantlariga ega bo'lish ko'proq moslashuvchanlik beradi.

## Hisob-faktura siyosati xususiyatlari

Kerakli hisob-faktura siyosati xususiyatlarini faollashtirish uchun `Sales app ‣ Configuration ‣ Settings` bo'limiga o'ting va `Invoicing` sarlavhasi ostida `Invoicing Policy` qoidasini tanlang: `Invoice what is ordered` yoki `Invoice what is delivered`.

![Odoo Sales dasturida hisob-faktura siyosatini tanlash.](invoicing_policy/invoicing-policy-setting.png)

::: warning

Agar `Invoice what is delivered` qoidasi tanlangan bo'lsa, onlayn to'lov tasdiqlanganida avtomatik ravishda hisob-faktura yaratadigan `Automatic Invoice` funksiyasini faollashtirish **mumkin emas**.
::::

## Mahsulot formasidagi hisob-faktura siyosati

`Sales app ‣ Products ‣ Products` boshqaruv paneli orqali istalgan mahsulot sahifasida `General Information` yorlig'i ostida joylashgan `Invoicing Policy` variantini toping. Uni ochiladigan menyu yordamida qo'lda o'zgartirish mumkin.

![Odoo Sales dasturida mahsulot formasida hisob-faktura siyosatini qanday o'zgartirish.](invoicing_policy/invoicing-policy-general-info-tab.png)

## Sotuv jarayoniga ta'siri

Odoo *Sales* dasturida asosiy sotuv jarayoni taklifnoma yaratishdan boshlanadi. Keyin bu taklifnoma mijozga yuboriladi. So'ngra uni tasdiqlash kerak, bu taklifnomani sotuv buyurtmasiga aylantiradi. Bu o'z navbatida hisob-faktura yaratadi.

Quyida hisob-faktura siyosati qoidalarining yuqorida aytilgan sotuv jarayoniga qanday ta'sir qilishi haqida ma'lumot:

- `Invoice what is ordered`: Asosiy sotuv jarayoniga ta'sir qilmaydi. Sotuv tasdiqlanishi bilanoq hisob-faktura yaratiladi.
- `Invoice what is delivered`: Sotuv jarayoniga ozgina ta'sir qiladi, chunki yetkazib berilgan miqdorni sotuv buyurtmasiga qo'lda kiritish kerak. Yoki *Inventory* dasturini o'rnatib, *Sales* dasturi bilan hisob-faktura yaratishdan oldin yetkazib berilgan miqdorni tasdiqlash uchun ishlatish mumkin.

:::: warning

Agar foydalanuvchi yetkazib berilgan miqdorni tasdiqlamasdan hisob-faktura yaratishga harakat qilsa, quyidagi xato xabari paydo bo'ladi:
`There is no invoiceable line. If a product has a Delivered quantities invoicing policy, please make sure that a quantity has been delivered.`

![Agar Yetkazib berilgan miqdorlar hisob-faktura siyosati tanlangan bo'lsa, miqdor yetkazib berilganiga ishonch hosil qiling.](invoicing_policy/invoicing-policy-error-message.png)
::::

::: tip

Taklifnoma tasdiqlanganidan so'ng va holat `Quotation sent`dan `Sales order`ga o'zgargandan so'ng, yetkazib berilgan va hisob-faktura qilingan miqdorlarni to'g'ridan-to'g'ri sotuv buyurtmasidan ko'rish mumkin. Bu ikkala hisob-faktura siyosati qoidasi variantlari uchun ham to'g'ri.

![Odoo Sales dasturida yetkazib berilgan va hisob-faktura qilingan miqdorlaringizni qanday ko'rish.](invoicing_policy/invoicing-policy-order-lines.png)

Odoo taklifnoma tasdiqlanganida, qisman yetkazib berish bo'lsa ham, `Delivered` va `Invoiced` miqdorlarini avtomatik ravishda hisob-fakturaga qo'shadi.
::::

Nihoyat, hisob-faktura yaratish uchun bir nechta turli variantlar mavjud: `Regular invoice`, `Down payment (percentage)` yoki `Down payment (fixed amount)`.