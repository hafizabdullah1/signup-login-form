const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const alluser = JSON.parse(localStorage.getItem("data")) || [];

  const user = {};
  inputs.forEach((input) => {
    user[input.name] = input.value.trim();
  });

  if (!user.name || !user.email || !user.password) {
    alert("❌ Please fill all fields.");
    return;
  }

  const alreadyExist = alluser.find((usr) => usr.email === user.email);
  if (alreadyExist) {
    alert("🫡 👆 Email already registered. Please login.");
    return;
  }

  alluser.push(user);
  localStorage.setItem("data", JSON.stringify(alluser));

  alert("Signup successful! Please login.");
  window.location.href = "./index.html";
});
