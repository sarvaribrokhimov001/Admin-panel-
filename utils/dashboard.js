const logout = document.querySelector(".logout");


const Logout = ()=> {
 
    localStorage.removeItem("token");
    window.location.href = "../pages/login.html";
};
logout.addEventListener('click' , Logout);