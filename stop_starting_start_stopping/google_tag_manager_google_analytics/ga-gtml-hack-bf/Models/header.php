<?php


namespace GaGtmHackBf\Insert\Models;

class GaGtmHackBfDisplayHeader {

	public static function ZeFrontendHeader() {
    
        $output = "\n\n"; 

        // All comments are removed by Autoptimized
        // $output .= '<!--  GaGtmHackBf :: ZeFrontendHeader header -->';
        // $output .= '<!-- content start here -->';
    

    /* Caution Add Google Tag Manager but remove GA before */
    /* put your own <GTM-ID> */
      
      $output .= '<!-- Google Tag Manager -->';
       $output .= '<script>';
       $output .= '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':
       new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=
       \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,\'script\',\'dataLayer\',\'<GTM-ID>\');';
       $output .= '</script>';
        $output .= '<!-- End Google Tag Manager -->';        
        
        $output .= "\n\n";

        /* Envoie la purée roger */
        echo $output;
    }

}