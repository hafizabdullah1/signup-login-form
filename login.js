const alluser  = JSON.parse(localStorage.getItem("data")) || [];
const previous = JSON.parse(localStorage.getItem("previous")) || [];

const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const prsn = {
        email: emailInp.value.trim(),
        password: passwordInp.value.trim()
    };

    previous.push(prsn);
    localStorage.setItem("previous", JSON.stringify(previous));

    const found = alluser.find(user =>
        user.email === prsn.email && user.password === prsn.password
    );

    if (found) {
        alert(" Welcome back!");
        emailInp.value = "";
        passwordInp.value = "";
        window.location.href = "./welcome.html";
    } else {
        alert("Invalid login");
    }
});



