const menuBtn = document.getElementById("menu-button");
const nav = document.getElementById("nav");
const navCenter = nav.getElementsByClassName("list-link").item(0);
const navRight = nav.getElementsByClassName("nav-button").item(0);

menuBtn.onclick = () => {
  if (navCenter.getAttribute("style")) {
    navCenter.removeAttribute("style");
  } else {
    navCenter.setAttribute("style", "display:none;");
  }
  if (navRight.getAttribute("style")) {
    navRight.removeAttribute("style");
  } else {
    navRight.setAttribute("style", "display:none;");
  }
};
