/*
Title: VUE Sketchfab's Viewer Sub-Component.

HTML tag name: <sketchfab-viewer></sketchfab-viewer>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

class SketchfabViewerSubCompo {
    constructor() {
        
        Vue.component('sketchfab-viewer', {
            template: 
            `
            <div>
                <h3>{{ title }}</h3>
                <iframe src="" id="api-frame" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <br>
                    <button id='model' v-on:click="loadModel">Click me to load model and show iframe.</button>
                <input v-model ="urlId" placeholder="<3D Model URL>">
            </div>
            `,

            data() {
                return {
                    title: 'SKETCHFAB VIEWER DEMO',
                    urlId: ''
                }
            },

            methods: {
                loadModel () {
                    let iframe = document.querySelector('#api-frame');
                    let client = new Sketchfab( iframe );
                    let model = this.urlId;
                    
                    if(model === ""){
                        model = '8568d9d14a994b9cae59499f0dbed21e';
                    }
                    
                    client.init( model, 
                        {
                        success: function onSuccess( api ){
                            api.start();
                            api.addEventListener( 'viewerready', function() {
                                console.log("Viewer is ready");
                            });
                        }, 
                        error: function onError() {
                            console.log('Viewer Error');
                        },
                        autostart: 1,
                        autospin: 0.2
                    });
                }
            }
        });

    }
}

export const SKETCHFAB = new SketchfabViewerSubCompo(); //import and register this const to whichever component