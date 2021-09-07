window.onload = function copyrightWithCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = `&copy; ${year}.&nbsp;`;
};

function showMenu() {
  var x = document.getElementById("nav_links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
