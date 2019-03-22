


window.addEventListener("scroll", function() {
    let world = document.getElementById("world");
    world.style.transform = "rotate("+(window.pageYOffset/4)+"deg)";
});

function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

