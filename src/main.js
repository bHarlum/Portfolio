// Populates the repo cards on the home section of page.
// Takes an array of repo names.

const Http = new XMLHttpRequest();
  const url='https://api.github.com/repos/bharlum/calculator';
  Http.open("GET", url);
  Http.send();
  Http.onload=()=>{
    obj = JSON.parse(Http.responseText);
      //Print your git data here
      //document.getElementById('git-card-list').innerHTML = obj["name"] + ": " + obj["html_url"];
      let ul = document.getElementById("git-card-list");
      //name of project:
      let li = document.createElement("li");
      li.setAttribute('id',obj["name"]);
      li.appendChild(document.createTextNode(obj["name"]));
      ul.appendChild(li);
      // project description:
      li = document.createElement("li");
      li.setAttribute('id',obj["name"] + "description");
      li.appendChild(document.createTextNode(obj["description"]));
      ul.appendChild(li);
      // project picture:
      //make background image an image of program.
  }

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

