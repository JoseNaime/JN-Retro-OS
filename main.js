import Time from './src/js/Time.js';
import WindowsManager from './src/js/WindowsManager.js';
import AppsManager from './src/js/AppsManager.js';
import Cursor from './src/js/Cursor.js';


class Main{
    constructor() {
        this.cursor = new Cursor();
        this.time = new Time();
        this.windowsManager = new WindowsManager();
        this.appsManager = new AppsManager();
    }
}

const main = new Main();