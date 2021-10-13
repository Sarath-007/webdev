let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');

let screenvalue=" "
for(item in buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log('the button is', buttontext);
        if(buttontext=='X')
        {
            buttontext='*'
            screen.value+=buttontext;
            screenvalue+=screen.value;

        }
        else if(buttontext=='=')
        {
            screen.value=eval(screenvalue);
        }
        else if(buttontext=='C')
        {
            screen.value=" "
            screenvalue=screen.value;
        }
        else
        {
            screen.value+=buttontext;
            screenvalue+=screen.value;
        }

        
        
    })
}