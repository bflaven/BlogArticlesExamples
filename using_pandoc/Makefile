# Makefile
# 
# Converts Markdown to other formats (PDF, DOCX, EPUB) using Pandoc
#
# Run "make" (or "make all") to convert to all other formats
#
# Run "make epub" to convert file in .epub
# Run "make pdf" to convert file in .pdf
# Run "make docx" to convert file in .docx
# Run "make html" to convert file in .html
#
# cd /Users/brunoflaven/Documents/02_copy/blog_flaven_fr/_using_pandoc/source/
#
   

#VALUES
BUILD = output
MAKEFILE = Makefile
OUTPUT_FILENAME = made_with_pandoc
COVER_EPUB_FILENAME = cover_1563x2500.jpg
CHAPTERS = chapters/*.md
TOC = --toc --toc-depth=3
IMAGES_FOLDER = images
LATEX_CLASS = report
IMAGES = $(IMAGES_FOLDER)/*
COVER_IMAGE = $(IMAGES_FOLDER)/$(COVER_EPUB_FILENAME)
ARGS = $(TOC)

#make all or just make
all: output

#add in output the different formats
output: epub pdf docx html

#make delete - Clean the place
delete:
	rm -r $(BUILD)
	@echo "\n--- file and directories are DELETED! ---\n\n"

#make pdf
pdf: $(BUILD)/pdf/$(OUTPUT_FILENAME).pdf

# command to make pdf
$(BUILD)/pdf/$(OUTPUT_FILENAME).pdf: $(MAKEFILE) $(CHAPTERS)
	mkdir -p $(BUILD)/pdf
	pandoc $(ARGS) -V documentclass=$(LATEX_CLASS) -o $@ $(CHAPTERS)
	@echo "\n--- DONE for PDF ---\n\n"

#make epub
epub: $(BUILD)/epub/$(OUTPUT_FILENAME).epub


#command to make epub
$(BUILD)/epub/$(OUTPUT_FILENAME).epub: $(MAKEFILE) $(CHAPTERS) $(IMAGES) $(COVER_IMAGE)
	mkdir -p $(BUILD)/epub
	pandoc $(ARGS) --epub-cover-image=$(COVER_IMAGE) -o $@ $(CHAPTERS)
	@echo "\n--- DONE for EPUB ---\n\n"

#make docx
docx: $(BUILD)/docx/$(OUTPUT_FILENAME).docx

$(BUILD)/docx/$(OUTPUT_FILENAME).docx: $(MAKEFILE) $(CHAPTERS)
	mkdir -p $(BUILD)/docx
	pandoc $(ARGS) -o $@ $(CHAPTERS)
	@echo "\n--- DONE for DOCX ---\n\n"


#make html
html: $(BUILD)/html/$(OUTPUT_FILENAME).html

$(BUILD)/html/$(OUTPUT_FILENAME).html: $(MAKEFILE) $(CHAPTERS)
	mkdir -p $(BUILD)/html
	pandoc $(ARGS) --standalone --to=html5 -o $@ $(CHAPTERS)
	cp -R $(IMAGES_FOLDER)/ $(BUILD)/html/$(IMAGES_FOLDER)/
	@echo "\n--- DONE for HTML ---\n\n"



	


