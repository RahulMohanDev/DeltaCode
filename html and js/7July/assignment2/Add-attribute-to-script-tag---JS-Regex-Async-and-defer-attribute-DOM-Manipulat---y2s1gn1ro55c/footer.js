function addYear() {
    var year = new Date().getFullYear();
    var footer = document.getElementById("footer");
    footer.innerHTML += " " + year;
}
  
addYear();
  