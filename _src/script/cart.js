let products = JSON.parse(localStorage['cart']);
let count = 0;
let totalProducts = document.querySelector(".count-products");
if (localStorage['productCount']) {
    totalProducts.innerText = localStorage['productCount'];
} else {
    totalProducts.innerText = 0;
}

Object.entries(products).forEach( ([art, product]) => {
    count = count + parseInt(product['count']);
    let element = {
        row : Element.create( "div", "cart-product-row"),
        image : Element.create("img", "cart-product-image"),
        info : Element.create("div", "cart-product-info"),
        art : Element.create("div", "product-art", art),
        name : Element.create("a", "cart-product-name", product.name),
        count : Element.create("div", "cart-product-count"),
        countMinus : Element.create("button", "cart-product-minus", "-"),
        countPlus : Element.create("button", "cart-product-plus", "+"),
        countCurrent : Element.create("div", "product-count-current", product.count),
        wrapPrice : Element.create("div", "cart-wrap-price"),
        price : Element.create("div", "cart-product-price", product.price),
        totalPrice : Element.create("div", "cart-product-price-total"),
        cost : Element.create("span", "cart-product-cost", product.price * product.count),
        currency : Element.create("span", "cart-product-currency", 'руб'),
        del : Element.create("button", "cart-product-del,btn-warning", "&#10005;"),
    }

    Element.attr(element.image, [{src: product.img}, {alt:product.name}]);
    Element.attr(element.name, [{href: product.url}, {'data-product-art':art}]);
    Element.attr(element.del, [{'data-product-art':art}]);

    element.info.append(element.art);
    element.info.append(element.name);

    element.count.append(element.countMinus);
    element.count.append(element.countCurrent);
    element.count.append(element.countPlus);

    element.wrapPrice.append(element.price);
    element.wrapPrice.append(element.totalPrice);
    element.totalPrice.append(element.cost);
    element.totalPrice.append(element.currency);

    element.row.append(element.image);
    element.row.append(element.info);
    element.row.append(element.count);
    element.row.append(element.wrapPrice);
    element.row.append(element.del);


    // вывод блоков товаров
    View.render(".cart-wrap-products", element.row)
})

let productRow = document.querySelectorAll('.cart-product-row');
Object.entries(productRow).forEach( product => {
    product[1].onclick = (e) => {
        let minus = e.target.classList.contains("cart-product-minus"),
            plus = e.target.classList.contains("cart-product-plus"),
            currentCount = product[1].querySelector(".product-count-current"),
            art = product[1].querySelector('.product-art').textContent,
            price = product[1].querySelector(".cart-product-price").textContent,
            cost = product[1].querySelector(".cart-product-cost"),
            del = e.target.classList.contains("cart-product-del");

        if (minus) {
            if (currentCount.textContent > 1) {
                currentCount.innerText = parseInt(currentCount.textContent) - 1;
                cost.innerText = cost.textContent - price;
                totalProducts.innerText = parseInt(totalProducts.textContent) - 1;
                totalPrice();
                let total = totalCount();
                products[art]['count'] = currentCount.textContent;
                localStorage.setItem('productCount', total);
                localStorage.setItem('cart', JSON.stringify(products));
            }
        }
        if (plus) {
            currentCount.innerText = parseInt(currentCount.textContent) + 1;
            cost.innerText = parseInt(cost.textContent) + parseInt(price);
            totalProducts.innerText = parseInt(totalProducts.textContent) + 1;
            totalPrice();
            products[art]['count'] = currentCount.textContent;
            let total = totalCount();
            localStorage.setItem('productCount', total);
            localStorage.setItem('cart', JSON.stringify(products));
        }

        if (del) {
            let art = e.target.getAttribute('data-product-art');
            product[1].remove();
            delete products[art];
            totalPrice();
            let total = totalCount();
            localStorage.setItem('productCount', total);
            localStorage.setItem('cart', JSON.stringify(products));
        }
    }
});

function totalPrice () {
    let total = 0,
        cost = document.querySelectorAll(".cart-product-cost");
    Object.entries(cost).forEach( c => {
        total +=parseInt(c[1].textContent)
    })
    document.querySelector(".total-price").innerText = total;
}
function totalCount () {
    let total = 0,
        count = document.querySelectorAll(".product-count-current");
    Object.entries(count).forEach( c => {
        total +=parseInt(c[1].textContent)
    })
    totalProducts.innerText = total;
    return total;
}

totalPrice();

