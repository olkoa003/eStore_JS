"use strict"

const goods = [
    { id: 1, title: undefined, price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: undefined },
];

const renderGoodsItem = ({title = 'Aurora', price = 20}, img = 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') => `<div class="goods-item">
            <img src="${img}" alt="Denim Jeans" style="width:100%">
            <h3>${title}</h3>
            <p>${price}$</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun
            denim lorem jeansum.</p>
            <p><button class="addToCart">Add to Cart</button></p>
            </div>`;

const renderGoodsList = (goods) => {
    let goodsList = goods.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(''); // здесь убираем запятые

    // const productsBlock = document.querySelector('.goods-list');
    // goods.forEach(item => {
    //    productsBlock.insertAdjacentHTML('beforeend', renderGoodsItem(item.title, item.price));
    // });
};

renderGoodsList(goods);
/*
    Задание 1 для урока 1:
        Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
        Ответ: Выполнено!
        Добавьте значения по умолчанию для аргументов функции.
        Ответ: Выполнено
        Как можно упростить или сократить запись функций?
        Ответ: В первом варианте можно убрать return и скобки; А можно ли второй вариант сократить?
        Артем, подскажите почему не работает вот этот вариант:
                goods.forEach(item => {
            productsBlock.insertAdjacentHTML('beforeend', renderGoodsItem(item.title, item.price));
            });
             Пытался сделать по аналогии как у вас но ничего не получилось.
        * Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
        Ответ: Это происходит из за того что мы перебираем массим и создаем новый массив с помощью map.
        Тк все Arrays идут через запятую поэтому они отображаются на экране.
        Решение: cоединить при помощи ${variable}.join('')

@Aртем подскажите как сохранить карточку со всеми стилями и не всавлять всю разметку а только нужные значения?
В коде выше js заменяет весь html code разметкой выше...
*/
