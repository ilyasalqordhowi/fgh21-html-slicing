// pop up create event
const overlay = document.getElementsByClassName("content-create");
const addBtn = document.getElementById("button");
const form = overlay.item(0).getElementsByTagName("form").item(0);
addBtn.addEventListener("click", () => {
  overlay.item(0).classList.toggle("hide");
});
form.addEventListener("submit", () => {
  overlay.item(0).classList.toggle("hide");
});
