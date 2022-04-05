import Cursor from "./Cursor.js";

class _Window{
    isOpened = false;
    isGrabbed = false;
    elementHtml = null;
    isFocused = false;

    grabbedInterval = null
    anchorPos = {x:0,y:0};
    currPos = {x:0,y:0};
    grabPos = {x:0,y:0};

    constructor(elementHtml){
        this.elementHtml = elementHtml;
        this.id = elementHtml.id;
        this.name = this.id.split('-')[0];
        this.setInitPosition();

        this.elementHtml.classList.add("window-hide");

        // set windows-close click event
        this.elementHtml.querySelector(".window-close").addEventListener("click",()=>{
            this.close();
        });
    }

    close(){
        if (!this.isOpened) return;
        this.isOpened = false;
        this.elementHtml.classList.add("window-hide");
    }

    open(){
        if (this.isOpened) return;
        this.isOpened = true;
        this.elementHtml.classList.remove("window-hide");
    }

    initDrag(){
        this.isGrabbed = true

        this.setAnchorPos(Cursor.getInstance().getPosition())
        this.grabPos = {
            x: this.currPos.x - this.anchorPos.x,
            y: this.currPos.y - this.anchorPos.y
        }
    }

    endDrag(){
        // Stop interval to drag window
        this.isGrabbed = false

        // Stop interval to drag window
        clearInterval(this.grabbedInterval)
    }

    dragWindow(){
        const {x, y} = Cursor.getInstance().getPosition();
        this.currPos.x = Number(this.elementHtml.style.left.toString().replace('px',''))
        this.currPos.y = Number(this.elementHtml.style.top.toString().replace('px',''))
        this.elementHtml.style.left = x + this.grabPos.x + 'px';
        this.elementHtml.style.top = y + this.grabPos.y + 'px';
    }

    setInitPosition(){
        // Get center of window and assign to elementHtml style
        const documentHeight = $(document).height();
        const documentWidth = $(document).width();

        this.elementHtml.style.left = (documentWidth/2) - (this.elementHtml.offsetWidth/2) + 'px';
        this.elementHtml.style.top = (documentHeight/2) - (this.elementHtml.offsetHeight/2) + 'px';

        this.currPos.x = Number(this.elementHtml.style.left.toString().replace('px',''))
        this.currPos.y = Number(this.elementHtml.style.top.toString().replace('px',''))
    }

    setAnchorPos({x,y}) {
        this.anchorPos = {x,y};
    }
}

export default _Window;