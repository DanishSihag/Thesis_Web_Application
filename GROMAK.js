var express = require('express')
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mysqlp = require('mysql');
var session = require('express-session');

mysqlp.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "thesis_data"
})

var app = express();

app.use(express.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(8080);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"secret"}))


function isItemPresent(cart, id){
  for(let i = 0; i < cart.length; i++){
    if(cart[i].id == id){
      return true;
    }
  }
  return false;
}

function totalPrice(cart,req){
  total = 0;
  for(let i = 0; i <cart.length; i++){
    total = total + (cart[i].price * cart[i].quantity);
  }

  req.session.total = total;
  return total;
}

app.get('/', function(req,res) {

  res.render('pages/GROMAK');
});

app.post('/open_vegetables', function(req,res){

    var con = mysqlp.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "thesis_data"
    })

    con.query("SELECT * FROM vegetables_fruits", (err,result) =>{

      res.render('pages/vegetables_fruits',{result:result});
    })

});

app.post('/open_juices', function(req,res){

    var con = mysqlp.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "thesis_data"
    })

    con.query("SELECT * FROM juices_colddrinks", (err,result) =>{

      res.render('pages/juices',{result:result});
    })

});

app.post('/go_to_cart', function(req,res){
  var cart = req.session.cart;
  var total = req.session.total;
  var id = req.body.id;

  totalPrice(cart, req);
  res.redirect('/shopping_cart');
});

app.post('/add_to_cart', function(req,res){

  var id = req.body.id
  var name = req.body.name;
  var tag = req.body.tag;
  var price = req.body.price;
  var quantity = req.body.quantity;
  var image = req.body.image;
  var product = {id:id, name:name, tag:tag, price:price, quantity:quantity, image:image};

  if(req.session.cart){
    var cart = req.session.cart;

    if(!isItemPresent(cart, id)){ /* isItemPresent() is the boolean function */
      cart.push(product);
    }
  }else{
      req.session.cart = [product];
      var cart = req.session.cart;
    }

  totalPrice(cart,req);
  //return to cart page
  res.redirect('/shopping_cart');

});

app.get('/shopping_cart',function(req,res){

  var cart = req.session.cart;
  var total = req.session.total;

  res.render('pages/shopping_cart', {cart:cart, total:total});
});

app.post('/remove_product',function(req,res){

  var id = req.body.id;
  var cart = req.session.cart;

  for(let i = 0; i < cart.length; i++){
    if(cart[i].id == id){
      cart.splice(i,1);
    }
  }

  //new total
  totalPrice(cart, req);
  res.redirect('/shopping_cart');

});

app.post('/edit_product_quantity', function(req,res){

  var id = req.body.id;
  var quantity = req.body.quantity;
  var increase_btn = req.body.increment;
  var decrease_btn = req.body.decrement;

  var cart = req.session.cart;

  if(increase_btn){
    for(i = 0; i < cart.length; i++){
      if(cart[i].id == id){
        if(cart[i].quantity > 0){
          cart[i].quantity = parseInt(cart[i].quantity) + 1;
        }
      }
    }
  }

  if(decrease_btn){
    for(i = 0; i < cart.length; i++){
      if(cart[i].id == id){
        if(cart[i].quantity > 1){
          cart[i].quantity = parseInt(cart[i].quantity) - 1;
        }
      }
    }
  }

  totalPrice(cart,req);
  res.redirect('/shopping_cart');

});


app.get('/search', function(req,res){
  var name = req.query.name;

  var con = mysqlp.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "thesis_data"
  })

  con.query("SELECT * from vegetables_fruits where name LIKE '%"+name+"%'", (err,result) =>{

    res.render('pages/searchVegetables',{result:result});

    })
  })

  app.get('/checkout', function(req,res){
    var total = req.session.total;
    res.render('pages/checkout',{total:total});
  })

  app.post('/place_order', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var city = req.body.city;
    var address = req.body.address;

    var cost = req.session.total;
    var date = new Date();
    var products_ids = "";

    /*var cart = req.session.cart;*/

    var con = mysqlp.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "thesis_data"
    })

    var cart = req.session.cart;
    for(let i = 0; i < cart.length; i++){
      products_ids = products_ids + "," + cart[i].id;
    }

    con.connect((err) => {
      if(err){
        console.log(err)
      }else{
        var query = "INSERT INTO orders(cost, name, email, city, address, phone, date, products_ids) VALUES ? ";
        var values = [
          [cost, name, email, city, address, phone, date, products_ids]
        ];

        con.query(query, [values], (err, result) => {
          res.redirect('/payment');
        })
      }
    })

  })


app.get('/payment', function(req,res){
  var cart = req.session.cart;
  var total = req.session.total;
  res.render('pages/payment', {total: total, cart: cart});
})
