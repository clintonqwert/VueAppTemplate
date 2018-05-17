/*
Title: Main Control JS.

Created on Mon Feb 19 2018.

Author: Clinton Jay Ramonida.

In cooperation with my Mentor - Scott Henshaw. 

Copyright (c) 2018.
All Rights Reserved.
 */
// ===================================================================
'use strict';

/* 
This is the main entry of our application, 
this imports the MAIN Vue Component called MainComponent.js 

***Please Read***
Every Vue components starts Capital letter.
Every Component registered inside our Main Component lives under the "components folder". 
*/
import { APP } from "./MainComponent.js";

document.addEventListener('DOMContentLoaded', ( event ) => {
    APP.init();
});