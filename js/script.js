jQuery.noConflict()(function($){
$(window).load(function() {
$('#homeCarousel').carousel()
});
});

jQuery.noConflict()(function($){
$(window).load(function() {
$('#testimonialCarousel').carousel()
});
});

/* ---------- @ Flexslider -----------*/
jQuery.noConflict()(function($){
$(window).load(function() {
$('.portfolio-slider-span .flexslider').flexslider({
animation: "fade"
});
});
});

jQuery.noConflict()(function($){
$(window).load(function() {
$('.post-featured-box .flexslider').flexslider({
animation: "slide"
});
});
});

/* ---------- @ Isotope -----------*/
jQuery.noConflict()(function($){
$(function(){
var $container = $('#portfolio-container');
$container.isotope({
itemSelector : '.photo'
});
var $optionSets = $('#portfolio-options .option-set'),
$optionLinks = $optionSets.find('a');
$optionLinks.click(function(){
var $this = $(this);
// don't proceed if already selected
if ( $this.hasClass('selected') ) {
return false;
}
var $optionSet = $this.parents('.option-set');
$optionSet.find('.selected').removeClass('selected');
$this.addClass('selected');
// make option object dynamically, i.e. { filter: '.my-filter-class' }
var options = {},
key = $optionSet.attr('data-option-key'),
value = $this.attr('data-option-value');
// parse 'false' as false boolean
value = value === 'false' ? false : value;
options[ key ] = value;
if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
// changes in layout modes need extra logic
changeLayoutMode( $this, options )
} else {
// otherwise, apply new options
$container.isotope( options );
}
return false;
});
});
});

/* ---------- @ Prettyphoto -----------*/
jQuery.noConflict()(function($){
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel'});
jQuery('a[data-rel]').each(function() {
jQuery(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
});
});

/* ---------- @ Scroll to Top -----------*/
jQuery.noConflict()(function($){
$('div.scroll-top a').click(function(){
$('html,body').animate({scrollTop:0},500);
return false;
});
});

/* ---------- @ Scroll to Section -----------*/
jQuery.noConflict()(function($){

$('.nav-home').click(function(){
$('html, body').animate({
scrollTop: $("#home").offset().top
}, 2000);
});

$('.nav-service').click(function(){
$('html, body').animate({
scrollTop: $("#service").offset().top
}, 2000);
});

$('.nav-about-us').click(function(){
$('html, body').animate({
scrollTop: $("#about-us").offset().top
}, 2000);
});

$('.nav-portfolio').click(function(){
$('html, body').animate({
scrollTop: $("#portfolio").offset().top
}, 2000);
});

$('.nav-contact-us').click(function(){
$('html, body').animate({
scrollTop: $("#contact-us").offset().top
}, 2000);
});

});
/* ---------- @ Contact From -----------*/

jQuery.noConflict()(function($){
$(document).ready(function ()
{ // 
    $("#ajax-contact-form").submit(function ()
    {
        //
        var str = $(this).serialize(); // 
        $.ajax(
        {
            type: "POST",
            url: "contact.php",
            data: str,
            success: function (msg)
            {
                $("#note").ajaxComplete(function (event, request, settings)
                {
                    if (msg == 'OK') //
                    {
                        result = '<div class="notification_ok">Message was sent to website administrator, thank you!</div>';
                        $("#fields").hide();
                    }
                    else
                    {
                        result = msg;
                    }
                    $(this).html(result);
                });
            }
        });
        return false;
    });
});
});
