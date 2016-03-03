import React, { PropTypes } from 'react';
import Category from '../containers/Category.js';

const CategoryList = ({ categories, onCategoryClick }) => (
    <nav>
    <ul>
        {
            categories.map( category =>
                     <Category
                         key={category.id}
                         category={ category }
                         onClick={
                             () => onCategoryClick(category.id,category.name)
                         }
                     />
                     )}
                 </ul>
             </nav>
);

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onCategoryClick: PropTypes.func.isRequired
};

export default CategoryList;