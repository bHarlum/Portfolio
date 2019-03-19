


window.addEventListener("scroll", function() {
    let world = document.getElementById("world");
    console.log("running")
    world.style.transform = "rotate("+(window.pageYOffset/4)+"deg)";
    world.style.top = "50%";
});

