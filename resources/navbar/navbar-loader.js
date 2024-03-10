const nav = document.querySelector('.navbar')
fetch('/resources/navbar/navbar.txt')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML+=data
})