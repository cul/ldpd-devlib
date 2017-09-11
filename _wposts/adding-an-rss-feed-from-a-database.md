---
author: Sarah Witte
categories:
- skill development
- tools
date: 2013-2-05
permalink: "/adding-an-rss-feed-from-a-database/"
title: Adding an RSS feed from a database
id: 180
slug: adding-an-rss-feed-from-a-database
layout: post
---

<p>It's fairly easy to create and add an RSS feed to a WordPress blog.</p>

<p>1. Go to Appearance > widgets and drag and position the RSS widget on the sidebar.</p>

<p>2. Construct your feed. Nearly every database offers the option to create a feed from a search. If you would like your results to show the most recent articles first, sort your search results by publication date before capturing the feed. When you are satisfied with your search, click the RSS icon on the database, and then copy resulting URL (don''t worry that it looks incomplete).</p>

<pre>http://columbia.summon.serialssolutions.com/search?s.cmd=addFacetValueFilters(IsScholarly,true)&s.q=%22librarian+digital+humanities+skills%22%7E40&s.sort=Publicationdate:desc&format=rss</pre>

<p>This searched summon for: <strong> 'librarians digital humanities skills'~30</strong> limited to scholarly articles and sorted most recent first.</p>

<p>3. Paste the URL into the box in the RSS widget.</p>

<p>4. Choose a name for the feed, decide how many items to display, and press save. Because I chose to limit to scholarly articles, this feed mostly retrieves licensed content.  Is this okay, or do we wish to focus on unlicensed content?</p>
