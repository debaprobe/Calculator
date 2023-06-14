let string = '';
let input = document.querySelector('input')

let buttons = document.querySelectorAll("button")

//Array From => will create an array of buttons and For each buttons we add a event listener click and an event 'e' function which will target the innerHTML

Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == "="){
                string = eval(string);  //eval function evaluates the string into number
                input.value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string= "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1)
            input.value = string
        }

        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string   
        }
        
    })
})