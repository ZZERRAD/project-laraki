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


//SendForm

function sendForm() {
    console.log("////////// 0 //////////");
    event.preventDefault();
    console.log("////////// 1 //////////");
    $('#feedback').html('');
    console.log("////////// 2 //////////");
    setTimeout(function() {
        // Get data
      var data = {
          /*'entry.1281023424': $('#formLastName').val(), 
        'entry.1340476213': $('#formFirstName').val(),
        'entry.1457020554': $('#formCity').val(),
        'entry.1113169894': $('#formPhone').val(),
        'entry.932219397': $('#formAge').val(),
        */
        'entry.1281023424': $('#form-last-name').val(),
        'entry.1340476213': $('#form-first-name').val(),
        'entry.1457020554': $('#form-city').val(),
        'entry.1113169894': $('#form-phone').val(),
        'entry.932219397' : $('#form-age').val(),
        'entry.1043652161': $('#form-motivation').val()
      };
          
      // Validate form
      var formSuccess = true;
      Object.keys(data).forEach(function(key, index) {
        if (!data[key]) {
          formSuccess = false;
          $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
        }
      });
  
      if (formSuccess) {
        // Send request
        $.ajax({
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSfVcYGAY6pBqbcgr85aYboEAv9FGL-QSBtY_e-Vrew-asXoKw/formResponse',
          type: 'POST',
          crossDomain: true,
          dataType: "xml",
          data: data,
          success: function(jqXHR, textStatus, errorThrown) {
            console.log('Enter on success');
            $('#feedback').html('<label class="text-success">Message sent!</label>');
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log('Enter on error');
            $('#feedback').html('<label class="text-success">Message sent!</label>');
          }
        });
      }
    }, 300);
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








