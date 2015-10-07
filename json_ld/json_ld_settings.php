<?php
/*
Plugin Name: JSON-LD Settings
Plugin URI: http://flaven.fr/
Description: Few additional values ina plugin in order to manage the JSON-LD that can be shown on all type of Wordpress content element (homepage, post, page, author page...etc).
Author: Bruno  Flaven
Author URI: http://flaven.fr/
*/

/* ------------------- */

/* VALUES */
/* All traditionnal inforamtions about the site */
$site_title = get_bloginfo('name');
$site_description = get_bloginfo( 'description' );
$site_url = get_bloginfo( 'url' );
$site_admin_email = get_bloginfo( 'admin_email' );



/* 
Thanks to this article :  https://builtvisible.com/implementing-json-ld-wordpress/ 
*/
/* All traditionnal infos about the site */
add_action('wp_head','bf_insert_json_ld_file');
	function bf_insert_json_ld_file () {
		// echo "\n";
		echo ('<!-- // insert json-ld file -->');
		// echo "\n";
		
		
		if (is_front_page()) {
				/* debug */
				// echo ('<!-- is_front_page -->');
				/* OUTPUT */
				echo ('<script type="application/ld+json">');
				
				/* Extra infos for Homepage */
				$site_title = get_bloginfo('name');
				$site_description = get_bloginfo( 'description' );
				$site_url = get_bloginfo( 'url' );
				$site_admin_email = get_bloginfo( 'admin_email' );
				$user_websiteHandle = esc_attr(get_option('user_websiteHandle')); // the url of the website
				
				/* social */
				$user_twitterHandle =  esc_attr(get_option('user_twitterHandle')); // twitter account URL
				$user_facebookHandle = esc_attr(get_option('user_facebookHandle')); // facebook account URL
				$user_gplusHandle = esc_attr(get_option('user_gplusHandle')); // gplus account URL
				$user_linkedinHandle = esc_attr(get_option('user_linkedinHandle')); // linkedin account URL
				$user_slideshareHandle = esc_attr(get_option('user_slideshareHandle')); // slideshare account URL

				/* professional contact */
				$user_typeContactLogo = esc_attr(get_option('user_typeContactLogo')); // url for the logo
				$user_typeContactPhone = esc_attr(get_option('user_typeContactPhone')); // phone number
				$user_typeContactEmail = esc_attr(get_option('user_typeContactEmail')); // email
				$user_typeContactType = esc_attr(get_option('user_typeContactType')); // type of contact
				
				
				
				/* For homepage */
				$payload["@type"] = 'Organization';
				  $payload["name"] = ''.$site_title.'';
				  $payload["logo"] = ''.$user_typeContactLogo.'';
				  $payload["url"] = ''.$site_url.'';
				  $payload["sameAs"] = array(
				    ''.$user_twitterHandle.'',
				    ''.$user_facebookHandle.'',
				    ''.$user_linkedinHandle.'',
					''.$user_linkedinHandle.''
				  );
				  $payload["contactPoint"] = array(
				    array(
				      "@type" => 'ContactPoint',
				      "telephone" => ''.$user_typeContactPhone.'',
				      "email" => ''.$user_typeContactEmail.'',
				      "contactType" => ''.$user_typeContactType.''
				    )
				  );
		  		/* OUTPUT */
		  	  	echo json_encode($payload);
		  		echo ('</script>');
				  		  
		}//EOF
		
		if (is_single()) {
			/* debug */
			// echo ('<!-- is_single -->');
			/* OUTPUT */
			echo ('<script type="application/ld+json">');
			global $post;
			// stuff for any page, if it exists
		  	$category = get_the_category();
			
		  // this gets the data for the user who wrote that particular item
		  $author_data = get_userdata($post->post_author);
		  $post_url = get_permalink();
		  $post_thumb = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
 		 

		  $payload["@type"] = "Article";
		  $payload["url"] = $post_url;
		  $payload["author"] = array(
		      "@type" => "Person",
		      "name" => $author_data->display_name,
		      );
		  $payload["headline"] = $post->post_title;
		  $payload["datePublished"] = $post->post_date;
		  $payload["image"] = $post_thumb;
		  $payload["ArticleSection"] = $category[0]->cat_name;
		  // $payload["Publisher"] = $site_title;
		  
  		/* OUTPUT */
  	  	echo json_encode($payload);
  		echo ('</script>');
		}//EOF
		
		
		if (is_author()) {
			/* debug */
			// echo ('<!-- is_author -->');
			/* OUTPUT */
			echo ('<script type="application/ld+json">');
		
		  global $post;
		  // this gets the data for the user who wrote that particular item
		  $author_data = get_userdata($post->post_author);
 
		  // some of you may not have all of these data points in your user profiles - delete as appropriate
		  // fetch twitter from author meta and concatenate with full twitter URL
  
  
		  $twitter_url =  " https://twitter.com/";
		  $user_twitterHandle = get_the_author_meta('twitter');
		  $twitterHandleURL = $twitter_url . $user_twitterHandle;
		  
		
		  $user_facebookHandle = esc_attr(get_option('user_facebookHandle')); //'facebook';
		  $user_gplusHandle = esc_attr(get_option('user_gplusHandle')); // 'gplus';
		  $user_linkedinHandle = esc_attr(get_option('user_linkedinHandle')); // 'linkedin'; //
		  $user_slideshareHandle = esc_attr(get_option('user_slideshareHandle')); // 'slideshare'; // 
		  $user_websiteHandle = esc_attr(get_option('user_websiteHandle')); // the url of the website
 
		  $payload["@type"] = "Person";
		  $payload["name"] = $author_data->display_name;
		  $payload["email"] = $author_data->user_email;
		  $payload["sameAs"] =  array(
		    $twitterHandleURL,
			$user_websiteHandle,
			$user_gplusHandle,
			$user_linkedinHandle,
			$user_slideshareHandle
		      );
  
	    	/* OUTPUT */
	    	echo json_encode($payload);
	    	echo ('</script>');
	  		}//EOF
		
		
		// echo "\n";
		echo ('<!-- // insert json-ld file -->');
		// echo "\n";

	}

/* ------------------- */



// create custom plugin settings menu
add_action('admin_menu', 'my_cool_plugin_create_menu');

function my_cool_plugin_create_menu() {

	//create new top-level menu
	add_menu_page('JSON-LD Settings', 'JSON-LD Settings', 'administrator', __FILE__, 'my_cool_plugin_settings_page' , plugins_url('/images/icon.png', __FILE__) );

	//call register settings function
	add_action( 'admin_init', 'register_my_cool_plugin_settings' );
}


function register_my_cool_plugin_settings() {
	//register our settings
	register_setting( 'my-cool-plugin-settings-group', 'user_websiteHandle');
	register_setting( 'my-cool-plugin-settings-group', 'user_twitterHandle');
	register_setting( 'my-cool-plugin-settings-group', 'user_facebookHandle');
	register_setting( 'my-cool-plugin-settings-group', 'user_gplusHandle');
	register_setting( 'my-cool-plugin-settings-group', 'user_linkedinHandle');
	register_setting( 'my-cool-plugin-settings-group', 'user_slideshareHandle');
	register_setting( 'my-cool-plugin-settings-group', 'user_typeContactLogo');
	register_setting( 'my-cool-plugin-settings-group', 'user_typeContactPhone');
	register_setting( 'my-cool-plugin-settings-group', 'user_typeContactEmail');
	register_setting( 'my-cool-plugin-settings-group', 'user_typeContactType');


}


function my_cool_plugin_settings_page() {
?>
<div class="wrap">
<h2>Manage JSON-LD Settings for Wordpress</h2>

<form method="post" action="options.php">
    <?php settings_fields( 'my-cool-plugin-settings-group' ); ?>
    <?php do_settings_sections( 'my-cool-plugin-settings-group' ); ?>
    <table class="form-table" border="0">
		
		<?php
		/* Values */
		$user_values = array(
		'user_websiteHandle',
		'user_twitterHandle',
		'user_facebookHandle',
		'user_gplusHandle',
		'user_linkedinHandle',
		'user_slideshareHandle',
		'user_typeContactLogo',
		'user_typeContactPhone', 
		'user_typeContactEmail', 
		'user_typeContactType'
		);
		$user_values_title = array(
		'Website',
		'Twitter account',
		'Facebook',
		'Google +',
		'Linkedin',
		'Slideshare',
		'Logo',
		'Phone', 
		'Email', 
		'Type of contact'
		);
		
		$user_values_description = array(
		'The url of your website eg http://flaven.fr/',
		'The account name on Twitter without the @ eg bflaven',
		'The url of your page url on Facebook eg https://www.facebook.com/bruno.flaven',
		'The url of your page on Google + eg https://plus.google.com/+BrunoFlaven/',
		'The url of your page on Linkedin eg https://fr.linkedin.com/in/brunoflaven',
		'The url of your page on Slideshare eg http://fr.slideshare.net/BrunoFlaven',
		'The url of your logo http://flaven.fr/wp-content/uploads/2013/09/logo_flaven_net.png',
		'A phone number for a contact eg +33 (0)x xx xx xx', 
		'A email address a contact eg info@flaven.net', 
		'A phone number for a contact eg editorial'
		);
		
		
		
					$max=count($user_values);
					// $max=count($words);
				for ($i = 0; $i < $max; $i++) {
					echo ('<!-- '.trim($user_values[$i]).' -->');
						echo ('<tr valign="top">');
				        echo ('<th scope="row">'.trim($user_values_title[$i]).'</th>');
				       	echo ('<td><input type="text" name="'.trim($user_values[$i]).'" value="'); 						
						echo esc_attr( get_option(trim($user_values[$i])) ); 
						echo ('" size="70" />');
						echo ('<p class="description">'.trim($user_values_description[$i]).'</p>');
						echo ('</td>');
				        echo ('</tr>');
						
						
							
							
					}// EOL
			
        ?>
        
       
		
		
    </table>
    
    <?php submit_button(); ?>

</form>
</div>
<?php } ?>