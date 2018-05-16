// Define a new component called button-counter
class VueCompo {
    constructor() {
        
        Vue.component('button-name', {
            template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',

            data() {
                return {
                    name: "Clinton"
                }
            },

            methods: {
                changeName () {
                    this.name = "Ton";
                },

                foo(){

                }
            }
        })

    }
}

export const COMPO = new VueCompo();