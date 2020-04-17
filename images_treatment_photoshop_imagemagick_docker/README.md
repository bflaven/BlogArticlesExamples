
# Imagemagick, Docker, DevOps - Bulk processing images with Imagemagick and Docker, DevOps solution. A quick comparison with Photoshop scripts, Craft solution.


## take-aways, benefits
**- Image quality:** no trade-off with image quality and reducing time-consuming task to work on image.
**- Docker:** good empiric introduction to automation, industrialization, CI, with a sharable and maintainable environment.
**- Open Source:** imagemagick, Docker are free. It is saving money and time, less training, no licensing. There is only the learning curb that may cost you time. No Pain No Gain!
**- User-Experience:** above all saving time to work for the editorial team, time to write and think. Same usages allow better support.
**- Textbook case:** It is a pragmatic textbook case to show progress from craft usage to industrial usage and how Docker can help you in that?



## Create the environment
**1. launch the console**

```bash
cd /Volumes/mi_disco/imagemagick_docker_1
```

**2. make the source and destination directories**
```bash
cd /Volumes/mi_disco/imagemagick_docker_1
mkdir /Volumes/mi_disco/imagemagick_docker_1/01_source_images_newls
mkdir /Volumes/mi_disco/imagemagick_docker_1/02_destination_images_new
```

### USECASE_1  Scripting resize with Photoshop, Scripting with Applescript and Photoshop

**We will record a script in Photoshop named resize_to_60_percent_good**
- Name of the script in Photoshop : resize_to_60_percent_good
- Name of the dorectory in Photoshop : demo_1


### USECASE_2 Scripting resize with Imagemagick install on your computer

**1. install homebrew**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

**2. install imagemagick**
```bash
brew uninstall imagemagick
brew update
brew cleanup
brew doctor
```

**3. install environment with homebrew and Imagemagick**
```bash
brew install imagemagick
```

**4. to check if homebrew is installed**
```bash
brew
```

**5. convert image**
```bash
convert /Volumes/mi_disco/imagemagick_docker_1/01_source_images/nature_2_1280x720.jpg -quality 100 -resize 20% -interlace plane /Volumes/mi_disco/imagemagick_docker_1/02_destination_images/20_percent_nature_2_1280x720.jpg
```

```bash
convert /Volumes/mi_disco/imagemagick_docker_1/01_source_images/big_nature_3_1920x1080_257528.jpg -quality 100 -resize 20% -interlace plane /Volumes/mi_disco/imagemagick_docker_1/02_destination_images/20_percent_big_nature_3_1920x1080_257528.jpg
```


### USECASE_3 Scripting resize with Imagemagick and Docker
It supposes that you have install Docker on your computer.

#### (A) Install imagemagick within docker

**1. get into the directory**
```bash
cd /Volumes/mi_disco/imagemagick_docker_1/
```

**SOLUTION_1: Make a docker pull from this distribution**

```bash
# may take a while you can use the pull
docker pull dpokidov/imagemagick
```

**SOLUTION_2: Install your own imagemagick with Dockerfile and a Makefile**

```bash
# if your are already in your directory
# cd /Volumes/mi_disco/imagemagick_docker_1/
# create a Dockerfile with the instructions
touch Dockerfile

# check https://github.com/dooman87/imagemagick-docker/blob/master/Dockerfile and cut and paste the content of the dockerfile.

#if needed show what is insidethe Dockerfile
cat Dockerfile

#create the bundle Imagemagick and Docker named my_imagemagick_docker_1
docker build -t my_imagemagick_docker_1:1.0 .

#create a Makefile to manipulate this Dockerfile
touch Makefile
cat Makefile

# Example: https://github.com/bflaven/BlogArticlesExamples/blob/master/using_pandoc/Makefile
```
#### (B) Using command for Imagemagick depending on your imagemagick install within Docker

**Commands for SOLUTION_1**
```bash
# using the distribution dpokidov/imagemagick
# model: docker run -v /your/images:/imgs dpokidov/imagemagick /imgs/sample.png -resize 100x100 /imgs/resized-sample.png

# COMMAND WITH IMAGEMAGICK FOR SOLUTION_1

# test_4 (ok with dpokidov/imagemagick)
docker run -v /Volumes/mi_disco/imagemagick_docker_1/01_source_images:/source -v /Volumes/mi_disco/imagemagick_docker_1/02_destination_images:/destination dpokidov/imagemagick /source/big_nature_3_1920x1080_257528.jpg -resize 400x /destination/resize_400_big_nature_3_1920x1080_257528.jpg


# test_5 (50%, ok with dpokidov/imagemagick)
docker run -v /Volumes/mi_disco/imagemagick_docker_1/01_source_images:/source -v /Volumes/mi_disco/imagemagick_docker_1/02_destination_images:/destination dpokidov/imagemagick /source/big_nature_2_1920x1080_257635.jpg -quality 100 -resize 50% -interlace plane /destination/resize_50_big_nature_2_1920x1080_257635.jpg

```
**Commands for SOLUTION_2**

```bash
# COMMAND WITH IMAGEMAGICK FOR SOLUTION_2
# using our own distribution my_imagemagick_docker_1:1.1


#test_2_a (ok my custom install e.g my_imagemagick_docker_1:1.1)
docker run -v /Volumes/mi_disco/imagemagick_docker_1/01_source_images:/source -v /Volumes/mi_disco/imagemagick_docker_1/02_destination_images:/destination my_imagemagick_docker_1:1.1 /source/big_nature_2_1920x1080_257635.jpg -quality 100 -resize 50% -interlace plane /destination/resize_50_big_nature_2_1920x1080_257635.jpg

#test_2_b (ok my custom install e.g my_imagemagick_docker_1:1.1)
docker run -v /Volumes/mi_disco/imagemagick_docker_1/01_source_images:/source -v /Volumes/mi_disco/imagemagick_docker_1/02_destination_images:/destination my_imagemagick_docker_1:1.1 /source/600px_vincent_van_gogh_self_portrait_google_art_project.jpg -resize 100x100 -quality 100 -interlace plane /destination/600px_vincent_van_gogh_self_portrait_google_art_project.jpg


#SOURCE FOR PULL DOCKER
#imagemagick-docker
#https://hub.docker.com/r/dpokidov/imagemagick/
#https://github.com/dooman87/imagemagick-docker
```

