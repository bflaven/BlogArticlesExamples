
## Using Pandoc to generate documentation, manuals in pdf, docx, html from markdown documents
A quick introduction to Pandoc to generate documentation files in mots common format e.g. pdf, docx, html

[Read more on flaven.fr](http://flaven.fr/2019/07/using-pandoc-to-generate-documentation-manuals-in-pdf-docx-html-from-markdown-documents)


### Requirements

If Homebrew is not installed. Here the shortest procedure to install all requirements on a Mac. Very brief but you got the essentials, if you have already installed these tools, you can jump to the point 1.

**Install Homebrew**<br />
[Check the website brew.sh](https://brew.sh/) or launch in the console the following command.

```bash
$ /usr/bin/ruby -e "$(curl -k -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Install Pandoc**<br />

```bash
#install pandoc
$ brew update && brew install pandoc

#update pandoc
$ brew update && brew upgrade pandoc
```


### Quick Presentation
You can either use the command line below or use a makefile to generate the files.

**Instructions to generate manually the files**
```bash
#go to the dir
cd [path-to-your-dir]/using_pandoc/


#OK for PDF
pandoc --toc --latex-engine=xelatex chapters/*.md -o readme_to_pdf_all.pdf

#OK for epub with no cover
pandoc --toc --latex-engine=xelatex --table-of-contents --toc-depth=3 --epub-chapter-level=3 --webtex chapters/*.md -o readme_to_pdf_all.epub

#OK for epub with cover
pandoc --toc --latex-engine=xelatex --epub-cover-image=images/cover_1563x2500.jpg --table-of-contents --toc-depth=3 --epub-chapter-level=3 --webtex chapters/*.md -o readme_to_pdf_all.epub
```



**Instructions in the makefile**
```bash
# Run "make" (or "make all") to convert to all other formats
# Run "make epub" to convert file in .epub
# Run "make pdf" to convert file in .pdf
# Run "make docx" to convert file in .docx
# Run "make html" to convert file in .html
# Run "make delete" to remove to all files and directories
```


**You can have a look to the main article on my blog** @ [flaven.fr](http://flaven.fr/2019/07/using-pandoc-to-generate-documentation-manuals-in-pdf-docx-html-from-markdown-documents)
