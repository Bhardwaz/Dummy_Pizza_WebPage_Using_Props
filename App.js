import React from "react";
import ReactDOM  from "react-dom/client";

const resList =  
        {
          "id": 1,
          "name": "Margherita",
          "description": "Cheesy Classic",
          "subtitle": "99* 225+ 395^",
          "image": "https://pizzaonline.dominos.co.in/assets/osc/ABAAA/images/products/originals/margherita.jpg",
          "price": 0,
          "categoryID": 6,
          "categoryType": 0,
          "categoryName": "Simply Veg",
}
const root = ReactDOM.createRoot(document.getElementById('root'))

const Header = () =>
        <div className="navbar"> 
            <div className="logo_container"><img alt="chef-logo" src="https://cdn2.vectorstock.com/i/1000x1000/52/61/pizza-logo-emblem-for-fast-food-restaurant-vector-38325261.jpg"/></div>
            <div className="search">
                <input id="input" placeholder="Search For Your Pizza" />
            </div> 
            <ul className="navbar_Link">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> 
            </div>

const PizzaCard = ({imgUrl, name, cuisines, price}) => {
      return <div className="pizza_card">
       <img alt="pizza" src={imgUrl} />
       <h1>{name}</h1>
       <h3>{cuisines}</h3>
       <div className="cart">
       <h2>₹{price}</h2>
       <div><button>ADD TO CART</button> </div>  
        </div>
      </div>
}

const Body = () => <div className="pizza_container">
    <PizzaCard imgUrl="https://images.dominos.co.in/new_margherita_2502.jpg" name="Margherita" cuisines="Classic delight with 100% real mozzarella cheese" price="239" />

    <PizzaCard imgUrl="https://images.dominos.co.in/new_peppy_paneer.jpg" name="Peppy Paneer" cuisines="Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika" price="459" />

    <PizzaCard imgUrl="https://images.dominos.co.in/new_cheese_n_corn.jpg" name="Cheese n Corn" cuisines="A delectable combination of sweet & juicy golden corn" price="379" />

    <PizzaCard imgUrl="https://images.dominos.co.in/farmhouse.png" name="Farmhouse" cuisines="Delightful combination of onion, capsicum, tomato & grilled mushroom" price="459" />

    <PizzaCard imgUrl="https://images.dominos.co.in/new_veg_extravaganza.jpg" name="Veg Extravaganza" cuisines="Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese" price="549" />

    <PizzaCard imgUrl="https://images.dominos.co.in/new_veggie_paradise.jpg" name="Veggie Paradise" cuisines="The awesome foursome! Golden corn, black olives, capsicum, red paprika" price="459" />

    <PizzaCard imgUrl="https://images.dominos.co.in/new_chicken_sausage.jpg" name="Chicken Sausage" cuisines="American classic! Spicy, herbed chicken sausage on pizza" price="369" />

    <PizzaCard imgUrl="https://images.dominos.co.in/BRD0030.png" name="Paneer Tikka Stuffed Garlic Bread" cuisines="Freshly Baked Stuffed Garlic Bread with Cheese, Onion and Paneer Tikka fillings. Comes with a dash of Basil" price="169" />

</div>

const AppLayout = () => {
    return <div className="App">
      <Header/>
      <Body />
    </div>
}
root.render(<AppLayout />)


