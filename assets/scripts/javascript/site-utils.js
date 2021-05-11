window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    document.getElementById("nav-brand").height = 30;
    document.getElementById("nav-header").style.display = "none";
    
  } else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("nav-brand").height = 80 - document.body.scrollTop;
    document.getElementById("nav-header").style.display = "none";
      }
  
  
  else {

    document.getElementById("navbar").style.height = "";
    document.getElementById("nav-brand").height = 80;
     document.getElementById("nav-header").style.display = "";
  }
}

