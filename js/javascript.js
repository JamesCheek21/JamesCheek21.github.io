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
