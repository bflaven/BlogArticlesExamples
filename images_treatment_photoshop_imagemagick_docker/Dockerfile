# getting Imagemagick in Docker
ARG IM_VERSION=7.0.10-1

FROM fedora:27

RUN dnf -y install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm && \
    yum -y update

WORKDIR /my_imagemagick_docker_1

RUN yum install -y libtool-ltdl libjpeg libjpeg-devel libpng libpng-devel libtiff libtiff-devel libwebp libwebp-devel LibRaw LibRaw-devel jxrlib git make automake gcc pkgconf ghostscript-core && \
    git clone https://github.com/ImageMagick/ImageMagick.git && \
    cd ImageMagick && git checkout ${IM_VERSION} && \
    ./configure && make && make install && \
    cd ../ && \
    rm -rf ./ImageMagick && \
    yum remove -y git make automake gcc libjpeg-devel libpng-devel libtiff-devel libwebp-devel LibRaw-devel && \
    yum clean all

ENTRYPOINT ["convert"]

CMD ["echo", "You can start Bulk processing images with Imagemagick and Docker."]