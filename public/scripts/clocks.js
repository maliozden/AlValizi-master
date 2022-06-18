
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

var getistanbulTime = function(){
    document.getElementById("istanbulTime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Turkey',timeStyle:'medium',hourCycle:'h24'})
}
getistanbulTime();
setInterval(getistanbulTime,1000);

var getparisTime= function(){
    document.getElementById("parisTime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Europe/Paris',timeStyle:'medium',hourCycle:'h24'})
}
getparisTime();
setInterval(getparisTime,1000);

var getLondonTime = function(){
    document.getElementById("londonTime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h24'})
}
getLondonTime();
setInterval(getLondonTime,1000);

var getnewyorkTime = function(){
    document.getElementById("newyorkTime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/New_york',timeStyle:'medium',hourCycle:'h24'})
}
getnewyorkTime();
setInterval(getnewyorkTime,1000);

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