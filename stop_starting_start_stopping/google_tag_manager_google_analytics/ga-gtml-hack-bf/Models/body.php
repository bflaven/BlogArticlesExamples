<?php

namespace GaGtmHackBf\Insert\Models;

class GaGtmHackBfDisplayBody {

	    public static function ZeFrontendBody() {

			$output = "\n\n";

			// All comments are removed by Autoptimized
			// $output .= '<!-- GaGtmHackBf :: ZeFrontendBody body -->';
			// $output .= '<!-- content start here -->';

			/* GA for header uncomment if needed */
			/* put your own <GA-ID> */
			
			// $output .= '<!-- Google Analytics -->';
			// $output .= '<script>';
			// $output .= '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){';
			// $output .= '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),';
			// $output .= 'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)';
			// $output .= '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');';
			// $output .= '/* GA ID */';
			// $output .= 'ga(\'create\', \'<GA-ID>\', \'flaven.fr\');';
			// $output .= 'ga(\'send\', \'pageview\');';
			// $output .= '</script>';
			// $output .= '<!-- // Google Analytics -->';
			
			/* Caution Add Google Tag Manager but remove GA before */
			/* put your own <GTM-ID> */
			
			$output .= '<!-- Google Tag Manager (noscript) -->';
			$output .= '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<GTM-ID>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
			$output .= '<!-- End Google Tag Manager (noscript) -->';


			$output .= "\n\n";

        /* Envoie la purée roger */
        echo $output;
    }
}




