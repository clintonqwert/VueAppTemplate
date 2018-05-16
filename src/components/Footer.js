/*
Title: VUE Footer Component.

HTML tag name: <app-footer></app-footer>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */

class FooterComponent {

    constructor(){
        
        Vue.component("app-footer", {
            template: 
            `
            <footer id="footer-wrapper" class="grid-foot area">
                <div id="footer-container" class="footer flexbox">
                    <div class="flexitem">
                        <h1>FOOTER</h1>
                    </div>
                </div>
            </footer>
            `,
    
            data(){
                return{
                    
                }
            }
        });
        
    }
}

export const FOOTER = new FooterComponent();
