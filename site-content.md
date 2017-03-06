# Website Content ordered by Group and Topic

### Group - Portfolio Items
#### Section - Web Development
#### Header - Web Development

text -
Web Development in 2017 requires a high level of technical and visual skills. Early in the 21st century, web development required painstaking work to create HTML pages and add styling with CSS. Large projects meant huge numbers of files and code that was written independently. Although technologies like Cold Fusion and .Net helped somewhat reduce code replication, there was still a lot to keep track of from project to project (not to mention dealing with compatability issues during the browser wars). The advent of CSS Frameworks, MVC Architecture, Package and Task Managers was meant to make the life of developers easier, and it has. However, it has also created a technical hurdle that prevents pure hobbists from diving head first into all but the most basic of web development technologies. Content Management Systems like WordPress have helped tear down some barriers, but even WordPress requires higher-level skills to produce a polished and professional end-product.

The good news is that for those individuals who are willing to learn the skills necessary to become an expert, or at the very least least a highly proficient amateur, their skills are in demand. The job of Web Developer commonly heads the list of hot jobs and is one of the in-demand skills in the 21st century workforce.

Listed below are a portfolio of different projects - focused on Front-End, Back-End, and Content Management System development.

* Sub-header - Front-End Development
* Sub-header - Back-End Development
* Sub-header - Content Management Systems

### Group - Portfolio Items
#### Section - Design
#### Header - Adobe Design

text -
Although it's possible for the modern web developer to avoid design, I don't recommend it. Even if a web developer isn't an expert in design theory, tools, or application, these are very things to know how to do. I make use of design - particularly focusing on Photoshop, Illustrator, and InDesign - for things like prototyping, graphics for use on the web, and digital publications.

Listed below are a portfolio of different design projects - focused on prototyping, web graphics, and digital publishing.

* Sub-header - Prototypes
* Sub-header - Web Graphics
* Sub-header - Digital publications

### Group - Portfolio Items
#### Section - Design
#### Header - Data Visualization

text -
The words Big Data are all over the headlines these days - but how many people are able, or would want, to try to analyze Big Data in it's raw format? That's where data visualization come in. There's a range of ways of visualize data - using graphs, on maps, or with interactive dashboards, just to name a few.

Listed below are a portfolio of different design projects - focused on prototyping, web graphics, and digital publishing.

* Sub-header - Examples

### Group - Portfolio Items
#### Section - Web Tech
#### Header - Websites, Podcasts, Learning Tools, Products

text -
Keeping up-to-date with the rapidly moving and always changing landscape of web development requires an awareness of where to find information about what's happening in the development community. There's a mountain of resources available - including websites, podcasts, learning tools, and products.

### Group - Portfolio Items
#### Section - Photography
#### Header - Travel Photos

text -
I've been lucky enough to travel often during the past 10 years. Living overseas has made traveling more accessible and a welcome break. Most of my travels have been in Europe and Germany in particular. I've managed to set my foot into all sixteen of the states of Germany, although there's plenty of opportunity to explore each more thoroughly. I've made journeys to many other places throughout North America and Europe. Displayed is a selection of some of my favorite photos.

* Sub-header - Examples

TODO - Feb 26
* Collect images for photo pages
* Set up JSON file for images
  * id
  * url
  * title
  * description
* prep pages for gallery

TODO:
* get images for websites
* add metadata for images
* figure out loading stuff (setTimeout ?) --check
* work on resume
* review other pages, etc.
* home page - images

PHOTO Pages:
* Travel Photos
* Fun Photos
* Dog Photos
---------------
PHOTOS Todo:
* Search filter

CONTENT Development:
* Home page
  * fix banner images +
  * fix links to development, etc. +
* Web Development
  * add cards for projects +
* Prototypes
  * add cards for projects -
* Design
  * add cards for projects +
* Data Visualization
  * add cards for projects -
* Web Tech
  * re-work text for section -
  * add cards for sections -
* IDEs
  * add cards for products -
* Travel Photos
  * add metadata for images -
* Fun Photos
  * select photos -
  * add metadata for images -
* About Me
  * review text -
  * check image clearing -
* Resume
  * fix job description text -
* Social Networking
  * add cards for networks -
* Blog
  * research how to develop -
* Four-footed Friends
  * select photos -
  * add metadata for images -




<!--
Blog entries - sorted by date
var map = new Map();
map.set('2-1', "foo");
map.set('0-1', "bar");
map.set('3-1', "baz");

var mapAsc = new Map([...map.entries()].sort());

=================================================

var objs = [
    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
    { first_nom: 'Pig',    last_nom: 'Bodine'   },
    { first_nom: 'Pirate', last_nom: 'Prentice' }
];

objs.sort(function(a,b) {return (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0);} );
-->


<!-- Flowing Images - left to right

/*
	 CSS-Tricks Example
	 by Chris Coyier
	 http://css-tricks.com
*/

* { margin: 0; padding: 0; }

#photos {
   /* Prevent vertical gaps */
   line-height: 0;

   -webkit-column-count: 5;
   -webkit-column-gap:   0px;
   -moz-column-count:    5;
   -moz-column-gap:      0px;
   column-count:         5;
   column-gap:           0px;

}
#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
}

@media (max-width: 1200px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  #photos {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  #photos {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  #photos {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}

<!DOCTYPE html>
<html>

<head>
	<meta charset='UTF-8'>

	<title>Seamless Responsive Photo Grid</title>

	<link rel='stylesheet' href='css/style.css'>
</head>

<body>

<div id="demo-top-bar">

  <div id="demo-bar-inside">

    <h2 id="demo-bar-badge">
      <a href="/">CSS-Tricks Example</a>
    </h2>

    <div id="demo-bar-buttons">
      <a class='header-button' href='/13372-seamless-responsive-photo-grid/'>&larr; Back to Article</a> &nbsp; <a class='header-button' href='/examples/'>More Demos &rarr;</a>    </div>

  </div>

</div>
	<section id="photos">

		<img src='http://placekitten.com/300/343' alt=''><img src='http://placekitten.com/300/384' alt=''><img src='http://placekitten.com/300/246' alt=''><img src='http://placekitten.com/300/366' alt=''><img src='http://placekitten.com/300/283' alt=''><img src='http://placekitten.com/300/398' alt=''><img src='http://placekitten.com/300/392' alt=''><img src='http://placekitten.com/300/351' alt=''><img src='http://placekitten.com/300/392' alt=''><img src='http://placekitten.com/300/226' alt=''><img src='http://placekitten.com/300/276' alt=''><img src='http://placekitten.com/300/249' alt=''><img src='http://placekitten.com/300/240' alt=''><img src='http://placekitten.com/300/381' alt=''><img src='http://placekitten.com/300/331' alt=''><img src='http://placekitten.com/300/324' alt=''><img src='http://placekitten.com/300/305' alt=''><img src='http://placekitten.com/300/225' alt=''><img src='http://placekitten.com/300/228' alt=''><img src='http://placekitten.com/300/271' alt=''><img src='http://placekitten.com/300/231' alt=''><img src='http://placekitten.com/300/231' alt=''><img src='http://placekitten.com/300/370' alt=''><img src='http://placekitten.com/300/216' alt=''><img src='http://placekitten.com/300/386' alt=''><img src='http://placekitten.com/300/272' alt=''><img src='http://placekitten.com/300/205' alt=''><img src='http://placekitten.com/300/262' alt=''><img src='http://placekitten.com/300/208' alt=''><img src='http://placekitten.com/300/329' alt=''>
	</section>

 <style type="text/css" style="display: none !important;">
	* {
		margin: 0;
		padding: 0;
	}
	body {
		overflow-x: hidden;
	}
	#demo-top-bar {
		text-align: left;
		background: #222;
		position: relative;
		zoom: 1;
		width: 100% !important;
		z-index: 6000;
		padding: 20px 0 20px;
	}
	#demo-bar-inside {
		width: 960px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
	}
	#demo-bar-buttons {
		padding-top: 10px;
		float: right;
	}
	#demo-bar-buttons a {
		font-size: 12px;
		margin-left: 20px;
		color: white;
		margin: 2px 0;
		text-decoration: none;
		font: 14px "Lucida Grande", Sans-Serif !important;
	}
	#demo-bar-buttons a:hover,
	#demo-bar-buttons a:focus {
		text-decoration: underline;
	}
	#demo-bar-badge {
		display: inline-block;
		width: 302px;
		padding: 0 !important;
		margin: 0 !important;
		background-color: transparent !important;
	}
	#demo-bar-badge a {
		display: block;
		width: 100%;
		height: 38px;
		border-radius: 0;
		bottom: auto;
		margin: 0;
		background: url(/images/examples-logo.png) no-repeat;
		background-size: 100%;
		overflow: hidden;
		text-indent: -9999px;
	}
	#demo-bar-badge:before, #demo-bar-badge:after {
		display: none !important;
	}
</style>
</body>

-->
