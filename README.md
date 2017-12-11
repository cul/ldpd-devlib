# breaking the code / developing librarian 3.0

<a href="https://travis-ci.org/cul/ldpd-devlib"><img src="https://travis-ci.org/cul/ldpd-devlib.svg?branch=master"/></a>
<a href='https://gemnasium.com/github.com/cul/ldpd-devlib'><img src="https://gemnasium.com/badges/github.com/cul/ldpd-devlib.svg" alt="Dependency Status" /></a>

Stealth jekyll replacement of devlib wordpress site, with liquified wp theme + functionality.
Includes: author boxes, post loops, tagging, categories, and Lunr search.

`master` branch contains working files, `s3` branch has compiled site files for deploying to [s3](https://developinglibrarian.library.columbia.edu) and `gh-pages` branch deploys to the test instance hosted with [github pages](https://cul.github.io/ldpd-devlib/). 

*The only differences between the latter branches are that: `s3` includes the production `baseurl` (if needed), and `gh-pages` includes the `gh-baseurl` (`/ldpd-devlib/`) for deploying from `_config.yml`*
