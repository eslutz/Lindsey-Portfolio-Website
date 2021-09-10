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
  let selectedSection = document.getElementById(newActiveSection);
  let workPageSections = document.querySelectorAll(".work-page-information");

  workPageSections.forEach((element) => {
    if (element.id === selectedSection.id) {
      selectedSection.classList.add("work-page-active");
    } else {
      element.classList.remove("work-page-active");
    }
  });
}
