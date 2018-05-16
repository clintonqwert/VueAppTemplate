class HeaderComponent {

    constructor(){
        
        Vue.component("app-header", {
            template: `
                <div>
                    <header id="header-wrapper" class="grid-header area">
                        <div id="header-container" class="header flexbox">
                            <div class="flexitem">
                                <h1>{{ title }}</h1>
                            </div>
                        </div>
                    </header>
                </div>
            `,
    
            data(){
                return{
                    title: 'HEADER'
                }
            }
        });
        
    }
}

export const HEADER = new HeaderComponent();
