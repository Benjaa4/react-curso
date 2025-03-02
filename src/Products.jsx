import './Products.css'

function Products () {
    function product (id, name, price, desc) {
        this.id =id
        this.name = name
        this.price = price
        this.desc = desc

    }
    
    const productos = [
        new product(1, "Samsung A55", 450, "Galaxy A55 5G 256GB"),
        new product(2, "Iphone 14" ,2000, "Iphone 14 color space black" ),
        new product(3, "Iphone 15", 790, "Iphone 15 color rosa ")
    ]
}



export default Products