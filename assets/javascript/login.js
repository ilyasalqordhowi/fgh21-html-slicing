const form = document.getElementsByTagName("form").item(0);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  console.log(form);

  if (
    name === "ilyas" &&
    email === "ilyas@mail.com" &&
    password === "ilyas123"
  ) {
    window.alert("mantap lur");
    window.Location = "/profile.html";
  } else {
    window.alert("isi dulu bos!!!!!!!");
  }
  form.reset;
});
