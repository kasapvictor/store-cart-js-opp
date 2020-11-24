let cartCountProducts = document.querySelector(".cart-count-products");

if  (localStorage['productCount'] && localStorage['cart']) {
    cartCountProducts.innerText = localStorage['productCount'];
}

let products = {
    "art3214" : {
        "name" : "Format 3214 20",
        "url" : "#",
        "image" : "./images/Format 3214.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 33500.00
    },
    "art6415" : {
        "name" : "Haro Annex Mini",
        "url" : "#",
        "image" : "./images/Haro Annex Mini.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 39500.00,
    },
    "art7433" : {
        "name" : "Haro Annex Pro",
        "url" : "#",
        "image" : "./images/Haro Annex Pro.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 56500.00,
    },
    "art3497" : {
        "name" : "Haro Annex Pro XL",
        "url" : "#",
        "image" : "./images/Haro Annex Pro XL.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 59900.00,
    },
    "art8745" : {
        "name" : "Stinger BMX Jioker 20",
        "url" : "#",
        "image" : "./images/Stinger BMX Jioker 20.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 21000.00,
    },
    "art6465" : {
        "name" : "Stinger BMX Shift 20",
        "url" : "#",
        "image" : "./images/Stinger BMX Shift 20.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 24000.00,
    },
    "art3415" : {
        "name" : "Tech Team Twen 20",
        "url" : "#",
        "image" : "./images/Tech Team Twen 20.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 33500.00,
    },
    "art4587" : {
        "name" : "Welt BMX Freedom",
        "url" : "#",
        "image" : "./images/Welt BMX Freedom.webp",
        "desc" : "Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "excerpt" : "Excerpt - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur cum doloribus hic illo impedit laborum maiores molestias neque nihil quae quasi quis quo ratione recusandae repellendus, tempore ullam vel?",
        "price" : 27000.00,
    }
}

Object.entries(products).forEach(
    ([art, product]) => {
        let element = {
            row : Element.create( "div", "product-row"),
            wrapImage : Element.create("div", "product-wrap-image"),
            image : Element.create("img", "product-image"),
            countToCart : Element.create("div", "product-count-to-cart"),
            countBtnPlus : Element.create("div", "product-wrap-image"),
            countBtnMinus : Element.create("button", "product-count-btn, product-count-minus", "&minus;"),
            countBtnPlus : Element.create("button", "product-count-btn, product-count-plus", "&plus;"),
            countCurrent : Element.create("div", "product-count-current", 1),
            addToCart: Element.create("button", "product-buy", "Купить"),
            wrapPrice : Element.create("div", "product-wrap-price"),
            art : Element.create("div", "product-art", art),
            name : Element.create("a", "product-name", product.name),
            excerpt : Element.create("div", "product-excerpt", product.excerpt),
            price : Element.create("div", "product-price", product.price),
            currency : Element.create("span", "currency", "руб")
        }

        // атрибут для картинок
        Element.attr(element.image, [{src: product.image}, {alt:product.name}]);

        // ссылки (имя)
        Element.attr(element.name, [{href: product.url}, {'data-product-art':art}]);
        Element.attr(element.addToCart, [{'data-product-art':art}]);

        // формирование блока товара
        element.wrapImage.append(element.image);
        element.wrapImage.append(element.countToCart);
        element.countToCart.append(element.countBtnMinus);
        element.countToCart.append(element.countCurrent);
        element.countToCart.append(element.countBtnPlus);
        element.wrapImage.append(element.addToCart);
        element.wrapPrice.append(element.art);
        element.wrapPrice.append(element.name);
        element.wrapPrice.append(element.excerpt);
        element.wrapPrice.append(element.price);
        element.price.append(element.currency);
        element.row.append(element.wrapImage);
        element.row.append(element.wrapPrice);

        // вывод блоков товаров
        View.render(".wrap-products", element.row)
    });

let productCart = {};

if (localStorage['cart']) {
    productCart = JSON.parse(localStorage['cart']);
}


// событие клик для товара
let productRow = document.querySelectorAll(".product-row");
let count = 1;
Object.entries(productRow).forEach( product => {
    product[1].onclick = (e) => {
        let btnMinus = e.target.classList.contains("product-count-minus"),
            btnPlus = e.target.classList.contains("product-count-plus"),
            countProduct = product[1].querySelector(".product-count-current"),
            artProduct = product[1].querySelector('.product-art').textContent,
            buyProduct = e.target.classList.contains("product-buy");


        // по клику минус уменьшить кол-во товара
        if (btnMinus) {
            if (countProduct.textContent == 1) {
                return;
            }
            count = parseInt(countProduct.textContent) - 1;
            countProduct.innerText = count;
        }

        // по клику плюс увеличить количество на 1
        if (btnPlus) {
            if (productCart[artProduct] !== undefined) {
                productCart[artProduct]['count'] = parseInt(countProduct.textContent) + 1;
            }
            count = parseInt(countProduct.textContent) + 1;
            countProduct.innerText = count;
        }

        if (buyProduct) {
            if (!Boolean(productCart[artProduct])) {
                productCart[artProduct] = {
                    name: product[1].querySelector(".product-name").textContent,
                    img: product[1].querySelector(".product-image").getAttribute("src"),
                    count: product[1].querySelector(".product-count-current").textContent,
                    url: product[1].querySelector(".product-name").getAttribute("href"),
                    price: parseInt(product[1].querySelector(".product-price").textContent)
                };
                let countProduct = 0;
                // показывает сколько товаров в корзине
                Object.entries(productCart).forEach( item => {
                    countProduct +=parseInt(item[1]['count']);
                });
                cartCountProducts.innerText = countProduct;
            } else {
                return;
            }
            return;
        }
    };
});


let btnCart = document.querySelector(".cart");
btnCart.onclick = function () {
    let count = 0;
    Object.entries(productCart).forEach( item => {
        count = count + parseInt(item[1]['count']);
    });
    localStorage.setItem('productCount', count);
    localStorage.setItem('cart', JSON.stringify(productCart));
}

@@include('webp.js')