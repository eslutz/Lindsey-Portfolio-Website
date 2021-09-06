window.onload = function copyrightWithCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = `&copy; ${year}.&nbsp;`;
  console.log(`current year: ${year}`);
};
