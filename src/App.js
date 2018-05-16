import { HEADER } from './components/Header.js'
/* import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue' */

class App {
    constructor () {

    }

    vueAppInit(){
        new Vue({ 
            el: '#app',
            
            render: h =>(HEADER)

            /* components: {
                'app-header': HEADER
                'app-navbar': Navbar,
                'app-sidebar': Sidebar,
                'app-content': Content,
                'app-footer': Footer 
            }*/
        });
    }
}

export const APP = new App();


