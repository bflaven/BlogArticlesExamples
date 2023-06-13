#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name sitemap_generator python=3.9.13
conda info --envs
source activate sitemap_generator
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_sitemap_generator.txt


# to install
pip install -r requirements_sitemap_generator.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/sitemap_generator/

[file]
python 001_sitemap_generator_python.py

# other module
# go to the env

# for sitemap
pip install requests
pip install beautifulsoup4
pip install lxml


# for app for sitemap
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

Source : https://camkode.com/posts/create-a-simple-sitemap-generator-with-python

"""



import requests
from bs4 import BeautifulSoup

SITEMAP_FILENAME_PATH_OUTPUT = 'output/sitemap_generator_python_1.xml'




# website = 'https://www.khmernokor.com'
# website = 'https://www.flaven.fr'
website = 'https://spiritpopfestival.fr/'

base_url = website
if website.endswith('/'):
    base_url = website[:-1]

scanned = []


def clean(a_eles):
    links = []
    skip_links = []
    for a in a_eles:
        link = a['href']
        if link.startswith('#') or link.startswith('mailto:') or link == '/':
            skip_links.append(link)
            continue

        if link.startswith('/'):
            link = '{}{}'.format(base_url, link)

        if link.startswith('http://') != True and link.startswith('https://') != True:
            link = '{}/{}'.format(base_url, link)

        if link.startswith(base_url) is False:
            continue

        if link not in links:
            links.append(link)

    return [links, skip_links]


def get_next_scan_urls(urls):
    links = []
    for u in urls:
        if u not in scanned:
            links.append(u)
    return links


def scan(url):
    if url not in scanned:
        print('Scan url: {}'.format(url))
        scanned.append(url)
        data = requests.get(url)
        # soup = BeautifulSoup(data.text, 'html5lib')
        soup = BeautifulSoup(data.text, 'html.parser')

        a_eles = soup.find_all('a', href=True)
        links, skip_links = clean(a_eles)

        next_scan_urls = get_next_scan_urls(links)
        print('Count next scan: {}'.format(len(next_scan_urls)))
        if len(next_scan_urls) != 0:
            for l in next_scan_urls:
                scan(l)
    return scanned


def main():
    links = scan(website)

    urls = ''
    for l in links:
        urls += f"""
    <url>
      <loc>{l}</loc>
      <lastmod>2022-07-27T02:24:08.242Z</lastmod>
      <priority>0.6</priority>
    </url>
        """

    xml = f"""
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {urls}
</urlset>
    """

    f = open(SITEMAP_FILENAME_PATH_OUTPUT, 'w')
    f.write(xml)
    f.close()


if __name__ == '__main__':
    main()
