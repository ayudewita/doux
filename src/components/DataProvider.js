import React, {createContext, useState, useEffect} from 'react'
export const DataContext = createContext()

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Apple Mousse",
            "images": "https://i.postimg.cc/NF5V1Dys/apple-mousse.jpg",
            "description": "Apple mousse is layers of creamy raspberry and apple mousse",                    
            "content": "Welcome to apple and raspberry lovers. Our cake made of layer of crust with premium butter, raspberry mixed with apple mouse, and vanilla mousse.",
            "price": 3,
            "offer":"best seller",            
            "count": 1,
            "category":"cakes"
        },
        {
            "_id": "2",
            "title": "Assorted Macarons",
            "images": "https://i.postimg.cc/dtdFpQ1q/assorted-macaron.jpg",
            "description": "Various flavour of macarons",                    
            "content": "Consist of seven pieces of macarons. Vanilla, coffee, peanut, red velvet, strawberry, matcha, and blackberry flavour.",
            "price": 2,
            "offer":"latest product",
            "count": 1,
            "category":"macarons"
        },
        {
            "_id": "3",
            "title": "Banana Caramel",
            "images": "https://i.postimg.cc/hj6FZNRz/banana-caramel.jpg",
            "description": "Banana caramel is layers of creamy banana and caramel mousse",                    
            "content": "This cake made of layer of crust with premium butter, banana slices, banana mouse, and caramel mousse.",
            "price": 1,
            "offer":"discount",
            "count": 1,
            "category":"cakes"
        },
        {
            "_id": "4",
            "title": "Blueberry Tarte",
            "images": "https://i.postimg.cc/4xZD0zq5/blueberry-tart.jpg",
            "description": "Delicate layers of creamy blueberry and vanilla mousse",                    
            "content": "This tarte made of layer of crust with premium butter, vanilla mouse, and blueberry mousse.",
            "price": 9,
            "offer":"best seller",
            "count": 1,
            "category":"tartes"
        },
        {
            "_id": "5",
            "title": "Butter Cookies",
            "images": "https://i.postimg.cc/mD0qyM77/butter-cookies.jpg",
            "description": "Buttery, sweet, crunchy cookies.",                    
            "content": "Cookies that contain best butter, flour, eggs and other secret ingredients. Made by professional chef with love.",
            "price": 8,
            "offer":"latest product",
            "count": 1,
            "category":"cookies"
        },
        {
            "_id": "6",
            "title": "Tape Cake",
            "images": "https://i.postimg.cc/VLPpSqf8/cake-tape.jpg",
            "description": "Decadent, buttery, soft cake.",                    
            "content": "Tape cake made of mixture fermented cassava, flour, and butter.Topped with raisins and shreded chedar cheese.",
            "price": 7,
            "offer":"discount",
            "count": 1,
            "category":"cakes"
        },
        {
            "_id": "7",
            "title": "Caramel Tarte",
            "images": "https://i.postimg.cc/fTv2J1qc/caramel-tarte.jpg",
            "description": "Burnt sugary tarte.",                    
            "content": "This tarte made of layer of crust with premium butter, vanilla mouse, caramel nougat, and palm sugar sprinkle.",
            "price": 6,
            "offer":"best seller",
            "count": 1,
            "category":"tartes"
        },
        {
            "_id": "8",
            "title": "Cheese Ball",
            "images": "https://i.postimg.cc/nLNTyxMJ/cheese-ball.jpg",
            "description": "Cheesy and crispy cookie.",                    
            "content": "Cookies with tasty cheese covered with powdered sugar.",
            "price": 5,
            "offer":"latest product",
            "count": 1,
            "category":"cookies"
        },
        {
            "_id": "9",
            "title": "Chocolate Chip",
            "images": "https://i.postimg.cc/qR8cWC9s/chocolate-chip.jpg",
            "description": "Cookies with blend of chocolate chip.",                    
            "content": "Cookies that contain best butter, flour, eggs and other secret ingredients. Made by professional chef with love.",
            "price": 4,
            "offer":"discount",
            "count": 1,
            "category":"cookies"
        },
        {
            "_id": "10",
            "title": "Chocolate Thai Tea",
            "images": "https://i.postimg.cc/XNkc8dK3/chocolate-thaitea.jpg",
            "description": "Chocolate cake with thai tea pudding.",                    
            "content": "Layers of chocolate cake, thai tea foam pudding, and dices of vanilla jelly.",
            "price": 3,
            "offer":"discount",
            "count": 1,
            "category":"cakes"
        },
        {
            "_id": "11",
            "title": "Citrus Tarte",
            "images": "https://i.postimg.cc/xTsGrQF4/citrus-tarte.jpg",
            "description": "Tarte with various kind of citrus.",                    
            "content": "Tarte with lemon, grapefruit, and orange slice.",
            "price": 2,
            "offer":"",
            "count": 1,
            "category":"tartes"
        },
        {
            "_id": "12",
            "title": "Coffee Macaron",
            "images": "https://i.postimg.cc/xCxjfsDn/coffee-macaron.jpg",
            "description": "Coffee flavour meringue.",                    
            "content": "Sweet meringue with coffee taste and coffee ganache.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"macarons"
        },
        {
            "_id": "13",
            "title": "Grape Macaron",
            "images": "https://i.postimg.cc/7Z3xGP8B/grape-macaron.jpg",
            "description": "Grape flavour meringue.",                    
            "content": "Sweet meringue with grape taste and grape ganache.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"macarons"
        },
        {
            "_id": "14",
            "title": "Chocolate Bread",
            "images": "https://i.postimg.cc/90GhRVrP/inspirasi-resep-kue-20201126-190804-0.jpg",
            "description": "Rolled chocolate bread.",                    
            "content": "Croisant look alike chocolate bread.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"breads"
        },
        {
            "_id": "15",
            "title": "Kiwi Macaron",
            "images": "https://i.postimg.cc/0yXLNrVR/kiwi-macaron.jpg",
            "description": "Kiwi flavour meringue.",                    
            "content": "Sweet meringue with kiwi taste and kiwi ganache.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"macarons"
        },
        {
            "_id": "16",
            "title": "Korean Bread",
            "images": "https://i.postimg.cc/MTm5vFzM/korean-garlic-bread.jpg",
            "description": "Bread with cheese and bacon.",                    
            "content": "Bread with melted cheese, beef bacon, and parsley.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"breads"
        },
        {
            "_id": "17",
            "title": "Peanut Cookies",
            "images": "https://i.postimg.cc/7Y9LmMZ3/kue-kacang.jpg",
            "description": "Cookies with peanut taste.",                    
            "content": "Cookies that contain best peanut butter, flour, eggs and other secret ingredients. Made by professional chef with love.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"cookies"
        },
        {
            "_id": "18",
            "title": "Lavender Mango",
            "images": "https://i.postimg.cc/9XvPc2d8/lavender-mango.jpg",
            "description": "Layers of creamy lavender and mango mousse",                    
            "content": "This cake made of layer of crust with premium butter, lavender mouse, and mango mousse.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"cakes"
        },
        {
            "_id": "19",
            "title": "Lemon Macaron",
            "images": "https://i.postimg.cc/NMZXG8H9/lemon-macaron.jpg",
            "description": "Lemon flavour meringue.",                    
            "content": "Sweet meringue with lemon taste and lemon ganache.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"macarons"
        },
        {
            "_id": "20",
            "title": "Leopard Tarte",
            "images": "https://i.postimg.cc/MpGp4Mnh/leopard-tarte.jpg",
            "description": "Tarte with leopard pattern.",                    
            "content": "Tarte with chocolate sauce and vanilla mousse.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"tartes"
        },
        {
            "_id": "21",
            "title": "Kate Tongue",
            "images": "https://i.postimg.cc/T3hT0zSx/lidah-kucing.jpg",
            "description": "Chocolate cookies",                    
            "content": "Cookies with chocolate flavour.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"cookies"
        },
        {
            "_id": "22",
            "title": "Match Tarte",
            "images": "https://i.postimg.cc/1RpXNZxY/match-tarte.jpg",
            "description": "Tarte with white chocolate match.",                    
            "content": "Tarte with white chocolate match shape and vanilla custard.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"tartes"
        },
        {
            "_id": "23",
            "title": "Webbing Bread",
            "images": "https://i.postimg.cc/sgJ5PZtq/resep-kue-ibu-20201126-191055-0.jpg",
            "description": "Webbing shape bread.",                    
            "content": "Plain webbing shape bread.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"breads"
        },
        {
            "_id": "24",
            "title": "Oreo Doughnut",
            "images": "https://i.postimg.cc/wjzhskbD/resep-kue-ibu-20201126-191316-0.jpg",
            "description": "Doughnut covered with crushed oreo.",                    
            "content": "Doughnut covered with vanilla glazed and crushed oreo.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"breads"
        },
        {
            "_id": "25",
            "title": "Taro Bread",
            "images": "https://i.postimg.cc/yNZs4Fsr/taro-bread.jpg",
            "description": "Knitted taro bread.",                    
            "content": "Knitted taro bread.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"breads"
        },
        {
            "_id": "26",
            "title": "Yoghurt Oatmeal",
            "images": "https://i.postimg.cc/NjPjwsTL/yoghurt-oatmeal.jpg",
            "description": "Yoghurt oatmeal tarte",                    
            "content": "Tarte made of oatmeal crust, filled with yoghurt cream.",
            "price": 1,
            "offer":"",
            "count": 1,
            "category":"tartes"
        },
        
    ])
    
    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    },[])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
