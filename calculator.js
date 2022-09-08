let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            case 'X²':
                display.innerText = eval(display.innerText*display.innerText);
                break;
            case '%':
                display.innerText = eval(display.innerText/100);
                break;
            case '+/-':
                display.innerText += '-';
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
});