function showPopup() {
    console.log("button clicked");
    document.getElementsByClassName("popup")[0].style.display = "flex";
}

function closePopup() {
    console.log("closing the popup");
    document.getElementsByClassName("popup")[0].style.display = "none";    
}

function sendEmail() {
    console.log("we are sending an email")
    Email.send({
        Host : "smtp.gmail.com",
        Username : "put the sender mail here",
        Password : "the password here",
        To : 'margoumsaad3@gmail.com',
        From : "put the sender mail here",
        Subject : "This is just a test",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

$('.carousel').carousel()

$(function(){
    $('#carouselExampleControls.slide').carousel({
        interval: false
    });
});


$(function(){
    $('#transformation-slides.slide').carousel({
        interval: 2000
    });
});



// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   console.log("The length of myslides is ")
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
// }




document.addEventListener("DOMContentLoaded", function () {

    /* navbar change when scroll */
    window.addEventListener('scroll', function () {
        var lines = Array.from(document.getElementsByClassName('lines'));
        if (window.scrollY > 20) {
            lines.forEach(line => { line.style.background = '#000' })
            document.getElementById('navbar_top').classList.add('nav-scroll');
            document.getElementsByClassName('logo1').item(0).style.display = 'none';
            document.getElementsByClassName('logo2').item(0).style.display = 'inherit';
            document.getElementsByClassName('helmet1').item(0).style.display = 'none';
            document.getElementsByClassName('helmet2').item(0).style.display = 'inherit';
        } else {
            lines.forEach(line => { line.style.background = '#fff' })
            document.getElementById('navbar_top').classList.remove('nav-scroll');
            document.getElementsByClassName('logo1').item(0).style.display = 'inherit';
            document.getElementsByClassName('logo2').item(0).style.display = 'none';
            document.getElementsByClassName('helmet1').item(0).style.display = 'inherit';
            document.getElementsByClassName('helmet2').item(0).style.display = 'none';
        }
    });

    /* scroll to top when reload */
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    window.onload = function () {
        window.scrollTo(0, 0);
    }

    /* responsive slide shows */
    // var x = window.matchMedia("(min-width: 991px)")
    // var y = window.matchMedia("()")
    // function myFunction(x) {
    //     if (x.matches) {
    //         $(document).ready(function () {
    //             $("#lightSlider").lightSlider({
    //                 loop: false,
    //                 item: 3
    //             });
    //             $(document).ready(function () {
    //                 $("#lightSlider2").lightSlider({
    //                     loop: false,
    //                     item: 2
    //                 });
    //             });
    //         });
    //     } else {
    //         $(document).ready(function () {
    //             $("#lightSlider").lightSlider({
    //                 loop: false,
    //                 item: 1
    //             });
    //             $(document).ready(function () {
    //                 $("#lightSlider2").lightSlider({
    //                     loop: false,
    //                     item: 1
    //                 });
    //             });
    //         });
    //     }
    // }
    // myFunction(x)
    // x.addListener(myFunction)

});








