import algoliasearch from "algoliasearch";

var PROJECT_ID = "crwn-db-1c7d4"; // Required - your Firebase project ID
var ALGOLIA_APP_ID = "76JJ07XEU4"; // Required - your Algolia app ID
var ALGOLIA_SEARCH_KEY = "d407cecc2295f8e2c2fa07672cfe947c"; // Optional - Only used for unauthenticated search

async function unauthenticated_section_search(query) {
  var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);
  var index = client.initIndex("sections");

  const result = await index.search(query);
  const hits = result.hits;
  return hits;
}

const sectionSearch = (query) => {
  if (!PROJECT_ID) {
    console.warn("Please set PROJECT_ID in /index.js!");
  } else if (!ALGOLIA_APP_ID) {
    console.warn("Please set ALGOLIA_APP_ID in /index.js!");
  } else if (ALGOLIA_SEARCH_KEY) {
    console.log("Performing unauthenticated search...");
    return unauthenticated_section_search(query);
  } else {
  }
};

export default sectionSearch;
