/*
Title: VUE Content Component.

HTML tag name: <app-content></app-content>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

//registering our sub component called <button-name></button-name>
import { NAMEBTN } from "../components/sub-components/ButtonName.js"; //<button-name></button-name>
import { PRODUCTFORM } from "../components/sub-components/ProductForm.js"; //<product-form></product-form>
import { SKETCHFAB } from "../components/sub-components/SketchfabViewer.js"; //<sketchfab-viewer></sketchfab-viewer>

class ContentComponent {

    constructor(){
        
        Vue.component("app-content", {
            template:
            `
            <main id="content-wrapper" class="grid-content area">
                <div id="content-container" class="content flexbox">
                    <!-- Add your HTML5 tags here to structure your app's UI -->

                    <div class="flexitem">
                        <h2>{{ title }}</h2>
                    </div>

                    <!-- Added a spacer between(main content header and results gridbox) two flex items -->
                    <div class="spacer flexitem"></div>
                    
                    <!--       ****PLEASE READ****
                        This is div called a "gridbox" which is a combination of grid and flexbox.
                        Its a grid container, but is also a child of grid because its inside of a grid frame ("main wrapper") 
                        Its a flex item because its inside a flexbox container (content-container). 
                     -->
                    <div id="results-gridbox" class="grid-frame-child">
						<div class="grid-forms area-child">
							<div id='game-screen'>

								<h3>{{ form }}</h3>
								<div id='intro-screen'>
                                    
									<product-form></product-form>
                                    
                                    <button-name></button-name>
                                    
								</div>

							</div>
						</div>

                        <div class="grid-results area-child" id='sketch-fab'>
                            <sketchfab-viewer></sketchfab-viewer>
                        </div>

                    </div>

                </div>
			</main>

            `,
    
            data(){
                return{
                    title: 'CONTENT',
                    form: 'PRODUCTS DEMO FORM'
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

export const CONTENT = new ContentComponent(); //registered in MainComponent.js
