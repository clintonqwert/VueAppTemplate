/*
Title: VUE Content Component.

HTML tag name: <app-content></app-content>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

import { NAMEBTN } from "../components/sub-components/ButtonName.js";

class ContentComponent {

    constructor(){
        
        Vue.component("app-content", {
            template:
            `
            <main id="content-wrapper" class="grid-content area">
                <div id="content-container" class="content flexbox">
                    <!-- Add your HTML5 tags here to structure your app's UI -->

                    <div class="flexitem">
                        <h2>THE MAIN CONTENT</h2>
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
                                    
									<form id='product-form' @submit.prevent ='onSubmit'>
										<label>Product: </label>
										<input type='text'   name='product-name' v-model = 'product' />
                                        <br>
                                        <label > Product Description: </label>
                                        <input type='text' name='product-description' v-model = 'description' />
                                        <br>
                                        <input type='submit' name='product-description' value = 'Submit' />
                                        
                                        <!-- Dynamic updates here -->
                                        <div>
                                            <h3>Results Area: Dynamic Updates here!</h3>
                                            <p v-text = '$data.response'></p>
                                        </div>
                                        
                                    </form>
                                    
                                    
                                    <button-name></button-name>
                                    <button-name></button-name>
                                    
                                    
 
								</div>

							</div>
						</div>

                        <div class="grid-results area-child" id='sketch-fab'>
                            <iframe src="" id="api-frame" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
							<br>
                            <button id='model' v-on:click='loadModel'>Click me to load model and show iframe.</button>
                                <input v-model = "urlId" placeholder="<3D Model URL>">
                        </div>

                    </div>

                </div>
			</main>

            `,
    
            data(){
                return{
                    form: "Form!"
                }
            }
        });
        
    }
}

export const CONTENT = new ContentComponent();
