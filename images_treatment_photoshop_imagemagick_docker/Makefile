# Makefile
# 
# Imagemagick, Docker, DevOps - Bulk processing images with Imagemagick and Docker, DevOps solution. A quick comparison with Photoshop scripts, Craft solution.
#
# Run "make ok" to check
# Run "make install_build" to install with build
   

#VALUES
MAKEFILEMAKEIT = Imagemagick, Docker, DevOps
MAKEIMAGEMAGICKDOCKER = docker build -t my_imagemagick_docker_1:1.1 .
MAKEPULLIMAGEMAGICKDOCKER=docker pull dpokidov/imagemagick
MAKELISTIMAGES_A=docker images -a
MAKELISTIMAGES_Q=docker images -q

#ACTIONS
# make ok
ok:
	@echo "\n--- You are OK $(MAKEFILEMAKEIT) ---\n\n"

# make build (install with docker build)
build:
	@echo "\n--- Launch the install ---\n\n"
	$(MAKEIMAGEMAGICKDOCKER)

# make pull (install with pull from dpokidov/imagemagick)
pull:
	@echo "\n--- Launch the pull from dpokidov/imagemagick ---\n\n"
	$(MAKEPULLIMAGEMAGICKDOCKER)

# make lista (list all the images)
lista:
	@echo "\n--- List the docker images infos ---\n\n"
	$(MAKELISTIMAGES_A)

# make listq (list all the images id)
listq:
	@echo "\n--- List the docker id images ---\n\n"
	$(MAKELISTIMAGES_Q)


# make stop (stop all containers)
stop:
	@echo "\n--- copy and paste manually the command to stop all containers ---\n\n"
	# docker stop $(docker ps -a -q) ## you can type manually this command :)
	## @docker stop $$(docker images -aq) ## not working

# make rmc (remove all containers)
rmc:
	@echo "\n--- copy and paste manually the command to remove all containers ---\n\n"
	# docker rm -f $(docker ps -aq) ## you can type manually this command :)
	# @docker rm -f $$(docker ps -aq) ## not working

# make rmi (remove all containers)
rmi:
	@echo "\n--- copy and paste manually the command to remove all images ---\n\n"
	# docker rmi -f $(docker images -aq) ## you can type manually this command :)
	# @docker rmi -f $$(docker images -aq) ## not working

# make prune (nuke them all)
prune:
	@echo "\n--- clean all ---\n\n"
	docker system prune


# SOURCE: https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

