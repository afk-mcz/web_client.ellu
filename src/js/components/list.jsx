import PropTypes from 'prop-types';
import React from 'react';
import Page from './page.jsx';
import Row from './row.jsx';

const List = ({ items, route }) => {
    return (
        <ul className="vertical-list">
            {
                items.map( item =>
                     <Row
                         key={item.id}
                         route={route}
                         {...item}
                     />
                     )
            }
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        title: PropTypes.string,
        dateUpdated: PropTypes.string
    }).isRequired).isRequired,
    route: PropTypes.string.isRequired
};

export default List;
