let c = document.getElementById("heading");

c.style.color = "Blue";

c.innerHTML = "Good evening";

let m = Math.round(Math.random() * 100);
function updateTime(){
    let d=new Date;
    document.getElementById("time").innerHTML=`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
}
setInterval(updateTime,1000);
