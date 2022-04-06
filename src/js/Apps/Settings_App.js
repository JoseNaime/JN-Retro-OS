import CONSTANTS from "../CONSTANTS.js";

class Settings_App {
    constructor() {
        this.backgroundIndex = 0;
        this.setBackground()

        // --- PATTERN ---
        // set previous background button
        $('#btn-next-background').click(() => {
            this.nextBackground();
        })
        // set next background button
        $('#btn-prev-background').click(() => {
            this.prevBackground();
        })

        this.dynamicColorElements = $('*:not(.no-dynamic, html)')

        // --- COLOR 1
        // set next color_1 button
        this.color1Index = 0;
        $('#btn-next-color_1').click(() => {
            this.nextColor(1);
        })
        // set prev color_1 button
        $('#btn-prev-color_1').click(() => {
            this.prevColor(1);
        })

        this.setColor(1);


    }

    setBackground() {
        const backgroundElement = $('#background');
        const currentBackground = CONSTANTS.BACKGROUNDS[this.backgroundIndex];
        backgroundElement.css('background-image', `url(${currentBackground.url})`);
        $('#background-preview').css('background-image', `url(${currentBackground.preview})`);
        $('#background-name').html(currentBackground.name);
    }

    setColor(section){
        const colorPrev =  $('#color_' + section + '-preview');
        let currentColor;

        if (section === 1){
            currentColor = CONSTANTS.LIGHT_COLORS[this.color1Index];
            // Only set Background
            $('#color_1-name').html(currentColor.name);
            this.dynamicColorElements.css('background-color', `${currentColor.hex}`);
        } else {
            currentColor = CONSTANTS.DARK_COLORS[this.color2Index];
            // Set border, color and fill
            this.dynamicColorElements.css('border-color', `${currentColor.hex}`);
            this.dynamicColorElements.css('color', `${currentColor.hex}`);
        }
        console.log(currentColor)
        colorPrev.css('background-color', currentColor.hex);

    }

    nextColor(section){
        if (section === 1){
            this.color1Index++;
            if (this.color1Index >= CONSTANTS.LIGHT_COLORS.length) {
                this.color1Index = 0;
            }
        }else{
            this.color2Index++;

            if (this.color2Index >= CONSTANTS.DARK_COLORS.length) {
                this.color2Index = 0;
            }
        }
        this.setColor(section)
    }

    prevColor(section){
        if (section === 1){
            this.color1Index--;
            if (this.color1Index < 0) {
                this.color1Index = CONSTANTS.LIGHT_COLORS.length - 1;
            }
        }else{
            this.color2Index--;
            if (this.color2Index < 0) {
                this.color2Index = CONSTANTS.DARK_COLORS.length - 1;
            }
        }
        this.setColor(section)
    }

    nextBackground() {
        this.backgroundIndex++;
        if (this.backgroundIndex >= CONSTANTS.BACKGROUNDS.length) {
            this.backgroundIndex = 0;
        }
        this.setBackground();
    }

    prevBackground() {
        this.backgroundIndex--;
        if (this.backgroundIndex < 0) {
            this.backgroundIndex = CONSTANTS.BACKGROUNDS.length - 1;
        }
        this.setBackground();
    }

}

export default Settings_App;