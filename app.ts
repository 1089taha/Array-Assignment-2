//Part 1: Basic Arrays - Product Inventory
//Challenge:
//You are tasked with creating a Product Inventory system. Implement functions and logic to
//manage object manipulation effectively.
//1. Define a type alias named Product to represent a product with the following
//properties:
//• name (string): The name of the product.
//• price (number): The price of the product.
//• inventory (object): An object containing inventory details including:
//• stock (number): The number of products available.
//• colorOptions (string[ ]): An array listing available colors.
//2. Create an array named products containing at least three product objects. Each
//product object should include a name, price, and inventory details.
//3. Implement a function named changeColor that takes a product object and a new
//color as input. This function should update the color property of the product and
//adjust the price based on the new color (implement your own logic, e.g., increase by
//10% for red, decrease by 5% for blue).
//4. Display each product's name, price, stock, and available colors. Iterate through the
//products array and print each product's details.
type Product ={
    name:string,
    price: number,
    color: string,
    inventory:{
        stock:number,
        coloroption? : ['red', 'white' , 'blue']
    };
};
let product1: Product={
    name: "Headphones",
    price: 5000,
    color: "blue",
    inventory:{
        stock:6,
        coloroption: ['red', 'white', 'blue']
    }
};
let product2: Product={
    name:"onitsuka tiger",
    price : 8000,
    color: "red",
    inventory:{
        stock: 10,
        coloroption: ['red', 'white' , 'blue']

    }
};
let product3: Product={
    name: "laptop",
    price: 37000,
    color: "white",
    inventory:{
        stock: 4,
        coloroption: ['red', 'white' , 'blue']
    }
};
let product: Product[]=[
    product1,
    product2,
    product3,
];
let colorchange=(object:Product , newcolor:string) =>{
    object.color=newcolor
    if (object.color === "blue"){
        let impercent10: number= object.price /5000 * 10
    }
    else if(object.color === "red"){
        let impercent5: number= object.price /8000 * 5
    }
    else if(object.color === "white"){
        let depercent10: number= object.price /37000 * 10
        object.price= depercent10
    }
}
product.forEach((item) =>{
    console.log(item);
})
colorchange(product1 , "blue");
colorchange(product2 , "red");
colorchange(product3 , "white");
console.log("/n");
product.forEach((item) =>{
    console.log(item);
})

