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
        id: 12,
        name: 'Бонито запеченный',
        name1:'Сыр, авокадо, лосось терияки, рис',

        image: '12.JPG',
        price: 470
    },
    {
        id: 13,
        name: 'Вулкан',
        name1:'Сыр, краб, креветка, спайси-соус, рис',
        image: '13.JPG',
        price: 490
    },
    {
        id: 14,
        name: 'Домбай',
        name1:'Сыр, краб, креветка, рис',
        image: '14.webp',
        price: 555
    },
    {
        id: 15,
        name: 'Запеченный с креветкой',
        name1: 'Сыр, огурец, креветка, масаго, замес сырный, рис',
        image: '15.JPG',
        price: 480
    },
    {
        id: 16,
        name: 'Запеченный с лососем',
        name1:'Сыр, огурец, угорь, замес сырный, рис',
        image: '16.PNG',
        price: 555
    },
    {
        id: 17,
        name: 'Запеченный с угрем',
        name1: 'Сыр, огурец, лосось, масаго, замес сырный',
        image: '17.PNG',
        price: 590
    },
    {
        id: 18,
        name: 'Запеченный лосось терияки',
        name1: 'Лосось терияки, сыр, огурец, спайси-соус, сырный замес, рис',
        image: '18.JPG',
        price: 555
    },
    {
        id: 19,
        name: 'Запеченный с крабом',
        name1: 'Сыр, краб, замес сырный, рис',
        image: '19.PNG',
        price: 550
    },
    {
        id: 20,
        name: 'Запеченный с курицей',
        name1: 'Сыр, огурец, курица, замес сырный, рис',
        image: '20.JPG',
        price: 450
    },
    {
        id: 21,
        name: 'Запеченный с мидиями',
        name1: 'Спайси-соус, помидор, мидии, сырный замес, рис',
        image: '21.JPG',
        price: 460
    },
    
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