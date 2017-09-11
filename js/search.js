---
layout: null
---
var idx = lunr(function () {
  this.field('title')
  this.field('body')
  this.field('author')
  this.field('categories')
  this.field('tags')

  {% assign count = 0 %}
  {% for post in site.wposts %}
    this.add({
      "title": {{ post.title | jsonify }},
      "body": {{ post.content | strip_newlines | strip_html | jsonify }},
      "author": {{ post.author | jsonify }},
      "categories": {{ post.categories | jsonify }},
      "tags": {{ post.tags | jsonify }},
      "id": {{count}}
    })
    {% assign count = count | plus: 1 %}
    {% endfor %}
    {% for page in site.pages %}
      this.add({
        "title": {{ page.title | jsonify }},
        "body": {{ page.content | strip_newlines | strip_html | jsonify }},
        "id": {{count}}
      })
      {% assign count = count | plus: 1 %}
      {% endfor %}
})

var store = [
  {% for post in site.wposts %}{
    'type': "Post",
    'title': {{post.title | jsonify}},
    'link': {{ post.url | relative_url | jsonify }},
    'category': {{ post.categories | join: " / " | downcase | jsonify }},
    'tags': {{ post.tags | join: " / " | downcase | jsonify }},
    'excerpt': {{ post.content | strip_newlines | strip_html | truncatewords: 30 | jsonify }}
  },{% endfor %}
  {% for page in site.pages %}{
    'type': "Page",
    'title': {{page.title | jsonify}},
    'link': {{ page.url  | relative_url | jsonify }},
    'category': "",
    'tags': "",
    'excerpt': {{ page.content | strip_newlines | strip_html | truncatewords: 30 | jsonify }}
  }{% unless forloop.last %},{% endunless %}{% endfor %}
]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = idx.search(query);
    // Show results
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><b>'+store[ref].type+': </b><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a> <div class="post-date small">'+store[ref].category+' '+store[ref].tags+'<div><p><em>'+store[ref].excerpt+'</em></p><br/></div>';
      resultdiv.append(searchitem);
    }
  });
});
