import React, { Component } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import SearchResultPost from './SearchResultPost';
import SearchResultUser from './SearchResultUser';

class SearchPage extends Component {
  renderSearchResults = () => {
    const { searchResults } = this.props;

    return searchResults.map(data => {
      switch (data.type) {
        case 'user': {
          return <SearchResultUser key={uid(data)} data={data} />;
        }
        case 'post': {
          return <SearchResultPost key={uid(data)} data={data} />;
        }
        default: {
          return null;
        }
      }
    });
  }

  render() {
    const { searchResults } = this.props;

    if (!searchResults.length) {
      return (
        <main className="explore">
          <section className="people">
            <ul className="people__list">
              <li className="people__person">
                <div className="people__column">
                  <div className="people__info">
                    <br />
                    <span className="people__username">Search Somethink</span>
                    <br />
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </main>
      );
    }

    return (
      <main className="explore">
        <section className="people">
          <ul className="people__list">
            {this.renderSearchResults()}
          </ul>
        </section>
      </main>
    );
  }
}

SearchPage.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
};

export default SearchPage;
