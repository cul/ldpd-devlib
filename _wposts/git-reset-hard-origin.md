---
author: Sarah Witte
categories:
- four-things
date: 2014-05-09
permalink: "/git-reset-hard-origin/"
tags:
- git
title: git reset --hard origin
id: 1097
slug: git-reset-hard-origin
layout: post
---
Meredith, Bob, and I met this afternoon.  Our assignment from Alex:

<ol>
  <li>Put an issue on github</li>
  <li>create an item in our individual omeka installations. Then back up the database.</li>
  <li>create a branch called playground and break the site</li>
</ol>

I ran into some problems early on.  My commits were
  out of synch with github and nothing seemed to work: I couldn't pull or push, 
  but wasn't getting any prompt, just a long message about the importance of messages. 
  Meredith found this incredibly helpful command:<strong> git reset --hard origin</strong>,
  which seemed to solve the problem, and was the most important thing I learned today.

We also created an item in our individual Omeka installation, created a branch,
  and changed the color and font in the style.css file, and created and resolve issues.
  I'm not sure if I successfully backed up the database.  I'm sure I broke something.
