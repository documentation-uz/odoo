# Kotirovka muddatlari

Odoo *Sales* dasturida savdo kotirovkalariga muddatlar belgilash mumkin. Bunday qilish mijozlarni savdo muzokaralari paytida tezroq harakat qilishga undaydi, chunki ular yaxshi bitimni o'tkazib yuborish qo'rquvini his qilishlari mumkin. Shuningdek, muddatlar buyurtmani biznes uchun endi foydali bo'lmagan narxda bajarish kerak bo'lgan holatda kompaniya uchun himoya vazifasini ham bajarishi mumkin.

## Kotirovka muddati tugashi

Odoo *Sales* dasturida kotirovkaga muddati tugash sanasini qo'shish imkoniyati mavjud.

Kotirovkaga muddati tugash sanasini qo'shish uchun `Sales app` ga o'ting va kerakli kotirovkani tanlang yoki `New` tugmasini bosib yangisini yarating.

Kotirovka formasida `Expiration` maydonini bosing, bu ochiluvchi kalendar oynasini ochadi. Ushbu ochiluvchi kalendardan kotirovka uchun muddati tugash sanasi sifatida kerakli oy va sanani tanlang.

![The expiration field on a standard quotation form in Odoo Sales.](deadline/quotation-deadlines-expiration-field.png)

::: tip

Kotirovkadagi `Preview` tugmasini bosish orqali Odoo o'sha muayyan taklifning qachon tugashini aniq ko'rsatadi.

![How customers will see deadlines on Odoo Sales.](deadline/quotation-deadlines-preview.png)
::::

## Kotirovka shabloni muddati tugashi

Odoo *Sales* dasturi shuningdek kotirovka shablonlariga muddati tugash sanasini qo'shish imkoniyatini beradi.

Kotirovka shabloniga muddati tugash sanasini qo'shish uchun `Sales app ‣ Configuration ‣ Quotation Templates` ga o'ting va muddati qo'shilishi kerak bo'lgan kerakli kotirovka shablonini tanlang yoki noldan yangi kotirovka shabloni yaratish uchun `New` tugmasini bosing.

Kotirovka shabloni formasida kotirovka shabloni nomi ostida joylashgan `Quotation expires after` maydoniga muayyan kun sonini qo'shing. Kunlar soni kotirovka muddati tugashidan oldin qancha vaqt amal qilishini bildiradi.

![The quotation expires after field on a quotation template form in Odoo Sales.](deadline/quotation-deadlines-expires-after.png)

Keyin, o'sha muayyan kotirovka shabloni kotirovkada ishlatilganda, yuqorida belgilangan kunlar soniga asoslanib muddati tugash sanasi avtomatik ravishda hisoblanadi. Biroq, bu sanani kotirovkani mijozga yuborishdan oldin o'zgartirish mumkin.