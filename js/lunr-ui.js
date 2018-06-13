$.getJSON("/js/lunr-index.json", function(index_json) {
  var index       = new elasticlunr.Index;
  var store       = index_json;
  var results_div = $('#results');

  index.saveDocument(false);
  index.setRef('lunr_id');
  index.addField('pid');
  index.addField('title');
  index.addField('author');
  index.addField('categories');
  index.addField('tags');

  results_div.empty();
  results_div.hide();

  // add docs
  for (i in store) {
      index.addDoc(store[i]);
  }
  $('input#search').on('keyup', function () {
    results_div.empty();
    results_div.hide();

    var query = $(this).val();
    var params = { bool: "AND", expand: true };
    var results = index.search(query, params);

    // Show results
    for (var r in results) {
      var ref     = results[r].ref;
      var item    = store[ref];
      var excerpt = item.content.substring(0,150);
      var meta    = []
      if (item.categories.length) { meta.push(item.categories) }
      if (item.tags.length) { meta.push(item.tags) }
      console.log(item);
      var searchitem = '<div class="result"><a href="'+item.link+'" class="post-title">'+item.title+'</a> <div class="post-date small"><b>By '+item.author+'</b><br>'+meta.join(' | ')+'<div><p><em>'+excerpt+'...</em></p><br/></div>';
      results_div.append(searchitem);
    }
    results_div.show();
  });
});
