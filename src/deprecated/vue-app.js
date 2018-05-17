/*
Title: vueapp.

Created on Mon May 3 2018.

Author: Clinton Jay Ramonida. 

Copyright (c) 2018.
All Rights Reserved.
 */

import { NAMEBTN } from "../components/sub-components/ButtonName.js";

export class VueApp {
    constructor(){
        
        this.test();

        this.vm = {
            
        }
    }

    test(){
        new Vue({ el: '#components-demo' });
    }


}