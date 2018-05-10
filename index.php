<!DOCTYPE html>
<!--
HTML5 + PHP App Template

@Copyright 2014-2017, Vancouver Film School, in cooperation with Kibble Games Inc.

@Author: Scott Henshaw
@Contributor: Clinton Ramonida

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

-->
<html>
	<head>
	    <title>HTML5 App Demo</title>
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
        
	    <!-- Base style sheet add your default styles here-->
        <link rel='stylesheet' href='css/style.css'>

        <!-- Media Queries -->
        <link rel='stylesheet' href='css/media.css'>

        <!-- Add local styles here -->
        <style type="text/css"></style>

	</head>

	<!--        ****PLEASE READ****
            Application's Structure Details: 
    All the "wrapper" is in a form of CSS GRID Layout.
    Each grid "area" has a "container" in a form of "flexbox".
    And each flexbox "container" contains "flexitems".  
    -->
    <body>
        <!-- Grid Layout -->
        <div id="main-wrapper" class="grid-frame">

            <!-- Nav Bar -->
            <nav id="navigation-wrapper" class="grid-nav area">
                <div id="menu-container" class="menu flexbox">
                    <div class="flexitem">
                        <ul>
                            <li><a href="">Nav 1</a></li>
                            <li><a href="">Nav 2</a></li>
                            <li><a href="">Nav 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Header -->
            <header id="header-wrapper" class="grid-header area">
                <div id="header-container" class="header flexbox">
                    <div class="flexitem">
                        <h1>HEADER</h1>
                    </div>
                </div>
            </header>

            <!-- The Content -->
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

								<h3>My main app area here</h3>
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

            <!-- Sidebar -->
            <aside id="sidebar-wrapper" class="grid-side area">
                <div id="sidebar-container" class="sidebar flexbox">
                    <div class="flexitem">
                        <h2>MY SIDEBAR</h2>
                    </div>
                </div>
            </aside>

            <!-- The Footer -->
            <footer id="footer-wrapper" class="grid-foot area">
                <div id="footer-container" class="footer flexbox">
                    <div class="flexitem">
                        <h1>FOOTER</h1>
                    </div>
                </div>
            </footer>

        </div>

        <section id="scripts">
		    <!-- This is the key CDN to pull jQuery from -->
		    <!-- To operate offline we may want these to load from a local source -->
		    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.1.0.js"></script>
            
            <!--
             Load your app core here, while not strictly W3C compliant it guarentees
             that the basic HTML gets loaded and you have something to start
             debugging if any of your code fails.
           -->
            <script src='scripts/vueapp.js' type="module" defer></script>
		</section>
		
	</body>
</html>
