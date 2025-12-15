const form = document.querySelector(".login__form");
const api = `https://fakestoreapi.com/auth/login`;

const handleSubmit = (e)=> {
    e.preventDefault();

    const username = form["username"].value.trim();
    const password = form["password"].value.trim();

    const user = {
      username : username,
      password : password
    };

    fetch(api , {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token;

        if(token) {
            localStorage.setItem("token" , token);
            alert("successfully validation");

            window.location.href = "../pages/dashboard.html";
        }
      });
     console.log(username , password);
};
  form.addEventListener("submit" , handleSubmit);