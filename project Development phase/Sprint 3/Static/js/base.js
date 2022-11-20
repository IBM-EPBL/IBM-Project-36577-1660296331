function myFunction() {
    var x = document.getElementById("myTopnavigation");
    if (x.className === "topnavigation") {
        x.className += " responsive";
    } else {
        x.className = "topnavigation";
    }
}
  
document.getElementById('logout').onclick = function logout() {
    localStorage.removeItem('C_ID');
    location.href = '/login?msg=Logged+Out';
}