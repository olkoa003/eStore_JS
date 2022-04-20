"use strict"

// const goods = [
//     { id: 1, title: undefined, price: 150 },
//     { id: 2, title: 'Socks', price: 50 },
//     { id: 3, title: 'Jacket', price: 450 },
//     { id: 4, title: 'Shoes', price: undefined },
// ];

// const renderGoodsItem = (title = 'Aurora', price = 20, img = "images/imageFashion.jpg") => `<div class="goods-item">
//             <img src="${img}" alt="Denim Jeans">
//             <h3 class="goodsItem">${title}</h3>
//             <p class="goodsItem">${price}$</p>
//             <p class="goodsItem">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun
//             denim lorem jeansum.</p>
//             <button class="addToCart goodsItem">Add to Cart</button>
//             </div>`;

// const renderGoodsList = (goods) => {
//     let goodsList = goods.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join('');
// };

// renderGoodsList(goods);

// ES6 based

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Jeans', price: 150 },
            { id: 2, title: 'Socks', price: 50 },
            { id: 3, title: 'Jacket', price: 450 },
            { id: 4, title: 'Shoes', price: 200 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });

        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
    totalGoodsListPrice() {
        let sum = 0;
        this.goods.forEach(good => {
            sum = good.count + good.price
        });
    }
}

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
            <img src="images/imageFashion.jpg" alt="Denim Jeans" data-id="${this.id}">
            <h3 class="goodsItem">${this.title}</h3>
            <p class="goodsItem">${this.price}$</p>
            <p class="goodsItem">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun
            denim lorem jeansum.</p>
            <button class="addToCart goodsItem">Add to Cart</button>
            </div>`;
    }
}


const list = new GoodsList();
list.fetchGoods();
list.render();
sum.goodstotalGoodsListPrice()

// Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
// какие методы понадобятся для работы с этими сущностями.

// Basket
const basket = {}; // empty object for the result

class Basket {
    constructor() {
        this.goods = [];
    }

    addCartItem(basketItem) {
        this.goods.push(basketItem);
    }

    getTotalBasketCount() {
        //counts number of items in the basket
    }

    getTotalBasketPrice() {
        //getting total basket price

    }
    renderProductInBasket(id, title, price) {
        // rendering goods in basket
        // if (!(id in basket)) {
        //     basket[id] = { id: id, title: title, price: price, count: 0 };
        // }
        // basket[id].count++;
        // basketCounterEl.textContent = getTotalBasketCount().toString();
        // basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    }

    renderNewProductInBasket(productId) {

    }
}
