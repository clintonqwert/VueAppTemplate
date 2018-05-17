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
            <p>Hey there, I am {{ name }}. 
                <button v-on:click="changeName">Change Name</button>
            </p>
            `,

            data() {
                return {
                    name: "Clinton"
                }
            },

            methods: {
                changeName () {
                    this.name = "Ton";
                }
            }
        })

    }
}

export const NAMEBTN = new ButtonSubCompo();