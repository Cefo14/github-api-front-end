import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import styles from './styles';

const CardRoute = ({ title, imageURL, routePath }) => (
  <>
    <Link href={routePath}>
      <div data-testid="CardRoute" className="card card-route__card">
        <div className="card-route__card-avatar-container">
          <figure className="image is-128x128">
            <img
              alt="route"
              src={imageURL}
              width="128px"
              height="128px"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="has-text-centered is-size-4">
          { title }
        </div>
      </div>
    </Link>
    <style jsx>{styles}</style>
  </>
);

CardRoute.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  routePath: PropTypes.string,
};

CardRoute.defaultProps = {
  title: '',
  imageURL: '',
  routePath: '',
};

export default memo(CardRoute);
