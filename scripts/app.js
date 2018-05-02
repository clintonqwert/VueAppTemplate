/*
Title: Application JS.

Created on Mon Feb 19 2018.

Author: Clinton Jay Ramonida.

In cooperation with my Mentor - Scott Henshaw. 

Copyright (c) 2018.
All Rights Reserved.
 */
'use strict';

const SIXTY_FPS = 1000 / 60;

export class App {

    // constructor for new App's, note use of initializer in constructor parameters
	constructor( opt1 = null ) {	    
	    /*
	     * use of this. reference in the constructor tells us the attributes
	     * defined are public.  All class members are.
	     * 
	     * convention says if we prefix the name with an underscore, other devs
	     * will understand that we mean this to be private data.
	     * 
	     */
	    this._privateData = {
	        
            done:     false,
            counter:  0,
            interval: null
	    };
	    	    
	    /*
	     * Delete this variable, its just here to show a variable scoped
	     * to the function level (constructor in this case).  Its available for use 
	     * in the event handler below 
	     */ 
        var deleteMe = true;	    
	    
        /*
        *  Define the Event handlers for the app
        */
	    document.querySelector('#stop-button')            
	        .addEventListener('click', ( event ) => {
	            // Note use of the "fat arrow" function, preserving the "this" reference
	            
	            // variable scoped to the block, not visible outside the {} its defined within
	            // OK this is not very useful, lets clean up...
                let my = this.my; 
                
                my.counter = 0;
                
            	// stop the main event loop if applicable
            	window.clearInterval( my.interval );
            }
        );

        document.querySelector('#start-button')            
            .addEventListener('click', ( event ) => {
                this.run();
            }
        );
	}	

	
    /*
     *  Sample getter, can be used like a property  so my.propertyName
     *  
     *  Now this is public so its possible others can use this to get to 
     *  our private data; however it enhances readability over embedding the 
     *  guts of the getter in every method.
     *  
     *  and
     *  
     *  we can pseudo hide private data if we want.
     *    
     */
    get my() { return this._privateData; }
	
	
    update() {
        // Update the app/model/simulation here
        this.my.done = true;
    }

    
    render() {
        // Refresh the view - canvas and dom elements, etc from here.             
        this.my.counter++;
        if (this.my.counter > 1000)
            this.my.counter = 0;
        
        // Use backtick quotes to get template literals to work
        document.querySelector('#results-area').innerHTML = `Counting ${this.my.counter}`;
    }
    

    run() {
        // Entry point, create a nw app, then tell it to run itself
		this.my.interval = window.setInterval( () => {
			
			this.update();			
			this.render();	
			
		}, SIXTY_FPS );
	}    	
}