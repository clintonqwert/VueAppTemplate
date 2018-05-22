/*
Title: VUE Header Component.

HTML tag name: <app-header></app-header>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

class HeaderComponent {

    constructor(){
        
        Vue.component("app-header", {
            template: 
            `
            <header id="header-wrapper" class="grid-header area vue-component">
                <div id="header-container" class="header flexbox">
                    <div class="flexitem">
                        <h1>{{ title }}</h1>
                    </div>
                </div>
            </header>
            `,
    
            data(){ //for every component in vue, data is in a form of function, not to be confused with vue root's data (in a form of object)
                return{
                    title: 'HEADER'
                }
            },

            methods: { 
                myFunc () {

                }, 
                
                fooFunc() {

                }
            }
        });
        
    }
}

export const HEADER = new HeaderComponent(); //registered in MainComponent.js
