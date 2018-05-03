new Vue({

    el:'#product-form',

    data: {
        product: '',
        description: ''
    },

    methods:{
        onSubmit(){
            const url = 'server/simple_server.php';
            let payload = {
                action: 'validate',
                product: this.$data.product,
                description: this.$data.description
            }
            

            fetch(url, payload)
                .then((res) => {
                    let data = res['data'];
                    console.log(data);
            }) 
            //axios.post(url, payload);
        }   
    }
})
/* 
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