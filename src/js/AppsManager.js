import App from './App.js';
import Settings_App from './apps/Settings_App.js';
import Calculator_App from './apps/Calculator_App.js';

class AppsManager{
    constructor(){
        this.apps = [];

        $(".app").each((index, element) => {
            this.apps[element.id] = {app: new App(element)}

            switch(this.apps[element.id].app.name){
                case "settings":
                    this.apps[element.id].app_function = new Settings_App();
                    break;
                case "calculator":
                    this.apps[element.id].app_function = new Calculator_App();
                    break;
            }
        });
            console.log(this.apps);
    }
}

export default AppsManager;