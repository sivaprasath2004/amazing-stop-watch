let min=0; let count=0;
let sec=0;let hrs=0;
let btnop=document.getElementById("stop");
let btnre=document.getElementById("reset");
let btnst=document.getElementById("start");
let hr=document.getElementById('hours');
let mins=document.getElementById('minutes');
let secs=document.getElementById('seconds');
let ms=document.getElementById("millisecond");
btnst.addEventListener('click',function(){
    timer=true;
    stopWatch();
 });
btnre.addEventListener('click',function(){
    timer=false;
    stopWatch();
    hr.innerHTML='00';
    mins.innerHTML='00';  
    secs.innerHTML='00';
    ms.innerHTML='00';
    hrs=0;
    min=0;
    sec=0;
    count=0;
    hh.style.strokeDashoffset=314-(314*12)/12;
    mm.style.strokeDashoffset=314-(314*60)/60;
    ss.style.strokeDashoffset=314-(314*60)/60;
    me.style.strokeDashoffset=314-(314*100)/100;
 });
btnop.addEventListener('click',function(){
    timer=false;
    stopWatch();
 });
 function stopWatch(){
      if(timer){
        count++;
        if(count==100){
            sec++;
            count=0
        }
        if(sec==60){
            min++
            sec=0
        }
        if(min==60){
            hrs++
            min=0
            sec=0
        }
    let hrsst=hrs
    let minst=min
    let secst=sec
    let countst=count
    if(hrs<10){
        hrsst="0"+hrs
    }
    if(min<10){
        minst="0"+min
    }
    if(sec<10){
        secst="0"+sec
    }
    if(count<10){
      countst="0"+count
  }    
  hr.innerHTML=hrsst;
  mins.innerHTML=minst;
  secs.innerHTML=secst;
  ms.innerHTML=countst;
   hh.style.strokeDashoffset=314-(314*hrs)/12;
    mm.style.strokeDashoffset=314-(314*min)/60;
    ss.style.strokeDashoffset=314-(314*sec)/60;
    me.style.strokeDashoffset=314-(314*count)/100;
    setTimeout(stopWatch,8)
 }
 }

