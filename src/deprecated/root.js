//Our 'product-form' root that handles Ajax call to our own simple PHP server. 
new Vue({
    el:'#product-form', //the "id" that bind this root to our html. 

    data: { // "data:" is a vue object and is the model/view model(v-model) for this particular "root"
        product: '',
        description: '',
        response: ''
    },

    methods:{ // "methods: " is a vue object that can be access in our html (@submit.prevent ='onSubmit')
        onSubmit(){
            //  ***ajax post with axios***
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
        }, //a comma after every method

        foo(){

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