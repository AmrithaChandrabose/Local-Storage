function login(){
    const username= document.getElementById('uname').value
    console.log(username);
    localStorage.setItem("uname",username)
    window.location="home.html"
    

}