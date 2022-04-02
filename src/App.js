import React, { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel
} from "react-instantsearch-dom";
import "./App.css";
import Stats from "./Stats.js";
import Content from "./Content";
import Facet from "./Facet";

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="WZVF4P0PVG"
        apiKey="6c92fbc43cd2693ba1cb3536837ca0d3"
        indexName="dev_med_articles"
      >
        <main className="search-container">
          <Configure
            hitsPerPage={3}
            attributesToSnippet={["content:14"]}
            snippetEllipsisText={" [...]"}
          />
          <div className="right-panel">
            <div id="hits">
              {/* Uncomment the following widget to add hits list */}
              <Content />
            </div>
            <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
              <SearchBox translations={{ placeholder: "Search articles" }} />
            </div>
            <div id="stats">
              {/* Uncomment the following widget to add search stats */}
              <Stats />
            </div>
            <div id="pagination">
              {/* Uncomment the following widget to add pagination */}
              <Pagination />
            </div>
          </div>
          <div className="left-panel">
            <div id="categories">
              {/* Uncomment the following widget to add categories list */}
              <Panel header="Categories">
                <Facet attribute="categories" />
              </Panel>
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
