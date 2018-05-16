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
        <link rel='stylesheet' href='src/assets/css/style.css'>

        <!-- Media Queries -->
        <link rel='stylesheet' href='src/assets/css/media.css'>

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
        <div id="app">
            <!-- Vue App Main Component -->
            <app></app>
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
            <!-- <script src='scripts/vueapp.js' type="module" defer></script> -->
            <script type="module" src='src/scripts/main.js' defer></script>
		</section>
		
	</body>
</html>
