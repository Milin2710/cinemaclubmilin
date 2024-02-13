function showlinks() {
    var y = document.getElementById("responsivenav");
    if (y.style.display === "block") {
      y.style.display = "none"
    } else {
      y.style.display = "block"
    }
}
function tohome(){
    const h = document.getElementById("top");
    const rect = h.getBoundingClientRect();
    const scrollPosition = window.scrollY + rect.top - 60;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
function toevents(){
    const h = document.getElementById("top2");
    const rect = h.getBoundingClientRect();
    const scrollPosition = window.scrollY + rect.top - 60;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
function tomovies(){
    const h = document.getElementById("top3");
    const rect = h.getBoundingClientRect();
    const scrollPosition = window.scrollY + rect.top - 60;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
function toteam(){
    const h = document.getElementById("top4");
    const rect = h.getBoundingClientRect();
    const scrollPosition = window.scrollY + rect.top - 60;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}