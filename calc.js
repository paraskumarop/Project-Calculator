let screen=document.getElementById('screen');
console.log(screen);
let buttons=document.querySelectorAll('button');
console.log(buttons);
let screenValue=0;
for(element of buttons){
    element.addEventListener('click',(e)=>{
       let buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="C"){
            screenValue="";
            screen.value=screenValue; 
        }
        else if(buttonText=="Enter"){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}

