let individualItems = [
  {
    name: "Oranges",
    tag: "oranges",
    price: 175,
    inCart: 0
  },
  {
    name: "Bananas",
    tag: "bananas",
    price: 100,
    inCart: 0
  },
  {
    name: "Strawberries",
    tag: "strawberries",
    price: 200,
    inCart: 0
  },
  {
    name: "Grapes",
    tag: "grapes",
    price: 350,
    inCart: 0
  },
  {
    name: "Apples",
    tag: "apples",
    price: 80,
    inCart: 0
  },
  {
    name: "Watermelon",
    tag: "watermelon",
    price: 1100,
    inCart: 0
  },
  {
    name: "Blueberries",
    tag: "blueberries",
    price: 1500,
    inCart: 0
  },
  {
    name: "Lemons",
    tag: "lemons",
    price: 200,
    inCart: 0
  },
  {
    name: "Peaches",
    tag: "peaches",
    price: 150,
    inCart: 0
  },
  {
    name: "Pineapple",
    tag: "pineapple",
    price: 1000,
    inCart: 0
  },
  {
    name: "Cherries",
    tag: "cherries",
    price: 500,
    inCart: 0
  },
  {
    name: "Raspberries",
    tag: "raspberries",
    price: 1600,
    inCart: 0
  },
  {
    name: "Pear",
    tag: "pear",
    price: 100,
    inCart: 0
  },
  {
    name: "Mango",
    tag: "mango",
    price: 450,
    inCart: 0
  },
  {
    name: "Plums",
    tag: "plums",
    price: 80,
    inCart: 0
  },
  {
    name: "Guava",
    tag: "guava",
    price: 80,
    inCart: 0
  },
  {
    name: "Apricot",
    tag: "apricot",
    price: 200,
    inCart: 0
  },
  {
    name: "Papaya",
    tag: "papaya",
    price: 600,
    inCart: 0
  },
  {
    name: "Dragonfruit",
    tag: "dragonfruit",
    price: 1800,
    inCart: 0
  },
  {
    name: "Kiwi",
    tag: "kiwi",
    price: 250,
    inCart: 0
  },
  {
    name: "PassionFruit",
    tag: "passionfruit",
    price: 200,
    inCart: 0
  },
  {
    name: "Lychee",
    tag: "lychee",
    price: 500,
    inCart: 0
  },
  {
    name: "Durian",
    tag: "durian",
    price: 800,
    inCart: 0
  },
  {
    name: "Jackfruit",
    tag: "jackfruit",
    price: 1200,
    inCart: 0
  },
  {
    name: "Potatoes",
    tag: "potatoes",
    price: 70,
    inCart: 0
  },
  {
    name: "Tomatoes",
    tag: "tomatoes",
    price: 150,
    inCart: 0
  },
  {
    name: "Onions",
    tag: "onions",
    price: 60,
    inCart: 0
  },
  {
    name: "Carrot",
    tag: "carrot",
    price: 55,
    inCart: 0
  },
  {
    name: "Bell Pepper",
    tag: "bellpepper",
    price: 275,
    inCart: 0
  },
  {
    name: "Broccoli",
    tag: "broccoli",
    price: 400,
    inCart: 0
  },
  {
    name: "Cucumber",
    tag: "cucumber",
    price: 80,
    inCart: 0
  },
  {
    name: "Lettuce",
    tag: "lettuce",
    price: 600,
    inCart: 0
  },
  {
    name: "Mushrooms",
    tag: "mushrooms",
    price: 550,
    inCart: 0
  },
  {
    name: "Corn",
    tag: "corn",
    price: 150,
    inCart: 0
  },
  {
    name: "Garlic",
    tag: "garlic",
    price: 80,
    inCart: 0
  },
  {
    name: "Spinach",
    tag: "spinach",
    price: 750,
    inCart: 0
  },
  {
    name: "Green Beans",
    tag: "greenbeans",
    price: 750,
    inCart: 0
  },
  {
    name: "Cabbage",
    tag: "cabbage",
    price: 400,
    inCart: 0
  },
  {
    name: "Sweet Potatoes",
    tag: "sweetpotatoes",
    price: 120,
    inCart: 0
  },
  {
    name: "Cauliflower",
    tag: "cauliflower",
    price: 375,
    inCart: 0
  },
  {
    name: "Eggplant",
    tag: "eggplant",
    price: 300,
    inCart: 0
  },
  {
    name: "Pumpkin",
    tag: "pumpkin",
    price: 500,
    inCart: 0
  },
  {
    name: "Peas",
    tag: "peas",
    price: 300,
    inCart: 0
  },
  {
    name: "Lady Finger",
    tag: "ladyfinger",
    price: 300,
    inCart: 0
  },
  {
    name: "Coriander",
    tag: "coriander",
    price: 850,
    inCart: 0
  },
  {
    name: "Parsley",
    tag: "parsley",
    price: 300,
    inCart: 0
  },
  {
    name: "Ginger",
    tag: "ginger",
    price: 300,
    inCart: 0
  },
  {
    name: "Green Chilli",
    tag: "greenchilli",
    price: 65,
    inCart: 0
  },
]

let addButton = document.querySelectorAll('.btn_addToCart');

for(let i = 0; i < addButton.length; i++){     //selection of all add to cart buttons on screen
  addButton[i].addEventListener('click', () => {
    itemNumberInCart(individualItems[i]);
    finalPrice(individualItems[i]);
  })
}

function setItemNumber(){                  //cart numbers written alongside symbol
  let productNumbers = localStorage.getItem('itemNumberInCart');

  if(productNumbers >= 0){
    document.querySelector('.cart span').textContent = productNumbers;  //span text content = number written alongside symbol
  }
}

function itemNumberInCart(product, action){

  let productNumbers = localStorage.getItem('itemNumberInCart');
  productNumbers = parseInt(productNumbers);

  let prodsInCart = localStorage.getItem('itemsInCart');
  prodsInCart = JSON.parse(prodsInCart);

  if(action == "decrement"){
    localStorage.setItem('itemNumberInCart', productNumbers - 1);
    document.querySelector('.cart span').textContent = productNumbers - 1;
  } else if(productNumbers){
    localStorage.setItem('itemNumberInCart', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
  } else{
    localStorage.setItem('itemNumberInCart', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}

function setItems(product){

  let prodsInCart = localStorage.getItem('itemsInCart');
  prodsInCart = JSON.parse(prodsInCart);

  if(prodsInCart != null){
    if(prodsInCart[product.tag] == undefined){
      prodsInCart = {
        ...prodsInCart,
        [product.tag]: product
      }
    }

    prodsInCart[product.tag].inCart += 1;
  }
  else{
    product.inCart = 1;
    prodsInCart = {
      [product.tag]: product
    }
  }

  localStorage.setItem("itemsInCart", JSON.stringify(prodsInCart));
}

function finalPrice(product, action){
  let totalCartPrice = localStorage.getItem('finalPrice');
  if(action == "decrement"){
    totalCartPrice = parseInt(totalCartPrice);
    localStorage.setItem('finalPrice', totalCartPrice - product.price);
  } else if(totalCartPrice != null){
    totalCartPrice = parseInt(totalCartPrice);
    localStorage.setItem("finalPrice",totalCartPrice + product.price);
  }else{
    localStorage.setItem("finalPrice", product.price);
  }
}

function pageDisplay(){
  let prodsInCart = localStorage.getItem("itemsInCart");
  prodsInCart = JSON.parse(prodsInCart);
  let itemDiv = document.querySelector(".products");
  let totalCartPrice = localStorage.getItem('finalPrice');

  if(prodsInCart && itemDiv){             //to check that it is only created on the cart page
    itemDiv.innerHTML = '';
    Object.values(prodsInCart).map(item => {
      itemDiv.innerHTML += `
      <div class="product" style="display: inline-block; border-bottom: 0.1rem solid lightgrey;">
        <i class="fa fa-close" style="font-size:2rem; color:green; cursor:pointer;"></i>
        <img class="img-fluid" src="../images/inside_main/vegetables_fruits/${item.tag}.jpg" width="180rem" height="180rem" style="object-fit:cover;padding:2rem;">
        <span>${item.name}</span>
      </div>
      <div class="price" style="display: inline-block; font-size:1.18rem; border-bottom: 0.1rem solid lightgrey;">
        HUF ${item.price}
      </div>
      <div class="quantity" style="display: inline-block; font-size:1.3rem; border-bottom: 0.1rem solid lightgrey;">
        <i class="fa fa-arrow-circle-down decrement" style="font-size:1.5rem; cursor:pointer"></i>
        <span>${item.inCart}</span>
        <i class="fa fa-arrow-circle-up increment" style="font-size:1.5rem; cursor:pointer"></i>
      </div>
      <div class="total" style="display: inline-block; font-size:1.18rem; border-bottom: 0.1rem solid lightgrey;">
        HUF ${item.inCart * item.price}
      </div>
      `
    });

    itemDiv.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">
        Basket Total
      </h4>
      <h4 class="basketTotal">
        HUF ${totalCartPrice}
    </div>
    `;

  }
  crossBtn();
  updateAmount();
}

function crossBtn(){
  let crossBtn = document.querySelectorAll('.product i');
  let selectedItem;
  let productNumbers = localStorage.getItem('itemNumberInCart');
  let prodsInCart = localStorage.getItem('itemsInCart');
  prodsInCart = JSON.parse(prodsInCart);
  let totalCartPrice = localStorage.getItem('finalPrice');

  for(let i = 0; i < crossBtn.length; i++){
    crossBtn[i].addEventListener('click',() => {
      selectedItem = crossBtn[i].parentElement.textContent.replace(/ /g, '').trim().toLowerCase();  //lowercase so that it is equal to tag; g to remove spaces

      localStorage.setItem('itemNumberInCart', productNumbers - prodsInCart[selectedItem].inCart);
      localStorage.setItem('finalPrice', totalCartPrice - (prodsInCart[selectedItem].price * prodsInCart[selectedItem].inCart));

      delete prodsInCart[selectedItem];
      localStorage.setItem('itemsInCart', JSON.stringify(prodsInCart));

      pageDisplay();
      setItemNumber();
    })
  }
}

function updateAmount(){
  let decrementButton = document.querySelectorAll('.decrement');
  let incrementButton = document.querySelectorAll('.increment');
  let itemsInCart = 0;
  let itemSelected = "";
  let prodsInCart = localStorage.getItem('itemsInCart');
  prodsInCart = JSON.parse(prodsInCart);

  for(let i = 0; i < decrementButton.length; i++){
    decrementButton[i].addEventListener('click', () => {
      itemsInCart = decrementButton[i].parentElement.querySelector('span').textContent;
      itemSelected = decrementButton[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

      if(prodsInCart[itemSelected].inCart > 1){
        prodsInCart[itemSelected].inCart -= 1;
        itemNumberInCart(prodsInCart[itemSelected], "decrement");
        finalPrice(prodsInCart[itemSelected], "decrement");
        localStorage.setItem('itemsInCart', JSON.stringify(prodsInCart));
        pageDisplay();
      }
    })
  }

  for(let i = 0; i < incrementButton.length; i++){
    incrementButton[i].addEventListener('click', () => {
      itemsInCart = incrementButton[i].parentElement.querySelector('span').textContent;
      itemSelected = decrementButton[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

        prodsInCart[itemSelected].inCart += 1;
        itemNumberInCart(prodsInCart[itemSelected]);
        finalPrice(prodsInCart[itemSelected]);
        localStorage.setItem('itemsInCart', JSON.stringify(prodsInCart));
        pageDisplay();
    })
  }
}

setItemNumber();
pageDisplay();
