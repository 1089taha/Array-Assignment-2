var product1 = {
    name: "Headphones",
    price: 5000,
    color: "blue",
    inventory: {
        stock: 6,
        coloroption: ['red', 'white', 'blue']
    }
};
var product2 = {
    name: "onitsuka tiger",
    price: 8000,
    color: "red",
    inventory: {
        stock: 10,
        coloroption: ['red', 'white', 'blue']
    }
};
var product3 = {
    name: "laptop",
    price: 37000,
    color: "white",
    inventory: {
        stock: 4,
        coloroption: ['red', 'white', 'blue']
    }
};
var product = [
    product1,
    product2,
    product3,
];
var colorchange = function (object, newcolor) {
    object.color = newcolor;
    if (object.color === "blue") {
        var impercent10 = object.price / 5000 * 10;
    }
    else if (object.color === "red") {
        var impercent5 = object.price / 8000 * 5;
    }
    else if (object.color === "white") {
        var depercent10 = object.price / 37000 * 10;
        object.price = depercent10;
    }
};
product.forEach(function (item) {
    console.log(item);
});
colorchange(product1, "blue");
colorchange(product2, "red");
colorchange(product3, "white");
console.log("/n");
product.forEach(function (item) {
    console.log(item);
});
