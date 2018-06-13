# ldpd-devlib [![Build Status](https://travis-ci.org/cul/ldpd-devlib.svg?branch=master)](https://travis-ci.org/cul/ldpd-devlib) [![Dependencies](https://img.shields.io/librariesio/github/cul/ldpd-devlib.svg)](https://libraries.io/github/cul/ldpd-devlib)
Jekyll site for the Developing Librarian Project :octocat: :books:

### Basic Information:

- __Contact:__ Marii (DIAG)
- __Target url:__ <https://devlib.library.columbia.edu>
- __Target host type:__ `s3`
- __Bucket:__ <http://cul-s3-dlst-travis-devlib-prod.s3-website-us-west-2.amazonaws.com/>
  
### Features:

- [ ] __Active updates__ 
- [ ] __Relational data__
- [x] __Student/Faculty/Librarian contributions__
- [ ] __Custom search__
- [ ] __IIIF__ (`remote` or `local`, if `remote` describe path)
- [ ] __Maps__
- [ ] __D3__
- [ ] __Other:__ ______

### Dependencies

#### JS (i.e. runtime)
- enquire.js
- superfish
- elasticLunr
- jquery
- jquery migrate

#### Ruby (i.e. dev/test)
- jekyll
- rspec
- selenium-webdriver
- chromedriver-helper
- capybara
- rack-jekyll
- wax_tasks

### Branches

#### `master`: The up-to-date production branch (Jekyll/back-end). 
- Travis pushes compiled site to `static` branch after tests pass.
- If using s3, Travis deploys compiled site to s3 prod bucket after tests pass.

#### `staging` : The staging branch (Jekyll/back-end)
- Travis pushes compiled site (rebuilt with repo name as baseurl) to `gh-pages` branch after tests pass.
- If using s3, Travis deploys compiled site (without baseurl) to s3 staging branch after tests pass.

#### `static` : The up-to-date compiled production site (static HTML)
- Built and pushed by Travis on successful commit to `master` branch.

#### `gh-pages` : A copy of the compiled staging site hosted + viewable via GitHub pages (static HTML)
- Built and pushed by Travis on successful commit to `staging` branch (viewable at `cul.github.io/REPO-NAME/`)


### Contributing

1. Clone the repository: `$ git clone https://github.com/REPO-NAME`
2. Install dependencies: `$ cd REPO-NAME && bundle`
3. Checkout your own branch: `$ git checkout -b MY-FEATURE`
4. Make your changes
5. Run tests locally: `$ bundle exec rake wax:test`
6. Push branch to remote repository.
7. Sumbit a PR to merge your branch into staging.
8. If tests pass, confirm merge into `staging` and delete your branch. This will trigger a deployment of the compiled site from staging to the `gh-pages` branch (and if you're using s3, to the staging bucket).
9. Preview the staged site (either at cul.github.io/REPO-NAME or the staging s3 bucket). If it looks good, submit a PR to merge staging into master.
10. If the tests from the PR pass, an admin will accept the merge, and Travis will deploy a backup/copy of the compiled site to the `static` branch (and if you're using s3, it will deploy to the prod s3 bucket as well).

[link to full wiki].

### Travis deployment set-up

[TO DO] Give basic steps and link to full wiki.
