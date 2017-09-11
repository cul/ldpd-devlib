---
author: Sarah Witte
categories:
- evaluating new technologies
date: 2013-11-01
permalink: "/stemming-and-the-library-catalog/"
title: Stemming and the Library Catalog
id: 906
slug: stemming-and-the-library-catalog
layout: post
---
When this site went live,  we all agreed that we would post regularly. 
  A schedule was proposed and circulated, and we all signed up to post once every
  five weeks.  With enthusiasm, I signed up to post in October.   The topics were
  left open, and now that the semester is in full swing, whenever I have a free moment
  I've been thinking about stemming  in CLIO, Columbia's new Blacklight discovery
  interface, specifically stemming in the catalog.

<a href='http://en.wikipedia.org/wiki/Stemming' >Stemming</a>, or lemmatisation is a feature used in many SOLR
  databases. It functions by reducing a word to its 'stem' and then adding all
  possible suffixes. So a search for <strong>Methodism</strong> retrieved <strong>methodist(s)</strong>
  and <strong>methodism(s)</strong> but it also retrieved every record containing
  the terms<strong> method, methods, methodical, etc.</strong>  It also affected
  results because in some cases the abbreviated stem was stored in the indexes, so
  a search for <strong>'methodis*</strong>' would not retrieve methodist or methodism
  because the term had been stored as '<strong>method</strong>'.

This also affects facets and the ability to sort results. Although the default relevance ranking
  displays matching terms at the top of the results list, facets are based on the
  full results set, and re-sorting by date has confused researchers who no longer
  see their terms in the results. This stemmed search for <strong>orientalism</strong>
  retrieves more than 52,000 records:

<a href='https://blogs.cul.columbia.edu/clio/files/2013/11/10-29-2013-2-26-14-PM.png'><img
  title='Orientalism with stemming' alt='Orientalism-with-stemming' src='https://blogs.cul.columbia.edu/clio/files/2013/11/10-29-2013-2-26-14-PM.png'
  width='703' height='561' /></a> If we turn off stemming, the facets will be
  more relevant, terms will be stored in their full, unstemmed version so use of wildcards
  will retrieve full results, but inexperienced users who don't know to use asterisks
  and other wildcard symbols will not find all possible results.

I serve on the planning committee for the CLIO Blacklight interface and we decided to survey our Columbia
  University Libraries/Information Services colleagues.   Based on our own discussion
  and feedback from librarians, faculty, and others who expressed dismay at retrieving
  'irrelevant results,' we have decided to disable stemming in the catalog. The
  new, unstemmed search retrieves 2% of the results retrieved in the stemmed <strong>orientalism</strong>
  search.  Facets now relate specifically to the search term, and sorting  is useful.
  However, searchers will need to remember to use the wildcard to get all possible
  endings for their searches: <strong>orientalis*</strong> will retrieve <strong>orientalist(s)
  orientalism(s)</strong> etc.

<a href='https://blogs.cul.columbia.edu/clio/files/2013/11/11-8-2013-11-47-06-AM.png'><img
  title='unstemmed orientalism' alt='unstemmed-orientalism' src='https://blogs.cul.columbia.edu/clio/files/2013/11/11-8-2013-11-47-06-AM.png'
  width='642' height='450' /></a>

We made a decision that seemed to make sense based on feedback and search logs, but we will continue monitor the database and 
  searching.   It may be that other stemmers will become available that will give
  more accurate and nuanced results.   It is great to be developing our own interface,
  where we have the ability to make changes based on our environment, but it is also
  scary to have the freedom to make these decisions.
