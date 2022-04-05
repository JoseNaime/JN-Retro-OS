class Cursor{
    static instance = null;

    constructor(){
        this.x = 0;
        this.y = 0;

        if (Cursor.instance == null) {
            Cursor.instance = this;
        }

        document.addEventListener('mousemove', (e) => {
            this.x = e.clientX;
            this.y = e.clientY;
        });
    }

    static getInstance(){
        if(Cursor.instance == null){
            Cursor.instance = new Cursor();
        }
        return Cursor.instance;
    }

    getPosition(){
        return {
            x: this.x,
            y: this.y
        }
    }
}

export default Cursor;