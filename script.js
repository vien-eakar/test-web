document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add simple scroll-to-section smooth scrolling if not using Bootstrap's scrollspy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Simulate dynamic text if you want, otherwise remove.
    // For this design, the CSS animation 'animated-text' is used, so this JS isn't strictly needed for that.
});

// Example for integrating Google Analytics (place this at the end of <body> or in script.js)
// Remember to replace 'G-XXXXXXX' with your actual Measurement ID
/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'G-XXXXXXX', 'auto'); // REPLACE WITH YOUR GA ID
ga('send', 'pageview');
*/

// For Google Analytics 4 (Recommended)
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YOUR_GA4_MEASUREMENT_ID'); // REPLACE WITH YOUR GA4 ID
*/