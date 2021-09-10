window.onload = function copyrightWithCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = `&copy; ${year}.&nbsp;`;
};

function showMenu() {
  let x = document.getElementById("nav_links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function makeActive(newActiveSection) {
  let currentSection = document.getElementById(newActiveSection);
  let workPageSections = document.querySelectorAll(".work-page-information");

  workPageSections.forEach((element) => {
    if (element.id === currentSection.id) {
      currentSection.classList.add("work-page-active");
    } else {
      element.classList.remove("work-page-active");
    }
  });
}
