<?php
// ga_gtm_hack_bf


/**
 * @package ga_gtm_hack_bf
 * @version 1.0
 */
/*
Plugin Name: ga_gtm_hack_bf
Plugin URI: http://flaven.fr/
Description: Change the footer, header and body of WP. Used Namespace and Class. Used ONLY to change the theme to include Google Analytics or Google Tag Manager. Change <GA-ID> or <GTM-ID> comment or uncomment.
Author: Bruno Flaven
Version: 1.0
Author URI: http://flaven.fr/
*/





namespace GaGtmHackBf\Insert;
use GaGtmHackBf\Insert\Models;

include 'Models/footer.php';
include 'Models/header.php';
include 'Models/body.php';



// header
add_action( 'wp_head', [ 'GaGtmHackBf\Insert\Models\GaGtmHackBfDisplayHeader', 'ZeFrontendHeader' ] );

// when body is open
add_action( 'wp_body_open', [ 'GaGtmHackBf\Insert\Models\GaGtmHackBfDisplayBody', 'ZeFrontendBody' ] );


// footer
add_action( 'wp_footer', [ 'GaGtmHackBf\Insert\Models\GaGtmHackBfDisplayFooter', 'ZeFrontendFooter' ] );


?>
