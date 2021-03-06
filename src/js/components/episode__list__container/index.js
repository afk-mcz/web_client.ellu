import PropTypes from 'prop-types';
import React from 'react';
import Remarkable from 'remarkable';

import Page from '../../containers/page';
import List from '../list';

import CategoryList from '../../containers/portfolio/filter__categories';
import TagList from '../../containers/portfolio/filter__tags';
import ImageList from '../../containers/portfolio/images__list';

const Container = ({
  id,
  isFetching,
  item,
  items,
  route,

  meta_url,
  meta_title,
  meta_description,
  meta_preview,
}) => {
  var md = new Remarkable();
  var text = item.text || '';
  var mdr = md.render(text);

  return (
    <Page
      id={id}
      isFetching={isFetching}
      meta_url={meta_url}
      meta_title={meta_title}
      meta_description={meta_description}
      meta_preview={meta_preview}
    >
      <h1>{item.title}</h1>
      {item.dateCreated != null && (
        <div className="date-container full-width">
          <span className="date">{item.dateCreated} |</span>
          <span className="date"> {item.dateUpdated}</span>
        </div>
      )}
      <div className="podcast-info">
        <img className="podcast-cover" src={item.image} alt={item.title} />
        <div className="podcast-column">
          <div className="podcast-description no-margin ">
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: mdr }}
            />
          </div>
          <ul className="align-end subscribe-buttons">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="button pink"
                href={item.feed}
              >
                rss
              </a>
            </li>
            {item.iTunesURL != null && (
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="button blue"
                  href={item.iTunesURL}
                >
                  iTunes
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <h3>Episodes</h3>
      <List items={items} route={route} className="full-width" />
    </Page>
  );
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  item: PropTypes.shape().isRequired,
  meta_description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  route: PropTypes.string.isRequired,

  meta_description: PropTypes.string,
  meta_url: PropTypes.string,
  meta_title: PropTypes.string,
  meta_preview: PropTypes.string,
};

export default Container;
