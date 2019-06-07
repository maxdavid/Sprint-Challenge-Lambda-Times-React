import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const {headline, tab, img, author} = props.data;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt={author} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
