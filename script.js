let string = "";
let memory = 0; // Initialize memory variable
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            string = eval(string);
            document.querySelector('.input').value = string;
        } else if (value === 'C') {
            string = "";
            document.querySelector('.input').value = string;
        } else if (value === 'm+') {
            // Add displayed value to memory
            memory += parseFloat(string || 0); // Converts string to number
            string = "";
            document.querySelector('.input').value = memory; // Display memory value
        } else if (value === 'm-') {
            // Subtract displayed value from memory
            memory -= parseFloat(string || 0); // Converts string to number
            string = "";
            document.querySelector('.input').value = memory; // Display memory value
        } else {
            string += value;
            document.querySelector('.input').value = string;
        }
    });
});
