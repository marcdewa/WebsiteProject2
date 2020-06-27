$(function(){
 
  var $this = $('#slider');
  var slidesCont = $this.children('.slides-container');
  var slides = slidesCont.children('.slide');
  var pager = $this.children('.pager');
  var arrowsCont = $this.children('.arrows');
  var prevSlide = arrowsCont.children('.prev');
  var nextSlide = arrowsCont.children('.next');
  var slidesCount = slides.length;
  var currentSlide = slides.first();
  var currentSlideIndex = 1;
  

  var autoPlay = null;


  slides.not(':first').css('display', 'none');
  currentSlide.addClass('active');


  function fadeNext() {
      currentSlide.removeClass('active').fadeOut(700);
  
      if(currentSlideIndex == slidesCount) {
          currentSlide = slides.first();
          currentSlide.delay(500).addClass('active').fadeIn(700);
          currentSlideIndex = 1;
      } else {
          currentSlideIndex++;
          currentSlide = currentSlide.next();
          currentSlide.delay(500).addClass('active').fadeIn(700);
      }
  
      pager.text(currentSlideIndex+' / '+slidesCount);
  }
  
  function fadePrev() {
      currentSlide.removeClass('active').fadeOut(700);
  
      if(currentSlideIndex == 1) {
          currentSlide = slides.last();
          currentSlide.delay(500).addClass('active').fadeIn();
          currentSlideIndex = slidesCount;
      } else {
          currentSlideIndex--;
          currentSlide = currentSlide.prev();
          currentSlide.delay(500).addClass('active').fadeIn(700);
      }
  
      pager.text(currentSlideIndex+' / '+slidesCount);
  }


  $(nextSlide).click(function(e) {
      e.preventDefault();
      fadeNext();
      AutoPlay();
  });
  
  $(prevSlide).click(function(e) {
      e.preventDefault();
      fadePrev();
      AutoPlay();
  });
  
  AutoPlay();
})


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function validate()
	{
		var Username = document.getElementById('txtBoxUserName');
    var Email=document.getElementById('txtBoxMail');
    var Password = document.getElementById('LoginPassword');    
    var Address =document.getElementById('txtTextAreaAdd');
    var Qty = document.getElementById('nbCopies');
    var Basic = document.getElementById('rbTypeBasic');
    var Deluxe = document.getElementById('rbTypeDeluxe');
    var Gold = document.getElementById('rbTypeGold');
    var Ultimate = document.getElementById('rbTypeUltimate');
    var Agreement = document.getElementById('cbAgreementBox');

		if(Username.value == ""){
			alert('Name cannot be empty');
		}

    if(Email.value == ""){
			alert('Email cannot be empty');
		}

    if(Password.value == ""){
			alert('Password cannot be empty');
		}

    if(Qty.value <1){
      alert('Qty atleast must 1');
    }else if(Qty.value>10){
      alert('Qty cannot be more than 10');
    }

    if(Address.value == ""){
			alert('Address cannot be empty');
		}

		if(Basic.checked == false && Deluxe.checked == false && Gold.checked == false && Ultimate.checked == false){
			alert('Game type must be chosen');
		}

		if(Agreement.checked ==false){
			alert('Agreement must be checked');
		}
    


    // if(/street|Street/.test(Address.value)){
            
    // }else{alert("Address harus mengandung 'Street'")}
    // if (/^\w+*@\w+*(\.\w{2,3})+$/.test(Email.value))
    //         {
                
    //         }else {alert('Masukkan format email yang benar')

    // }
  }

