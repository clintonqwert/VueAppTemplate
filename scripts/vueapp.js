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
                model = '20df9d0706da4ba09d7f95f82bb36806';
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


new Vue({
    el:'#product-form',

    data: {
        product: '',
        description: ''
    },

    methods:{
        onSubmit(){
            const url = 'server/simple_server.php';
            let data = {}
            let payload = {
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                action: 'validate',
                product: this.$data.product,
                description: this.$data.description
            }
            
            let params = JSON.stringify(payload);

            fetch(url, params)
                .then((res) => {
                    let data = res['data'];
                    console.log(data);
            }) 
            
            /* //***ajax post with axios***
            let config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }

            axios.post(url, params, config)
                .then( (response) =>{
                    console.log(response.data);
                }); 
            */

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
        },
        
        onload(){
            let view = new Sketchfab();

            view.sketchFabInit();
        }
    }
})
