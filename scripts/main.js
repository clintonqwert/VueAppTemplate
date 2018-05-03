/**
 * App Singleton MAIN 
 * 
 * @author: Clinton Ramonida {@link mailto:cramonida@vfs.com}
 * 
 * @version: 2.2.0 ES2017+ using Module
 * 
 * @summary: Framework Singleton Class to contain a web app
 *
 */

'use strict';

// ===================================================================
//Import all the necessary scripts here
import { App } from './App.js';

// MAIN
document.addEventListener('DOMContentLoaded', ( event ) => {

    let app = new App();
    //app.run(); //calling this line on a start button inside the app.js

});

