let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        string=eval(string);
        document.querySelector('input').value=string;

    }
    else if(e.target.innerHTML=='C'){
        string="";
        document.querySelector('input').value=string;
    }
    
    else{
        console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
})
})
// let string = "";
// let buttons = document.querySelectorAll('.button');

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         const buttonText = e.target.innerHTML;

//         if (buttonText === '=') {
//             try {
//                 string = eval(string);
//                 document.querySelector('input').value = string;
//             } catch (error) {
//                 document.querySelector('input').value = 'Error';
//                 string = '';
//             }
//         } else if (buttonText === 'C') {
//             string = "";
//             document.querySelector('input').value = string;
//         } else {
//             string += buttonText;
//             document.querySelector('input').value = string;
//         }
//     });
// });
