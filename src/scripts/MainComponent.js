/*
Title: VUE App's MAIN Component.

HTML tag: <app></app>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

//This is were we register every components that is instantiated in this Main Root Component.
import { HEADER } from '../components/Header.js'
import { NAVBAR } from '../components/Navbar.js'
import { SIDEBAR } from '../components/Sidebar.js'
import { CONTENT } from '../components/Content.js'
import { FOOTER } from '../components/Footer.js' 

class AppMainComponent {
    constructor () {
        Vue.component("app", {
            template: 
            `
            <div class="grid-frame vue-main-rootcomponent">
                <app-header></app-header>

                <app-navbar></app-navbar>

                <app-sidebar></app-sidebar>

                <app-content></app-content>

                <app-footer></app-footer>
            </div>
            `
        });
    }

    //init() gets triggered in our main.js, this created the very root of our vue application. 
    init(){
        var vm = new Vue({ 
            el: '#app',
        });
    }
}

export const APP = new AppMainComponent();


