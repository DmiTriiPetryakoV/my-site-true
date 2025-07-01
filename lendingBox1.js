$(function (){
	var scrollTo = function($node){
		$('html,body').animate({
			scrollTop: $node.offset().top
		},400)
	}
$('#header a').click(function() {
		var nodea = this;
		var $a = $(nodea);
		var linkHash = nodea.hash;
		var $target = $(linkHash);
		scrollTo($target)
	})
})
var scrollTo = function($node){
 $('html, body').stop().animate({
 scrollTop: $node.offset().top
 }, 400);
};
const box = document.getElementById('lending-box')
let svet = document.getElementById('svet');
const header = document.getElementById('header')
const headerA = document.getElementsByClassName('header-a')
const ava = document.getElementById('avatar')
const logo = document.getElementById('logo')
const lendingTwo = document.getElementById('lending-box2')
const card = document.getElementsByClassName('card')
const boxstrong = document.getElementsByClassName('boxstrong')
const i = document.getElementsByClassName('important-i')
const list = document.getElementsByClassName('header__list')
const box3 = document.getElementById('lending-box3')
const footer = document.getElementById('footer')
const projekt = document.getElementsByClassName('projekt')
const card2 = document.getElementsByClassName('card-projeck')
const a = document.getElementsByClassName('a-box')
const burgerA = document.getElementsByClassName('a-burger')
svet.addEventListener('click', function () {
      this.classList.toggle('active');
        box.classList.toggle('active-box')
        header.classList.toggle('active-header')
		document.body.classList.toggle('active-body')
		ava.classList.toggle('active-ava')
		svet.classList.toggle('active-svet')
		logo.classList.toggle('active-logo')
		lendingTwo.classList.toggle('active-boxTwo')
		box3.classList.toggle('active-box3')
		footer.classList.toggle('active-footer')
		for(let z = 0;z < burgerA.length;z++){
			burgerA[z].classList.toggle('active-burger-a')
		}
		for(let q = 0;q < a.length;q++){
			a[q].classList.toggle('active-a')
		}
		for(let p = 0;p < card2.length;p++){
			card2[p].classList.toggle('active-card2')
		}
		for(let r = 0;r < projekt.length;r++){
			projekt[r].classList.toggle('active-projekt')
		}
		for(let w = 0;w < list.length;w++){
			list[w].classList.toggle('active-list')
		}
		for(let n = 0;n < i.length;n++){
			i[n].classList.toggle('active-i')
		}
			for(let b = 0;b < boxstrong.length; b++){
		boxstrong[b].classList.toggle('active-strong')
		}
				for(let x =0;x < card.length; x++){
			card[x].classList.toggle('active-card')
		}
		for (let i = 0; i < headerA.length; i++) {
 headerA[i].classList.toggle('activeA');
 }
})
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('burger-toggle');
  const menu = document.querySelector('.header__list');
  const body = document.body
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      menu.style.display = 'flex';
	  body.classList.add('no-scroll')
    } else {
      menu.style.display = 'none';
	  body.classList.remove('no-scroll')
	 
    }
  });
});