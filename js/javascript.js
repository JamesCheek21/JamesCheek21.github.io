$(document).ready(function(){
	$('#icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('with--sidebar');
	});
	$('#site-cache').click(function(e){
		$('body').removeClass('with--sidebar');
	});
});
var index = 0;
/*$(function(){
	slideshow();
});*/
function slideshow() {
		var i;
		var slides = document.getElementsByClassName("slides");
		for (i = 0; i < slides.length; i++) {
			 slides[i].style.display = "none";
		}
		index++;
		if (index > slides.length) {index = 1}
		slides[index-1].style.display = "block";
		setTimeout(slideshow, 3000); // Change image every 2 seconds
}
function showHoodies()
{
	document.getElementById('hoodies').style.display = "block";
	document.getElementById('hats').style.display = "none";
	document.getElementById('accessories').style.display = "none";
	document.getElementById('skate').style.display = "none";
	document.getElementById('show').style.display = "block";
}
function showHats()
{
	document.getElementById('hoodies').style.display = "none";
	document.getElementById('hats').style.display = "block";
	document.getElementById('accessories').style.display = "none";
	document.getElementById('skate').style.display = "none";
	document.getElementById('show').style.display = "block";
}
function showAccess()
{
	document.getElementById('hats').style.display = "none";
	document.getElementById('hoodies').style.display = "none";
	document.getElementById('accessories').style.display = "block";
	document.getElementById('skate').style.display = "none";
	document.getElementById('show').style.display = "block";
}
function showSkate()
{
	document.getElementById('hats').style.display = "none";
	document.getElementById('accessories').style.display = "none";
	document.getElementById('hoodies').style.display = "none";
	document.getElementById('skate').style.display = "block";
	document.getElementById('show').style.display = "block";
}
function showAll()
{
	document.getElementById('hats').style.display = "block";
	document.getElementById('accessories').style.display = "block";
	document.getElementById('hoodies').style.display = "block";
	document.getElementById('skate').style.display = "block";
	document.getElementById('show').style.display = "none";
}
function showHoodieBlack()
{
	document.getElementById('hoodieBlack').style.display = "block";
	document.getElementById('hoodieBlue').style.display = "none";
	document.getElementById('hoodieGrey').style.display = "none";
	document.getElementById('hoodieLime').style.display = "none";
	document.getElementById('hoodieOrange').style.display = "none";
	document.getElementById('hoodieRed').style.display = "none";
}
function showHoodieBlue()
{
	document.getElementById('hoodieBlue').style.display = "block";
	document.getElementById('hoodieBlack').style.display = "none";
	document.getElementById('hoodieGrey').style.display = "none";
	document.getElementById('hoodieLime').style.display = "none";
	document.getElementById('hoodieOrange').style.display = "none";
	document.getElementById('hoodieRed').style.display = "none";
}
function showHoodieGrey()
{
	document.getElementById('hoodieGrey').style.display = "block";
	document.getElementById('hoodieBlack').style.display = "none";
	document.getElementById('hoodieBlue').style.display = "none";
	document.getElementById('hoodieLime').style.display = "none";
	document.getElementById('hoodieOrange').style.display = "none";
	document.getElementById('hoodieRed').style.display = "none";
}
function showHoodieLime()
{
	document.getElementById('hoodieLime').style.display = "block";
	document.getElementById('hoodieBlack').style.display = "none";
	document.getElementById('hoodieBlue').style.display = "none";
	document.getElementById('hoodieGrey').style.display = "none";
	document.getElementById('hoodieOrange').style.display = "none";
	document.getElementById('hoodieRed').style.display = "none";
}
function showHoodieOrange()
{
	document.getElementById('hoodieOrange').style.display = "block";
	document.getElementById('hoodieBlack').style.display = "none";
	document.getElementById('hoodieBlue').style.display = "none";
	document.getElementById('hoodieGrey').style.display = "none";
	document.getElementById('hoodieLime').style.display = "none";
	document.getElementById('hoodieRed').style.display = "none";
}
function showHoodieRed()
{
	document.getElementById('hoodieRed').style.display = "block";
	document.getElementById('hoodieBlack').style.display = "none";
	document.getElementById('hoodieBlue').style.display = "none";
	document.getElementById('hoodieGrey').style.display = "none";
	document.getElementById('hoodieLime').style.display = "none";
	document.getElementById('hoodieOrange').style.display = "none";
}
function showHoodieZipBlack(){
	document.getElementById('hoodiezipBlack').style.display = "block";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipGreen(){
	document.getElementById('hoodiezipGreen').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipGrey(){
	document.getElementById('hoodiezipGrey').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipNavy(){
	document.getElementById('hoodiezipNavy').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipOrange(){
	document.getElementById('hoodiezipOrange').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipPink(){
	document.getElementById('hoodiezipPink').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipPlum(){
	document.getElementById('hoodiezipPlum').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipRed(){
	document.getElementById('hoodiezipRed').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipWhite').style.display = "none";
}
function showHoodieZipWhite(){
	document.getElementById('hoodiezipWhite').style.display = "block";
	document.getElementById('hoodiezipBlack').style.display = "none";
	document.getElementById('hoodiezipGreen').style.display = "none";
	document.getElementById('hoodiezipGrey').style.display = "none";
	document.getElementById('hoodiezipNavy').style.display = "none";
	document.getElementById('hoodiezipOrange').style.display = "none";
	document.getElementById('hoodiezipPink').style.display = "none";
	document.getElementById('hoodiezipPlum').style.display = "none";
	document.getElementById('hoodiezipRed').style.display = "none";
}
function showBeanieBlack(){
	document.getElementById('beanieBlack').style.display = "block";
	document.getElementById('beanieOrange').style.display = "none";
	document.getElementById('beanieWhite').style.display = "none";
}
function showBeanieOrange(){
	document.getElementById('beanieOrange').style.display = "block";
	document.getElementById('beanieBlack').style.display = "none";
	document.getElementById('beanieWhite').style.display = "none";
}
function showBeanieWhite(){
	document.getElementById('beanieWhite').style.display = "block";
	document.getElementById('beanieOrange').style.display = "none";
	document.getElementById('beanieBlack').style.display = "none";
}
function showBeltRed(){
	document.getElementById('beltRed').style.display = "block";
	document.getElementById('beltTan').style.display = "none";
}
function showBeltTan(){
	document.getElementById('beltTan').style.display = "block";
	document.getElementById('beltRed').style.display = "none";
}
function showBlanketBlack(){
	document.getElementById('blanketBlack').style.display = "block";
	document.getElementById('blanketOrange').style.display = "none";
}
function showBlanketOrange(){
	document.getElementById('blanketOrange').style.display = "block";
	document.getElementById('blanketBlack').style.display = "none";
}
function showBoxersBlack(){
	document.getElementById('boxersBlack').style.display = "block";
	document.getElementById('boxersWhite').style.display = "none";
}
function showBoxersWhite(){
	document.getElementById('boxersWhite').style.display = "block";
	document.getElementById('boxersBlack').style.display = "none";
}
function showCapBlack()
{
	document.getElementById('capBlack').style.display = "block";
	document.getElementById('capBlue').style.display = "none";
	document.getElementById('capGrey').style.display = "none";
	document.getElementById('capLime').style.display = "none";
	document.getElementById('capRed').style.display = "none";
}
function showCapBlue()
{
	document.getElementById('capBlue').style.display = "block";
	document.getElementById('capBlack').style.display = "none";
	document.getElementById('capGrey').style.display = "none";
	document.getElementById('capLime').style.display = "none";
	document.getElementById('capRed').style.display = "none";
}
function showCapGrey()
{
	document.getElementById('capGrey').style.display = "block";
	document.getElementById('capBlack').style.display = "none";
	document.getElementById('capBlue').style.display = "none";
	document.getElementById('capLime').style.display = "none";
	document.getElementById('capRed').style.display = "none";
}
function showCapLime()
{
	document.getElementById('capLime').style.display = "block";
	document.getElementById('capBlack').style.display = "none";
	document.getElementById('capBlue').style.display = "none";
	document.getElementById('capGrey').style.display = "none";
	document.getElementById('capRed').style.display = "none";
}
function showCapRed()
{
	document.getElementById('capRed').style.display = "block";
	document.getElementById('capBlack').style.display = "none";
	document.getElementById('capBlue').style.display = "none";
	document.getElementById('capGrey').style.display = "none";
	document.getElementById('capLime').style.display = "none";
}
function showFuzzyHatGold(){
	document.getElementById('fuzzyhatGold').style.display = "block";
	document.getElementById('fuzzyhatRed').style.display = "none";
	document.getElementById('fuzzyhatWhite').style.display = "none";
}
function showFuzzyHatRed(){
	document.getElementById('fuzzyhatRed').style.display = "block";
	document.getElementById('fuzzyhatGold').style.display = "none";
	document.getElementById('fuzzyhatWhite').style.display = "none";
}
function showFuzzyHatWhite(){
	document.getElementById('fuzzyhatWhite').style.display = "block";
	document.getElementById('fuzzyhatGold').style.display = "none";
	document.getElementById('fuzzyhatRed').style.display = "none";
}
function showScarfBlack(){
	document.getElementById('scarfBlack').style.display = "block";
	document.getElementById('scarfNavy').style.display = "none";
	document.getElementById('scarfPink').style.display = "none";
	document.getElementById('scarfRed').style.display = "none";
}
function showScarfNavy(){
	document.getElementById('scarfNavy').style.display = "block";
	document.getElementById('scarfBlack').style.display = "none";
	document.getElementById('scarfPink').style.display = "none";
	document.getElementById('scarfRed').style.display = "none";
}
function showScarfPink(){
	document.getElementById('scarfPink').style.display = "block";
	document.getElementById('scarfBlack').style.display = "none";;
	document.getElementById('scarfNavy').style.display = "none";
	document.getElementById('scarfRed').style.display = "none";
}
function showScarfRed(){
	document.getElementById('scarfRed').style.display = "block";
	document.getElementById('scarfBlack').style.display = "none";
	document.getElementById('scarfNavy').style.display = "none";
	document.getElementById('scarfPink').style.display = "none";
}

function showWheelsGold(){
	document.getElementById('wheelsGold').style.display = "block";
	document.getElementById('wheelsRed').style.display = "none";
	document.getElementById('wheelsWhite').style.display = "none";
}
function showWheelsRed(){
	document.getElementById('wheelsRed').style.display = "block";
	document.getElementById('wheelsGold').style.display = "none";
	document.getElementById('wheelsWhite').style.display = "none";
}
function showWheelsWhite(){
	document.getElementById('wheelsWhite').style.display = "block";
	document.getElementById('wheelsGold').style.display = "none";
	document.getElementById('wheelsRed').style.display = "none";
}
function showTshirtBlack(){
	document.getElementById('tshirtBlack').style.display = "block";
	document.getElementById('tshirtWhite').style.display = "none";
}
function showTshirtWhite(){
	document.getElementById('tshirtWhite').style.display = "block";
	document.getElementById('tshirtBlack').style.display = "none";
}


var data = {"total":0,"rows":[]};
		var totalCost = 0;

		$(function(){
			//grid
			$('#cartcontent').datagrid({
				singleSelect:true
			});

		});
		var name;
		var price;
		var size;
		var sizeText;
		var colour;
		var chosenColour;
		function setSizes(name, price){
			var Name = name;
			var Price = price;
			size = document.getElementById("sizes");
			sizeText = size.options[size.selectedIndex].text;
			if(sizeText == "Size")
			{
				alert("Please enter a size!");
				return false;
			}
			setColor();
			//alert(color);
			//alert(chosenColour);
			addToCart(Name, Price, sizeText,chosenColour);
		}
		function setColor()
		{
			colour = document.getElementById("colours");
			chosenColour = colour.options[colour.selectedIndex].text;
		}

		console.log();
		function addToCart(name, price, size, colour){
			function add(){
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					if(row.size == size)
					{
						if(row.colour == colour)
						{
							row.quantity += 1;
							return;
						}
					}
				}
				data.total += 1;
				data.rows.push({
					//name of field:variable
					name:name,
					colour:colour,
					size:size,
					quantity:1,
					price:price
				});
			}


			add();

			totalCost += price;
			//load data grid from jquery ui
			$('#cartcontent').datagrid('loadData', data);
			//update totals in the html
			$('p.total').html('Total: £'+totalCost);
			// add to local storage
			//stringify js array object into json and log it

			localStorage.setItem('cart',JSON.stringify(data));
			console.log(data);
		//set local storage value to teh new json string
		}
		function displayCart(){
			if(localStorage && localStorage.getItem('cart')){
				console.log(localStorage.getItem('cart'));
				// console log localStorage.getItem('cart') value, you will see a long json string
				// parse json from stting into an array object
  			data=JSON.parse(localStorage.getItem('cart'));//change this
				console.log(data);
				$('#cartcontent').datagrid('loadData', data);
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					totalCost += (row.price * row.quantity);
				}
				$('p.total').html('Total: £'+totalCost);
							///update  .total html() or text()

				}
		}


var canvas;
var ctx;
function customiser(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	var white = new Image();
	white.src="assets/customiser/white.jpg";
	var black = new Image();
	black.src="assets/customiser/black.jpg";
	var boxlogo = new Image();
	boxlogo.src="assets/customiser/logo.png";
	var blacklogo = new Image();
	blacklogo.src="assets/customiser/blacklogo.jpg";

	canvas.width = white.width;
	canvas.height = white.height;

	//var black = document.getElementById("black");
	ctx.clearRect(0,0,525,500);

	$('#customcolour').on('change',function (){
		var ctmclr = document.getElementById('customcolour');
		var customColour = ctmclr.options[ctmclr.selectedIndex].text;

		if(customColour=="White")
		{
			ctx.drawImage(white,0,0);
		}
		if(customColour=="Black")
		{
			ctx.drawImage(black,0,0)
		}
		var logoselect = document.getElementById('logos').style.display="block";
  });
	$('input[type="radio"]').on('click',function(){
		var value =$(this).val();

		if(value==0)
		{
			ctx.drawImage(boxlogo, 200, 120);
		}
		if(value==1)
		{
			ctx.drawImage(blacklogo, 200, 120);
		}
		var finished = document.getElementById('finish').style.display = "block";
	});
}
