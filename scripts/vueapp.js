import { HTTP } from "../scripts/http.js";

//Our 'product-form' root that handles Ajax call to our own simple PHP server. 
new Vue({
    el:'#product-form',

    data: {
        product: '',
        description: '',
        response: ''
    },

    methods:{
        onSubmit(){
            //***ajax post with axios***
            const url = 'server/simple_server.php';
            const params = new URLSearchParams();
            params.append('action', 'validate');
            params.append('product', `${this.$data.product}`);
            params.append('description', `${this.$data.description}`);

            let config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
            
            axios.post(url, params, config )
                .then( (response) =>{
                    this.$data.response = response.data ;
                    
                });  
        },
        
        onload(){
            let view = new Sketchfab();

            view.sketchFabInit();
        }
    }
})

//Sketch-fab Root that handles our sketchfab view api
new Vue({
    el:'#sketch-fab',
    
    data:{
        urlId: ''
    },

    methods:{
        loadModel(){
            let iframe = document.querySelector('#api-frame');
            let client = new Sketchfab( iframe );
            let model = this.$data.urlId;
            
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
})

/* ***Few ways of posting an Ajax*** */
/* let params = {
    //method: "POST",
    //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    action: 'validate',
    product: this.$data.product,
    description: this.$data.description
} */

/* HTTP.post( url, params)
    .then( ( data ) => { 
        console.log(1, 'success', JSON.parse( data )); 
}); */


/* fetch(url, params)
    .then((res) => {
        let data = res['data'];
        console.log(data);
});  */

/*  //***fetch with await/async***
const server = "server/simple_server.php";
let payload = {
    action: "validate",
    data: this.$data
}

return async dispatch =>{
    try {
        const response = await fetch(server, payload)
        console.log(response)
    }catch (e) {
        console.log(e)
    }
} */