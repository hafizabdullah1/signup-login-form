const alluser  = JSON.parse(localStorage.getItem("data")) || [];
// const previous = JSON.parse(localStorage.getItem("previous")) || [];

const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const prsn = {
        email: emailInp.value.trim(),
        password: passwordInp.value.trim()
    };

    // previous.push(prsn);
    // localStorage.setItem("previous", JSON.stringify(previous));

    const foundedUser = alluser.find(user =>
        user.email === prsn.email && user.password === prsn.password
    );

    // console.log("foundedUser:", foundedUser);
    

    if (foundedUser) {
        alert(" Welcome back!");
        emailInp.value = "";
        passwordInp.value = "";
        localStorage.setItem("currentUser", JSON.stringify(foundedUser))
        window.location.href = "./welcome.html";
    } else {
        alert("Invalid login");
    }
});



