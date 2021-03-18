var ms=0;
var s=0;
 var min=0;
  var timer;
   var stopwatch=document.querySelector('.time');
   function start(){
       if(!timer){
           timer=setInterval(run ,10);
       }
   }
   function run(){
       stopwatch.textContent=min+':'+s+":"+ms;
       ms++;
       if(ms===10){
           ms=0;
           s++;
       }
       if(s==60){
           s=0; min++;

       }
   }
   function end(){
   

       clearInterval(timer);
       timer=false;
       stopwatch.textContent='00:00:00';
    
       
       
       
   }
   function stop(){
       clearInterval(timer);
       timer=false;
   }