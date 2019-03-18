


window.addEventListener("scroll", function() {
    let world = document.getElementById("world");
    console.log("running")
    world.style.transform = "rotate("+window.pageYOffset+"deg)";
    world.style.top = "50%";
});

