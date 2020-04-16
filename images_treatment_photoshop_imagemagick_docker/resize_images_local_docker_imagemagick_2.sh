#!/bin/bash
# USAGE
# In the mac console, use the following command line
# cd /Volumes/mi_disco/imagemagick_docker_1/
# sh resize_images_local_docker_imagemagick_2.sh
# Delivers the latest version of the ImageMagick 7 to your environment in Docker container.
# Use https://hub.docker.com/r/dpokidov/imagemagick/

### CONFIG ####

# Pictures in directory
PATH_LOCATION="/Volumes/mi_disco/imagemagick_docker_1/01_source_images/*.jpg";

# Values for imagemagick in docker
SOURCE="/Volumes/mi_disco/imagemagick_docker_1/01_source_images:/source";
DESTINATION="/Volumes/mi_disco/imagemagick_docker_1/02_destination_images:/destination";

# if you use with out the pull
DOCKER_IMAGEMAGICK="dpokidov/imagemagick";

# if you install with the Dockerfile
# DOCKER_IMAGEMAGICK="my_imagemagick_docker_1:1.1";

### // CONFIG ####

echo "\n\n"
echo "\033[1;33m ### START ### \033[0m"
echo "\n\n"

for file in $PATH_LOCATION
do
	#SHOW
	FILE=""$(basename $file)"";
	#echo ""$FILE""
    echo "docker run -v "$SOURCE" -v "$DESTINATION" "$DOCKER_IMAGEMAGICK" /source/"$FILE" -quality 100 -resize 50% -interlace plane /destination/resize_50_"$FILE""
    echo "\n"
    #DO
    docker run -v "$SOURCE" -v "$DESTINATION" "$DOCKER_IMAGEMAGICK" /source/"$FILE" -quality 100 -resize 50% -interlace plane /destination/resize_50_"$FILE"
    
done


### ---  DONE --- ###
echo "\n\n"
echo "\033[1;33m ### END IT IS DONE !!! ### \033[0m"
echo "\n\n"
exit 0;

