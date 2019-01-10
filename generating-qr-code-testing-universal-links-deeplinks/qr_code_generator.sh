#!/bin/bash


# #### USAGE
# cd /go-to-the-directory-where-you-to-create-your-QR-code/
# sh qr_code_generator_1.sh


#install the library qrencode to generate the QR code 
brew install qrencode


#install the library zbar to analyse the QR code
brew install zba

#generate the QR codes for the main navigation of the website
qrencode -o flaven_home.png "http://www.flaven.fr"
qrencode -o flaven_blog.png "http://www.flaven.fr/blog/"
qrencode -o flaven_resume.png "http://flaven.fr/bruno-flaven-resume-cv/"
qrencode -o flaven_clients.png "http://flaven.fr/clients-et-realisations/"
qrencode -o flaven_about_3wdoc.png "http://flaven.fr/a-propos-de-3wdoc/"
qrencode -o flaven_books.png "http://flaven.fr/livres/"
qrencode -o flaven_quotes.png "http://flaven.fr/les-citations/"


#analyse the newly generated QR codes
zbarimg flaven_home.png
zbarimg flaven_blog.png
zbarimg flaven_resume.png
zbarimg flaven_clients.png
zbarimg flaven_about_3wdoc.png
zbarimg flaven_books.png
zbarimg flaven_quotes.png


#create a QR code from a .vcf
cat forrest_gump_vcf.vcf | qrencode -o "forrest_gump_qr_code.png"
zbarimg forrest_gump_qr_code.png
echo "\033[1;33m ### forrest_gump_qr_code.png is created ### \033[0m"

#get rid of the margin -m option
cat forrest_gump_vcf.vcf | qrencode -o "forrest_gump_qr_code_nomargin.png" -m 0
echo "\033[1;33m ### forrest_gump_qr_code_nomargin.png is created ### \033[0m"


#change the dots size with -s option
cat forrest_gump_vcf.vcf | qrencode -o "forrest_gump_qr_code_dots.png"  -s 4
echo "\033[1;33m ### forrest_gump_qr_code_dots.png is created ### \033[0m"





