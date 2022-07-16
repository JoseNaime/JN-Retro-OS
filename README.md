# JN Retro OS
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

This project is an emulation of a retro non-existing OS (Operative System), which had as 
inspiration the [Macintosh](https://history-computer.com/macintosh-by-apple-complete-history-of-mac-computers/#:~:text=The%20first%20Macintosh%20was%20introduced,line%20interface%20of%20its%20predecessors.) interface.

## How to Use It
The project is running in GitHub pages, so you can access it in the following link:
https://josenaime.github.io/JN-Retro-OS/

## Features
##### Development
* The Web OS is based on [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/css3_intro.asp)
* Logic was made with [JavaScript](https://www.w3schools.com/js/js_intro.asp) and [jQuery](https://jquery.com/) framework.

##### Core Functions
* [Single page](https://en.wikipedia.org/wiki/Single-page_application) application
* [Cross-platform](https://en.wikipedia.org/wiki/Cross-platform_application) 
  application, so it can be used in any device.

##### Controllers/Managers
All this files can be found in `src/js/` folder.
* `AppsManager`: manages the apps' functionality.
* `WidnowManager`: manages the windows' functionality (drag, focus, close, etc). and 
* `App`: represents an app and links a window (by ID) to it.
* `Window`: represents the information of a window and handles the WindowManager callbacks 
  _**(logic of drag, focus, close, etc. Is stored here)**_.
* `Cursor`: Static class that represents the cursor position.

##### Apps
  * **Settings** - Change the background, main color and cursor icon.
  * **Calculator** - Calculate basic mathematica operations.
