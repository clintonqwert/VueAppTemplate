/*
Title: VUE Sidebar Component.

HTML tag name: <app-sidebar></app-sidebar>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */

class SidebarComponent {

    constructor(){
        
        Vue.component("app-sidebar", {
            template: 
            `
            <aside id="sidebar-wrapper" class="grid-side area">
                <div id="sidebar-container" class="sidebar flexbox">
                    <div class="flexitem">
                        <h2>MY SIDEBAR</h2>
                    </div>
                </div>
            </aside>
            `,
    
            data(){
                return{
                   
                }
            }
        });
        
    }
}

export const SIDEBAR = new SidebarComponent();
