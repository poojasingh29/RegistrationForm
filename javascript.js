function datetime(){
    const current=new Date();

    const dateopt={
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const ourdate=current.toLocaleDateString('en-US',dateopt);
    document.getElementById('Dates').textContent=ourdate;

    const ctime={
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    const ourtime=current.toLocaleTimeString('en-US',ctime);
    document.getElementById('Time').textContent=ourtime;
}

function validation(){
    const name=document.getElementById('name').value;
    const namechar=/^[a-zA-Z]+$/.test(name);
    if(!namechar){
        alert("Enter valid name");
    }

    const last=document.getElementById('last').value;
    const lastchar=/^[a-zA-Z]+$/.test(last);
    if(!lastchar){
        alert("Enter valid last name");
        event.preventDefault();
    }

    const pass1=document.getElementById('password1').value;
    const pass2=document.getElementById('password2').value;
    if(pass1.length>=6 && pass1.length<=20){
        if(!(pass1==pass2)){
            alert("Password and confirm password is not same");
            event.preventDefault();
        }
    }
    else{
        alert("Password length should be between 6-20");
        event.preventDefault();
    }

    const mob=document.getElementById('mob').value;
    const pattern1=/^\d{3}-\d{3}-\d{4}/.test(mob);
    const pattern2=/^\d{3}.\d{3}.\d{4}/.test(mob);
    const pattern3=/^\d{3} \d{3} \d{4}/.test(mob);
    if(!(pattern1 || pattern2 || pattern3)){
        alert("Enter mobile number in any of the given format : \n XXX-XXX-XXXX\n XXX.XXX.XXXX\n XXX XXX XXXX");
        event.preventDefault();
    }

    const dob=document.getElementById('dob').value;
    if(/^\d{2}-\d{2}-\d{4}$/.test(dob)){
        const [day,month,year]=dob.split('-').map(Number);
        const ddob=new Date(year,month-1,day);
        if(!(ddob.getFullYear()===year && ddob.getMonth()===month-1 && ddob.getDate()===day)){
            alert("Enter valid date");
            event.preventDefault();
        }
    }
    else{
        alert("Enter dob in DD-MM-YYYY format");
        event.preventDefault();
    }

    const email=document.getElementById('email').value;
    const emailpattern=/^[^@][a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
    if(!(emailpattern)){
        alert("Email address is invalid \n @should not be 1st charcater \n '.' must be at least one character away '@'\n Should have at least one '@' and '.'");
        event.preventDefault();
    }
}

let timer;

function start(){
    timer=setTimeout(() =>{
        alert("3 minutes have passed");
        document.getElementById('myform').reset();
    },180000);
}

function stop(){
    if(timer){
        clearTimeout(timer);
    }
}

document.addEventListener('DOMContentLoaded',datetime);
setInterval(datetime,1000);

document.addEventListener('DOMContentLoaded',()=>{
    start();
});

document.getElementById('myform').addEventListener('submit',(event)=>{
    stop();
    validation();
})