import React, { memo } from 'react';

import cheemsImage from '../../assets/images/cheems.png';
import styles from './styles';

const NoResults = () => (
  <>
    <div
      data-testid="NoResults"
      className="no-results__container"
    >
      <img
        alt="cheems"
        loading="lazy"
        src={cheemsImage}
        width="250px"
        height="250px"
      />
      <div className="is-size-5">
        No se encontraron resultados
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

export default memo(NoResults);
