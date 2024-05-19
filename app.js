let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Филадельфия Лайт',
        name1:'Сыр, огурец, лосось, рис, нори',

        image: '1.JPG',
        price: 450
    },
    {
        id: 2,
        name: 'Филадельфия классик',
        name1:'Сыр, огурец, лосось, рис, нори',
        image: '2.WEBP',
        price: 550
    },
    {
        id: 3,
        name: 'Филадельфия Люкс',
        name1:'Сыр, лосось, рис, нори',
        image: '3.JPG',
        price: 700
    },
    {
        id: 4,
        name: 'Калифорния с крабом',
        name1: 'Майонез, краб, огурец, масаго, рис',
        image: '4.PNG',
        price: 470
    },
    {
        id: 5,
        name: 'Калифорния с креветкой',
        name1:'Авокадо, майонез, креветка, огурец, масаго, рис',
        image: '5.WEBP',
        price: 490
    },
    {
        id: 6,
        name: 'Калифорния с лососем',
        name1: 'Майонез, лосось, огурец, масаго, рис',
        image: '6.JPG',
        price: 460
    },
    {
        id: 7,
        name: 'Калифорния с угрем',
        name1: 'Майонез, угорь, огурец, масаго, рис',
        image: '7.JPG',
        price: 480
    },
    {
        id: 8,
        name: 'Канада',
        name1: 'Сыр, огурец, угорь, лосось, рис',
        image: '8.JPG',
        price: 590
    },
    {
        id: 9,
        name: 'Филадельфия  с угрем',
        name1: 'Майонез, угорь, огурец, масаго, рис',
        image: '9.JPG',
        price: 555
    },
    {
        id: 10,
        name: 'Филадельфия с крабом',
        name1: 'Сыр, огурец, лосось, краб, рис',
        image: '10.JPG',
        price: 555
    },
    {
        id: 11,
        name: 'Филадельфия с креветкой',
        name1: 'Сыр, огурец, лосось, креветка, рис',
        image: '11.JPG',
        price: 555
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="title">${value.name1}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice =  0 ;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText ="Всего : "+ totalPrice +  " руб ";
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}