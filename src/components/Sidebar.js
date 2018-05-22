/*
Title: VUE Sidebar Component.

HTML tag name: <app-sidebar></app-sidebar>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';
class SidebarComponent {

    constructor(){
        
        Vue.component("app-sidebar", {
            template: 
            `
            <aside id="sidebar-wrapper" class="grid-side area vue-component">
                <div id="sidebar-container" class="sidebar flexbox">
                    <div class="flexitem">
                        <h2>{{ title }}</h2>
                    </div>
                </div>
            </aside>
            `,
    
            data(){
                return{
                   title:'SIDEBAR'
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

export const SIDEBAR = new SidebarComponent(); //registered in MainComponent.js
