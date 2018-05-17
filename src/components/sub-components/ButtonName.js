/*
Title: VUE Button Name Sub-Component.

HTML tag name: <button-name></button-name>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';
class ButtonSubCompo {
    constructor() {
        
        Vue.component('button-name', {
            template: 
            `
            <div>
                <h3>{{ title }}</h3>
                <p>Hey there, I am {{ name }}. 
                    <button v-on:click="changeName">Change Name</button>
                </p>
            </div>
            `,

            data() {
                return {
                    title: 'BUTTON COMPONENT DEMO',
                    name: "Jane Doe"
                }
            },

            methods: {
                changeName () {
                    this.name = "Richard Roe";
                }
            }
        })

    }
}

export const NAMEBTN = new ButtonSubCompo(); //import and register this const to whichever component