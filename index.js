
const buttons=document.querySelectorAll('.buttons button');
const display=document.querySelector('.display');
buttons.forEach(button=>{
   button.addEventListener('click', clickedButton);
});
   function clickedButton(event){
       const buttonValue=event.target.innerText;
       //var output;
       console.log(buttonValue);
       if(buttonValue==="=")
       {
        display.value=eval(display.value);
       }
       else if(buttonValue==="DEL")
       {
         display.value=display.value.slice(0,-1);
       }
       else if(buttonValue==="AC")
       {
         display.value="";
       }
       else if(buttonValue==="%")
       {
         display.value=display.value/100;
       }
       else
       {
        display.value+=buttonValue;
       }
      
   }


   