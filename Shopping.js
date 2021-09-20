import React from 'react'
import './Shopping.css'

function Shopping() {

    const products = [
    {
        id: "1",
        img_src: "img/shop/1.jpg",
        name: " Organic Cotton Bags to Replace Plastic Shopping Bags",
        link: "https://dl.flipkart.com/s/BdQk15uuuN"
    },
    {
        id: "2",
        img_src: "img/shop/2.png",
        name: "Bamboo Toothbrushes to Replace Plastic Toothbrushes",
        link: "https://dl.flipkart.com/s/w!Hwn7NNNN"
    },
{   
        id: "3",
        img_src: "img/shop/3.jpg",
        name: " Beeswax Food Wrap to Replace Plastic Food Wrapping",
        link: "https://brownliving.in/products/madhu-wrap-reusable-beeswax-food-wrap-set-of-2-large?variant=39836514844847&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2020-04-03&utm_source=google&utm_medium=smart_campaign&gclid=Cj0KCQjwv5uKBhD6ARIsAGv9a-y0mEgoSLSe8b-eL3Jnh9SpVS7vnVKp8xa826D-NUwSU3XNxuw9nLwaAhxCEALw_wcB"
    },
{
        id: "4",
        img_src: "img/shop/4.jpg",
        name: " Glass jars to replace plastic food containers",
        link: "https://dl.flipkart.com/s/wm_Uk7NNNN"
    },
{
        id: "5",
        img_src: "img/shop/5.jpg",
        name: " Eco soap nuts to replace laundry detergent",
        link: "https://dl.flipkart.com/s/BaG6uzuuuN"
    },
{
        id: "6",
        img_src: "img/shop/6.jpg",
        name: " Solar nightlights to replace those little nightbulbs",
        link: "https://dl.flipkart.com/s/w!vz2SNNNN"
    },
{
        id: "7",
        img_src: "img/shop/7.png",
        name: "Eco-friendly sanitary pads",
        link: "https://dl.flipkart.com/s/B!Pqm5uuuN"
    },
{
        id: "8",
        img_src: "img/shop/8.png",
        name: " Biodegradable garbage bags to replace Plastic Garbage bags",
        link: "https://dl.flipkart.com/s/wCM217NNNN"
    },

    ];
    return (
    <div className="Shop">
        <div className="items">
            {products.map((product) => (
            <div className="product" key={product.id}>
                <img src={product.img_src} alt="" />
                <p><a href={product.link}>{product.name}</a></p>
            </div>
            ))}  
        </div>
    </div>
    )
}

export default Shopping
