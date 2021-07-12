//array for cart
var data = {
  "total": 0,
  "rows": []
};
var totalCost = 0;

$(function() {
  //grid
  $('#cartcontent').datagrid({
    singleSelect: true
  });

});
var name;
var price;
var size;
var sizeText;
var colour;
var chosenColour;
//this is for setting the size to the selected one and passing it to the addToCart function
function setSizes(name, price) {
  var Name = name;
  var Price = price;
  //assign variable to selection list
  size = document.getElementById("sizes");
  //get the text value of the selected item
  sizeText = size.options[size.selectedIndex].text;
  if (sizeText == "Size") {
    //stops people from adding o cart without selecting a size
    alert("Please enter a size!");
    return false;
  }
  setColor();
  //alert(color);
  //alert(chosenColour);
  //takes all the variables to the addToCart() function
  addToCart(Name, Price, sizeText, chosenColour);
}

function setColor() {
  //performs the same as the size
  colour = document.getElementById("colours");
  chosenColour = colour.options[colour.selectedIndex].text;
}

function addToCart(name, price, size, colour) {
  function add() {
    //draws table
    for (var i = 0; i < data.total; i++) {
      var row = data.rows[i];
      if (row.size == size) {
        if (row.colour == colour) {
          //adds one to the quantity if the item has the same size and colour
          row.quantity += 1;
          return;
        }
      }
    }
    data.total += 1;
    //pushes all variables into the array
    data.rows.push({
      //name of field:variable
      name: name,
      colour: colour,
      size: size,
      quantity: 1,
      price: price
    });
  }


  add();

  //automatically update the price
  totalCost += price;
  //load data grid from jquery ui
  $('#cartcontent').datagrid('loadData', data);
  //update totals in the html
  $('p.total').html('Total: £' + totalCost);

  //add the data array to localstorage in a string
  localStorage.setItem('cart', JSON.stringify(data));
  console.log(data);
  //set local storage value to teh new json string
}

function displayCart() {
  if (localStorage && localStorage.getItem('cart')) {
    console.log(localStorage.getItem('cart'));
    //gets the stringified 'cart' and recreates the original array
    data = JSON.parse(localStorage.getItem('cart'));
    console.log(data);
    //loads data to table
    $('#cartcontent').datagrid('loadData', data);
    for (var i = 0; i < data.total; i++) {
      var row = data.rows[i];
      totalCost += (row.price * row.quantity);
    }
    $('p.total').html('Total: £' + totalCost);
    ///update  .total html() or text()

  }
}
