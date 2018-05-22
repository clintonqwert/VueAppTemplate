# VueAppTemplate

Base template for HTML5/CSS3 app using latest ES2017 JavaScript on Vue.js framework.   
This HTML5 App template is ES2015+ compliant, will run in all browsers natively without the need for any "compiler" or 3rd party pre-processing solution (Babel, Node, Broswerify, etc NOT required).

Modern browsers continue to evolve and extend the basic functionality and as of ES2017 full module support, class (style) based inheritance, scoping are all available to make it easy for non JavaScript programmers to get into JavaScript.

This HTML5 App also uses CSS3 Grid Layouts with Flexbox. 

- [VueAppTemplate](#vueapptemplate)
    - [Getting Started](#getting-started)
        - [Main Component](#main-component)
    - [Application Structure](#application-structure)
        - [Project Folder](#project-folder)
        - [Vue Components](#vue-components)
        - [HTML and Styling](#html-and-styling)
    - [Deployment](#deployment)
    - [Built With](#built-with)
    - [Authors](#authors)
    - [License](#license)
## Getting Started
In this application, the use of components is an imitation of vue's "single page component" or "SPC". But due to the reliance of SPC to modules (webpack, npm, etc..), the workaround of this app's components is represented as javascript class objects which takes in Vue's "Vue.component" in the constructor. 

All the components have color coded borders: 
* MainRootComponent = Red solid border 
* Components = Green solid border
* Sub-Components = Light Green dashed border
### Main Component
MainComponent.js behaves a bit differently for it is a Vue.component but also has a Vue Root, all components declared in this component is declared globally.  

## Application Structure
### Project Folder 

```
        ├── index.php                           # html5 app entry
        └── src
            ├── assets                  
            |   ├── css                         # where all styling lives
            |   |   ├── style.css
            |   |   ├── media.css
            |   |   └── ...                
            |   └── images                      # .png or .jpg files
            |       ├── vfs_logo.phg
            |       └── <my_image.png> ...      # images naming convention
            |         
            ├── scripts                 
            |   ├── main.js                     # main entry to vue application
            |   └── MainComponent.js            # application's main vue root component
            |
            ├── components                      
            |   ├── Header.js                   # components declared in MainComponent.js
            |   ├── Navbar.js                   
            |   ├── Content.js                  
            |   ├── Sidebar.js                  
            |   ├── Footer.js                   
            |   |
            |   └── sub-components
            |       ├── ButtonName.js
            |       ├── ProductForm.js
            |       ├── SketfabViewer.js
            |       └── <SubComponent> ...      #sub-components naming convention
            |
            └── server                          #back-end
                ├── simple_server.php           
                └── <my_server.php> ...         # server php naming convention
```

### Vue Components
```
                                      +--------------------+
        +----------------------------->  MainComponent.js  <-----------------------------+
        |                   +--------->(Vue Root Component)<---------+                   |
        |                   |         +---------+----------+         |                   |
        |                   |                   ^                    |                   |
        |                   |                   |                    |                   |
+-------+-------+   +-------+-------+   +-------+-------+   +--------+------+   +--------+------+
|   Header.js   |   |   Navbar.js   |   |  Content.js   |   |   Footer.js   |   |   Sidebar.js  |
|(Vue Component)|   |(Vue Component)|   |(Vue Component)|   |(Vue Component)|   |(Vue Component)|
+---------------+   +---------------+   +-------+-------+   +---------------+   +---------------+
                                                ^
                                                |
                  +----------------------------------------------------------------+
                  | +---------------+   +----------------+  +--------------------+ |
                  | | ButtonName.js |   | ProductForm.js |  | SketchfabViewer.js | |
                  | |(Vue Component)|   | (Vue Component)|  |  (Vue Component)   | |
                  | +---------------+   +----------------+  +--------------------+ |
                  |                                                                |
                  |                        Sub+Components                          |
                  +----------------------------------------------------------------+

```

### HTML and Styling
* All the "wrapper" is in a form of CSS GRID Layout.
* Each CSS GRID "area" has a "container" in a form of "flexbox".
* And each CSS Flexbox "container" contains "flexitems".  
## Deployment
This application runs on a Apache Web Server. 
Simply drop the this project folder to your WebServer folder. 
## Built With
* **Vue.js 2.0** - The web framework used. 
* **Axios.js** - Promise based HTTP client used for AJAX. 
* **CSS Grid** - Used for this application's main styling structure. 
* **CSS Flexbox** - Used as a sub structure and supports this application's styling. 
## Authors
* **Clinton Jay Ramonida** - *Integrated Vue.js 2.0, (Expanded from HTML5AppTemplate).*
* **Scott Henshaw** - *Initial work (HTML5AppTemplate).*
## License
This project is licensed under the MIT License - see the LICENSE.md file for details

