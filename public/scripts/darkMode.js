const chk = document.getElementById('chk');
const nav1 = document.getElementById("nav1"); 

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    if(document.body.className.includes('dark')){
        nav1.className = "navbar navbar-expand-lg navbar-white bg-dark";
    }else{
        nav1.className = "navbar navbar-expand-lg navbar-dark bg-success";
    }
    
});