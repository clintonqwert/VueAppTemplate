/*
Title: VUE Product Form Sub-Component.

HTML tag name: <product-form></product-form>

Created on Wed May 16 2018.

Author: Clinton Jay Ramonida.

Copyright (c) 2018.
All Rights Reserved.

 */
'use strict';

class ProductFormSubCompo {
    constructor() {
        
        Vue.component('product-form', {
            template: 
            `
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
                    <h3>{{ title }}</h3>
                    <p v-text = '$data.response'></p>
                </div>
                
            </form>
            `,

            data() { 
                return {
                    title: 'PRODUCTS FORM Results Area: ',
                    product: '',
                    description: '',
                    response: ''
                }
            },

            methods: {
                onSubmit(){
                    //  ***ajax post with axios***
                    const url = 'src/server/simple_server.php';
                    const params = new URLSearchParams();
                    params.append('action', 'validate');
                    params.append('product', `${this.product}`);
                    params.append('description', `${this.description}`);
        
                    let config = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    }
                    
                    axios.post(url, params, config )
                        .then( (response) =>{
                            this.response = response.data ;
                            
                        });  
                }
            }
        })

    }
}

export const PRODUCTFORM = new ProductFormSubCompo(); //import and register this const to whichever component