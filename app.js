// Push data for search 
// Initialize push client

// const pushClient = algoliasearch(
//   'NDL7O5GCZF',
//   '087d835da6647d32d1500a2a317031da' // search only API key, not admin API key
// );

// // Push data
// const pushIndex = pushClient.initIndex('test_ted_talks');
// const talksJSON = './ted_talks.json';
// require([talksJSON], function(){ })

// pushIndex.saveObjects(talksJSON, { autoGenerateObjectIDIfNotExist: false }).wait().catch(e => { console.log(e) })



// instant search
const search = instantsearch({
  indexName: 'test_ted_talks',
  searchClient: algoliasearch('NDL7O5GCZF', '087d835da6647d32d1500a2a317031da'),
  routing: true,
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 10,
  })
]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for Talks presenter (e.g. Nicholas) or category (e.g. education, technology)',
  })
]);

search.addWidgets([
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image_url}}" alt="picture" height="100"/>
          <div class="hit-name">
            Speaker: {{speakers}} 
          </div>
          <div class="hit-description">
            Talk name: {{#helpers.highlight}} { "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-tag">
            Tags: {{tags}}
          </div>
        </div>
      `,
    },
  }),
]);


search.start();
