// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Feed
 var feedUrl = 'http://www.france24.com/en/top-stories/rss';

// The XMLHttpRequest object that tries to load and parse the feed.
var req;

function main() {
  req = new XMLHttpRequest();
  req.onload = handleResponse;
  req.onerror = handleError;
  req.open('GET', feedUrl, true);
  req.send(null);
}

// Handles feed parsing errors.
function handleFeedParsingFailed(error) {
  var feed = document.getElementById('feed');
  feed.className = 'error';
  feed.innerText = 'Error: ' + error;
}

// Handles errors during the XMLHttpRequest.
function handleError() {
  handleFeedParsingFailed('Failed to fetch RSS feed.');
}

// Handles parsing the feed data we got back from XMLHttpRequest.
function handleResponse() {
  var doc = req.responseXML;
  if (!doc) {
    handleFeedParsingFailed('Not a valid feed.');
    return;
  }
  buildPreview(doc);
}

// The maximum number of feed items to show in the preview.
 // var maxFeedItems = 5;
 /* check overflow: hidden; in feed.css */
 var maxFeedItems = 15;

// Where the more stories link should navigate to.
var moreStoriesUrl;

function buildPreview(doc) {
  // Get the link to the feed source.
  var link = doc.getElementsByTagName('link');
  var parentTag = link[0].parentNode.tagName;
  if (parentTag != 'item' && parentTag != 'entry') {
    moreStoriesUrl = link[0].textContent;
  }

  var feed = document.getElementById('feed');
  // Set ARIA role indicating the feed element has a tree structure
  feed.setAttribute('role', 'tree');
  

  var entries = doc.getElementsByTagName('entry');
  if (entries.length == 0) {
    entries = doc.getElementsByTagName('item');
  }
  var count = Math.min(entries.length, maxFeedItems);


  
  /* LOOP */
  for (var i = 0; i < count; i++) {
    item = entries.item(i);

    // Grab the title for the feed item.
    var itemTitle = item.getElementsByTagName('title')[0];
    if (itemTitle) {
      itemTitle = itemTitle.textContent;
    } else {
      itemTitle = 'Unknown title';
    }

    
    // Grab the description.
    var itemDesc = item.getElementsByTagName('description')[0];
    if (!itemDesc) {
      itemDesc = item.getElementsByTagName('summary')[0];
      if (!itemDesc) {
        itemDesc = item.getElementsByTagName('content')[0];
      }
    }
    if (itemDesc) {
      itemDesc = itemDesc.childNodes[0].nodeValue;
    } else {
      itemDesc = '';
    }

    /* ADDED */
    // Grab the image
    var itemImg = item.getElementsByTagName('thumbnail')[0].getAttribute('url');
    if (itemImg) {
      itemImg = item.getElementsByTagName('thumbnail')[0].getAttribute('url');
    } else {
      itemImg = 'Unknown image';
    }

    // Grab the link for the feed item.
    var itemLink = item.getElementsByTagName('link')[0];
    if (itemLink) {
      itemLink = itemLink.textContent;
    } else {
      itemLink = 'Unknown link';
    }

    /* // ADDED */

    var itemDivImg = document.createElement('li');
      // No class in use
    // itemDivImg.className = 'itemDivImg';
    
    var img = document.createElement('img');
    img.setAttribute('src', itemImg);
    itemDivImg.appendChild(img);     
    feed.appendChild(itemDivImg);

    /* ADDED */
    var title = document.createElement('a');
      title.className = 'item_title';
      /* Add the link */
      title.setAttribute('href', itemLink);
      title.setAttribute('target', '_blank');
      /* DEBUG if needed */
      // console.log(title);
      title.id = 'item' + i;
      title.innerText = itemTitle;
      title.tabIndex = 0;
      itemDivImg.appendChild(title);
      /* // ADDED */
      feed.appendChild(itemDivImg);
  }

}
/* Load the stuff */
document.addEventListener('DOMContentLoaded', main);
