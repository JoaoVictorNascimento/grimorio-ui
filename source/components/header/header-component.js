import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { omit } from '../../helpers';

import styles from './header.styl';

const Header = ({ className, contentClassName, showLogo, logo, onLogoClick, children, ...elementProps }) => {
  const fullClassName = cx(className, styles.header, {
    [styles.showLogo]: showLogo,
  });

  const fullContent = cx(contentClassName, styles.content, {
    [styles.showLogo]: showLogo,
  });

  return (
    <header className={fullClassName} {...omit(elementProps, ['onLogoClick'])}>
      {showLogo &&
        <div className={styles.logo} onClick={onLogoClick}>
          {logo}
        </div>}

      <div className={fullContent}>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  showLogo: PropTypes.bool,
  logo: PropTypes.node,
  onLogoClick: PropTypes.func,
};

Header.defaultProps = {
  showLogo: false,
};

export default memo(Header);
