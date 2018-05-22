/*
Title: VUE Sub-Component Template.

HTML tag name: <sub-component></sub-component>

Created on Tue May 22 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

USAGE: 
import { SUBCOMPONENT } from "../components/sub-components/SubComponentTemplate.js"; //<sub-component></sub-component>

 */
'use strict';

class MySubComponent {
    constructor() {
        
        Vue.component('sub-component', {
            template: 
            `
            <div class='vue-sub-component'>
                <h3>{{ title }}</h3>
                <p>{{ message }}</p>
                <button v-on:click="myFunc">The Message</button>
            </div>
            `,

            data() { 
                return {
                    title: 'SUB COMPONENT TEMPLATE',
                    message: ''
                }
            },

            methods: {
                myFunc(){
                    this.message = 'Hello World!'
                }
            }
        })

    }
}

export const SUBCOMPONENT = new MySubComponent(); //import and register this const to whichever component