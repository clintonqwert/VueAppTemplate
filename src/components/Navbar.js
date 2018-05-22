/*
Title: VUE Navbar Component.

HTML tag name: <app-navbar></app-navbar>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

class NavbarComponent {

    constructor(){
        
        Vue.component("app-navbar", {
            template: 
            `
            <nav id="navigation-wrapper" class="grid-nav area vue-component">
                <div id="menu-container" class="menu flexbox">
                    <div class="flexitem">
                        <ul>
                            <li><a href="">Nav 1</a></li>
                            <li><a href="">Nav 2</a></li>
                            <li><a href="">Nav 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
                
            `,
    
            data(){
                return{
                   
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

export const NAVBAR = new NavbarComponent(); //registered in MainComponent.js
