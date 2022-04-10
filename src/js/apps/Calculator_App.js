class Calculator_App {
    constructor() {
        this.isFloat = false;
        this.currOperation = []
        this.currNumber = []

        this.display = document.querySelector('#calculator-display');

        $('.calculator-button').each((index,button) => {
            const value = button.innerText;
            button.addEventListener('click', () => {
                this.handleButtonClick(value);
            })
        });
    }

    clearNumber(){
        this.currNumber = [];
        this.isFloat = false;
        this.displayResult('');
    }

    updateDisplay(){
        this.display.innerText = this.currNumber.join('');
    }

    displayResult(value){
        this.display.innerText = value;
    }

    showResult(){
        this.currOperation.push(Number(this.currNumber.join('')));
        this.clearNumber();
        this.displayResult(eval(this.currOperation.join(' ')));
    }

    addOperation(value){
        this.currOperation.push(Number(this.currNumber.join('')));
        this.clearNumber()
        this.currOperation.push(value);
    }

    clearCalculator(){
        this.currOperation = [];
        this.clearNumber();
        this.displayResult('');
    }

    handleButtonClick(value) {
        if (value.match(/[0-9]|\./)) {
            if (value === '.' && !this.isFloat) {
                this.isFloat = true;
                this.currNumber.push(value);
            } else if (value !== '.') {
                this.currNumber.push(value);
            }
            this.updateDisplay();
        } else if (value.match(/\+|\-|\*|\//)){
            this.addOperation(value)
        } else if (value === 'C'){
            this.clearCalculator();
        } else if (value === '='){
            this.showResult();
        }
    }
}

export default Calculator_App;