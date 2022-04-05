class Time{
    constructor(){
        setInterval(this.updateDateAndTime, 1000)
    }
    updateDateAndTime(){
        const dateOptions = {
            weekday: 'narrow',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        const date = new Date();
        const dateElement = $("#date");
        dateElement.text(date.toLocaleDateString('es-ES', dateOptions));
    }
}

export default Time;