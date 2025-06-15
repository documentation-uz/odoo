# Depozitlarni boshqarish

Belgilangan depozitlarni talab qilish ko'plab ijara stsenariylarida keng
tarqalgan; masalan, xavfsizlik depozitlarini yig'ish.

Ushbu hujjat **Rentals** ilovasida depozitlarni
`configuring `,
`collecting ` va `refunding
` qilishning standart
variantlarini qamrab oladi.

## Konfiguratsiya 

Avval, depozit talab qiladigan har bir ijara mahsuloti uchun
*depozit xizmat mahsuloti* yarating.

Buning uchun `Rental ‣ Products` ga o'ting va `New` mahsulot yarating.

Mahsulot formasida mahsulotga depozit ekanligini ko'rsatuvchi nom bering.

::: example
Agar bu depozit xizmat mahsuloti *Digital Camera* ijara mahsuloti uchun
mo'ljallangan bo'lsa, nom [Digital Camera Deposit] sifatida kiritilishi
mumkin.
:::

Keyinchalik, `Product Type` ni
`Service` ga, `Invoicing Policy`
ni `Delivered quantities` ga o'rnating
va so'ngra depozit uchun yig'iladigan miqdor bilan
`Sales Price` ni belgilang. Ushbu
depozit xizmat mahsuloti uchun `Sales Taxes`
ni kiritish yoki kiritmaslikni tanlang.

Nihoyat, depozit xizmat mahsulotini `fa-cloud-upload`
`(save)` qiling.

## Ixtiyoriy mahsulotdan depozitlarni yig'ish 

Ijara mahsuloti formasida `Sales`
tabiga o'ting va `deposit service
product ` ni
`Optional Products` ga qo'shing.

`Rental prices ` tabida ijara
mahsulotining narxlarini sozlashni unutmang.

Yuqoridagi konfiguratsiya bilan
`rental order ` yaratilishi mumkin.

::: warning

`Order Lines` tabida ijara mahsulotini
tanlagandan so'ng, `Configure your product` qalqib chiquvchi oynasida depozit xizmat
mahsulotini `fa-plus` `Add` qilishni
unutmang.

`Configure your product` qalqib
chiquvchi oynasi faqat ijara mahsulotida ixtiyoriy mahsulot o'rnatilgan
bo'lsagina paydo bo'ladi.
::::

::: tip

Agar `eCommerce ` o'rnatilgan bo'lsa,
ijara mahsulotining `Sales` tabida
depozit talab qilinishini bildiruvchi `Ecommerce
Description` qo'shing.

Mijoz ijara mahsulotini savatiga qo'shganda,
`Configure your product` qalqib
chiquvchi oynasi `Available options`
ostida depozit xizmat mahsulotini ko'rsatadi.

Mijoz `fa-shopping-cart` `Add` ni
bosgandan so'ng ijara mahsuloti va depozit xizmat mahsuloti ularning
savatiga qo'shiladi.
::::

![Ijara taklifida ro'yxatga olingan depozit xizmat mahsuloti.](manage_deposits/optional-product.png)

## Qaytarishda depozitlarni qaytarish 

Mijoz `returns the rented product `
qilgandan so'ng, hisob-fakturadan `credit note ` bilan ularning depozitini
qaytarib bering va bog'langan sotuv buyurtmasida *yetkazilgan miqdor*ni
[0] ga o'zgartiring.