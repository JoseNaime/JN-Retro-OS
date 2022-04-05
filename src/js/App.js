import WindowsManager from "./WindowsManager.js";

class App{
    constructor(elementHtml){
        this.elementHtml = elementHtml;
        this.id = elementHtml.id;
        this.name = elementHtml.id.split('-')[0];

        this.relatedWindow = WindowsManager.getInstance().getWindow(this.name)

        // Open window if app is clicked
        this.elementHtml.addEventListener('click', () => {
            this.relatedWindow.open();
        });
    }
}

export default App;