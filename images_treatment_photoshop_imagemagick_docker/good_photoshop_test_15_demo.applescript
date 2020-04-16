(*
Made for ZNBC (https://znbc.com) to process images in batch with photoshop
*)
(*
 Description: Description: You have to create a script in Photoshop then all the files presented in the source folder will be proceeded with actions you have made in the script and be saved in the destination folder. For the moment the photoshop script executed is "resize_60_percent_solar_apply" from a directory named "bruno". 

 ! CAUTION !
 - Name for script and directory in Photoshop are case-sensitive.
 - Do not register a save action and close action in your Photoshop script.

 Version: 1.1
 Author: Bruno Flaven
 Author URI: http://flaven.fr
 *)

-- This chooses the master folder where all your sub folders with images are stored
say "Choose your source Folder for this batch job" using "Victoria"
set raw_folder to choose folder

-- This chooses the destination folder where all your result images are stored
say "Choose your destination Folder for the processed files" using "Victoria"
set live_folder to choose folder




-- This checks when the batch started and stores the date value
set startTime to time of (current date)


(* for actions *)
-- This the file counter
set fileCounter to 0

tell application "Finder"
	set itemList to files in raw_folder
end tell

repeat with j from 1 to (number of itemList)
	set fileCounter to fileCounter + 1
end repeat

(* for fileCounter *)


(* for fileCounter *)
--source and destination folders for the images
tell application "Finder"
	set imageSet to get every file of folder raw_folder
end tell

tell application "Finder"
	repeat with i from 1 to (count of imageSet)
		-- coerce Finder style path to string
		set currentImg to (item i of imageSet) as string
		tell application "Adobe Photoshop CS6"
			-- no dialog box
			set display dialogs to never
			activate
			open alias currentImg
			set currentImg to current document
			-- tell current document
			
			
			-- choose your action in the folder, caution the naming is case sensitive
			
			(* 

			The script name is "resize_50_percent_demo" from the directory "demo" 
			from the Actions tabs inside Adobe Photoshop CS6

			*)
			do action "resize_to_60_percent_good" from "demo_1"
			
			
			-- close the file in photoshop after the job is done
			close every document without saving
			
		end tell
	end repeat
	
	(* for actions *)
	set endTime to time of (current date)
	
	(* end *)
	say "The job is done, please have a look to the destination folder. The operation took  " & endTime - startTime & " seconds. The directory contains " & fileCounter & " files." using "Victoria"
	
	(* Dialog box if needed *)
	-- display dialog "nThe operation took  " & endTime - startTime & " seconds" & ".nThe directory contains " & fileCounter & " files.n"
	
end tell