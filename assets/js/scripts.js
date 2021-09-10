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

function makeActive(newActiveSection) {
  var currentSection = document.getElementById(newActiveSection);
  currentSection.classList.add("work-page-active");

  var vaDoeSection = document.getElementById("va_doe_section");
  var lettuceHelpSection = document.getElementById("lettuce_help_section");
  var movinstSection = document.getElementById("movist_section");
  var gradCertection = document.getElementById("grad_cert_section");

  switch (newActiveSection) {
    case "va_doe_section":
      lettuceHelpSection.classList.remove("work-page-active");
      movinstSection.classList.remove("work-page-active");
      gradCertection.classList.remove("work-page-active");
      break;
    case "lettuce_help_section":
      vaDoeSection.classList.remove("work-page-active");
      movinstSection.classList.remove("work-page-active");
      gradCertection.classList.remove("work-page-active");
      break;
    case "movist_section":
      lettuceHelpSection.classList.remove("work-page-active");
      vaDoeSection.classList.remove("work-page-active");
      gradCertection.classList.remove("work-page-active");
      break;
    case "grad_cert_section":
      lettuceHelpSection.classList.remove("work-page-active");
      vaDoeSection.classList.remove("work-page-active");
      movinstSection.classList.remove("work-page-active");
      break;
  }
}
