class Settings_App {
    constructor() {
        this.backgroundIndex = 0;
        this.backgrounds = [
            {
                name: 'Dots 4px',
                url: './src/img/backgrounds/dots_4px.png',
                preview: './src/img/backgrounds/previews/dots_4px_prev.png'
            },
            {
                name: 'Dots 6px',
                url: './src/img/backgrounds/dots_6px.png',
                preview: './src/img/backgrounds/previews/dots_6px_prev.png'

            },
            {
                name: 'Dots 8px',
                url: './src/img/backgrounds/dots_8px.png',
                preview: './src/img/backgrounds/previews/dots_8px_prev.png'
            }
        ]

        this.setBackground(this.backgroundIndex)

        // set previous background button
        $('#btn-next-background').click(() => {
            this.nextBackground();
        })
        // set next background button
        $('#btn-prev-background').click(() => {
            this.prevBackground();
        })

    }

    setBackground(index) {
        const backgroundElement = $('#background');
        const currentBackground = this.backgrounds[index];
        backgroundElement.css('background-image', `url(${currentBackground.url})`);
        $('#background-preview').css('background-image', `url(${currentBackground.preview})`);
        $('#background-name').html(currentBackground.name);
    }

    nextBackground() {
        this.backgroundIndex++;
        console.log(this.backgrounds.length);
        if (this.backgroundIndex >= this.backgrounds.length) {
            this.backgroundIndex = 0;
        }
        this.setBackground(this.backgroundIndex);
    }

    prevBackground() {
        this.backgroundIndex--;
        if (this.backgroundIndex < 0) {
            this.backgroundIndex = this.backgrounds.length - 1;
        }
        this.setBackground(this.backgroundIndex);
    }

}

export default Settings_App;