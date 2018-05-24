/*
Title: VUE Sub-Component Template.

HTML tag name: <sub-component></sub-component>

Created on Tue May 22 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

class ServerSideHtml {
    constructor() {
        
        Vue.component('server-side-html', {
            template: 
            `
            <div class='vue-sub-component'>
                <h3>{{ title }}</h3>
                <button v-on:click="getHtmlBit" >Get HTML bit from PHP Server</button>
                <input type='text' v-model = 'htmlTemplate' />
                <div v-html="rawHTML"></div>
            </div>
            `,

            data() { 
                return {
                    title: 'SERVER SIDE HTML DEMO',
                    rawHTML: '',
                    htmlTemplate: ''
                }
            },

            methods: {
                getHtmlBit(){
                    //  ***ajax post with axios***
                    const url = 'src/server/simple_server.php';

                    const params = new URLSearchParams();
                    params.append('action', 'html');
                    params.append('htmlTemplate', `${this.htmlTemplate}`);
                    
        
                    let config = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    }
                    
                    axios.post(url, params, config )
                        .then( (response) =>{   this.rawHTML = response.data;  })
                        .catch( (error) => {    console.log(error)  });
                }
            }
        })

    }
}

export const SERVERSIDEHTML = new ServerSideHtml(); //import and register this const to whichever component