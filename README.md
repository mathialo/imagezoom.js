# imagezoom.js
JavaScript utility for making images zoomable on a website


## Installation and usage
To use imagezoom.js with your webpage, simply download the js file from this repository and include it in the header of the document like so:

``` html
<script type="text/javascript" src="/path/to/js/imagezoom.js"></script>
```

You can now use imagezoom.js on your site.


## Quick documentation
There are mainly two functions in imagezoom.js that are of intrest to the end user:

 - `applyToImage(htmlDOM)` makes the given image clickable. It takes the DOM element of the image you want clickable as an argument
 - `applyToAllImgTags()` applies imagezoom to all images on the webpage.

All functions in imagezoom.js are prefixed with the namespace `imgzm`. 


## Example
Here is a small example of a site that loads imagezoom.js, and applies it to all images on the site once the site is loded:

``` html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="/path/to/js/imagezoom.js"></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function(event) {
                imgzm.applyToAllImgTags();
            });
        </script>
    </head>
    <body>
        <h1>A bunch of images:</h1>
        <img src="img1.jpg">
        <img src="img2.jpg">
        <img src="img3.jpg">
    </body>
</html>
```