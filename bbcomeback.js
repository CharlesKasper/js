const doc=doc;
let section=doc.querySelector("section img")
for (var i = 0; i < section.length; i++) {
    section[i].addEventListener("hover")
    function color() {
      section[i].style.color="#ff00ff"
    }
    
}
