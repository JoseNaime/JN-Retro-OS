import _Window from './Window.js';

class WindowsManager{
    windowFocused = null;
    static windows = {};
    constructor(){
        if (WindowsManager.instance == null) {
            WindowsManager.instance = this;
        }

        $(".window").each((index, element) => {
            const _window = new _Window(element);
            const windowHeader = $('#' + _window.id).children(".window-header")
            WindowsManager.windows[_window.name] = _window

            // Focus Window on click
            element.addEventListener("click", () => {
                this.focusWindow(_window);
            });

            // Start dragging on mousedown
            windowHeader.on("mousedown", () => {
                this.grabWindow(_window);
            });

            // Stop dragging on mouseup
            windowHeader.on("mouseup", () => {
                this.dropWindow(_window);
            })
        })
        console.log(WindowsManager.windows)

    }

    static getInstance(){
        if(WindowsManager.instance == null){
            WindowsManager.instance = new WindowsManager();
        }
        return WindowsManager.instance;
    }

    getWindows(){
        return WindowsManager.windows;
    }

    getWindow(name){
        return WindowsManager.windows[name];
    }

    focusWindow(_window){
        if (this.windowFocused != null && this.windowFocused !== _window){
            this.windowFocused.isFocused = false;
            this.windowFocused.elementHtml.classList.remove("focused");
        }
        this.windowFocused = _window;
        _window.isFocused = true;
        _window.elementHtml.classList.add("focused");
    }

    grabWindow(_window){
        // If window is not focused, focus it
        this.focusWindow(_window);

        // Set variables before starting drag
        _window.initDrag();

        // Start interval to drag window
        _window.grabbedInterval = setInterval(() => {
            if (_window.isGrabbed){
                _window.dragWindow(_window);
            }
        }, 1);
    }

    dropWindow(_window){
        _window.endDrag()

    }
}

export default WindowsManager;