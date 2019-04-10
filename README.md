# DEAD GOOD BOOKS Carousel html/css/javascript
A plain, vanilla js, good to go carousel displaying featured books from the Dead good books website using the wp rest api. The carousel functionality was created with the help of the [slick](http://kenwheeler.github.io/slick/) framework.
To speed up the responsive grid process, I used [Unsemantic grid](https://unsemantic.com/).
## To use
Simply clone this repo into your localhost directory and navigate to the site in your browser.
```
git clone https://github.com/danjocutler/dgb-carousel-plugin
```
### Problem!!!
**Unfortunately, there's a little bug that means the site won't render correctly on initial load. Please refresh the page first to use the site as expected!!** :disappointed:
## Next steps
I initially started to build this as a WordPress plugin - [repo here](https://github.com/danjocutler/dgb-carousel-plugin) - using PHP to call the WP REST API.
I stopped this approach because:
1. It was not part of the scope of the test
2. For the full affect, this looks best on a full width page/template. It would have fallen on you, the user, to find/provide the best template in which to display the plugin at its optimum.
3. The area with the logo, tagline and link would also have looked strange if it weren't in a header at the top of the page.

The approach I did take of using a simple html/css/javascript approach works well for this single page feature. It was also nice to keep most things vanilla and refresh my skills using plain JavaScript. However, if we were to build this app further, I think using a more modern, robust approach would be beneficial.
