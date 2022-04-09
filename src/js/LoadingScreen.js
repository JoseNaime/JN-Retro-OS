class LoadingScreen{
    constructor(){
        this.loadingScreen = document.getElementById("loadingScreen");
        this.loadingBar = document.getElementById("loadingBar");
        this.loadingBar.style.width = "0%";
    }
}

export default LoadingScreen;