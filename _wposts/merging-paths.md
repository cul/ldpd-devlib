---
author: Sarah Witte
categories:
- development
- skill development
date: 2014-06-05
images:
- Screen-shot-2014-06-05-at-1.51.23-PM.png
- IMG_2406.jpg
permalink: "/merging-paths/"
tags:
- git
title: Merging Paths
id: 1127
slug: merging-paths
layout: post
---
<a href='{{ "/wp-content/uploads/2014/06/IMG_2406.jpg" | relative_url }}'>
  <img class='size-medium wp-image-1126 ' alt='Meredith Levin, Nick Patterson, and Bob Scott in the Studio@Butler' src='{{ "/wp-content/uploads/2014/06/IMG_2406-225x300.jpg" | relative_url }}' width="300"/>
</a>
<div style="width:300"><i>Meredith Levin, Nick Patterson, Bob Scott and
  Sarah Witte (photographer) in the Studio@Butler</i></div>

<br/><br/>

The developers had a great meeting this morning.  We went through Alex's assignments, and are all up to speed on the first two, and close on the third. It has been a month since we've all met; it was good to be together again.

<strong>Assignment 1:</strong>
- You should have a working version of Omeka running on your virtual servers independent of the one on GitHub. This includes a working MAMP or LAMP, a database, omeka software install, db.ini file configured.
- Your git should be working and you should be able to synch with <a href='https://github.com/elotroalex/devlib.git'>https://github.com/elotroalex/<wbr />devlib.git</a>

<strong>Assignment 2:</strong>
- Someone change the <a href='http://readme.md'>readme.md</a> page to reflect our project (rather than the Omeka boilerplate) and push it to github. Everyone else should pull it.
- Someone <a href='http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging'>create a branch</a> named <i>design</i> and push it. Everyone should pull it.
- Working on the <i>design</i> branch, someone change the background color on the style.css. Remember we are working with the default theme, called <i>Thanks, Roy</i>, so far. The style.css folder is to be found there. Push it. The rest pull.
- This is a good opportunity for you to start understand how Omeka works in the back end. You can start by understanding <a href='http://omeka.org/codex/Understanding_Default_Theme_Files'>Default Theme Files</a> and <a href='http://omeka.org/codex/Theme_Writing_Best_Practices'>Theme Writing Best Practices</a>.

<strong>Assignment 3:</strong>
- Put in an 'issue' on github. It doesn't have to be real, but extra cookies for putting something down that we actually need to do eventually.
- Create an item on your individual installations. Then backup the database.
- Create a branch called playground, and break the site. Yes. Break it. Whoever breaks it first wins.


I am slowly getting a feel for Git.  At first, it was hard for me to parse the error messages.  I would search them verbatim on the internet, but then felt I was blindly typing in the suggested commands without understanding what I was doing.  The error messages and the excellent <a href='https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line'>help pages</a> on the Github site are now starting to make sense.   This morning we were all editing our style.css files pretty much at the same time, so I understand why I got error messages when trying to pull from the design branch.   I still need to work out the git sequences (add, commit, push, -m) to avoid the error messages, but I feel that it is coming.

<a href='{{ "/wp-content/uploads/2014/06/Screen-shot-2014-06-05-at-1.51.23-PM.png" | relative_url }}'><img class='aligncenter' alt='unmerged paths' src='{{ "/wp-content/uploads/2014/06/Screen-shot-2014-06-05-at-1.51.23-PM.png" | relative_url }}' width='478' height='190' /></a>
