import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../../icon';

// styles
import styles from '../accordion.styl';

class AccordionTitle extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    content: PropTypes.node,
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
  };

  handleClick(e) {
    this.props.onClick(e, this.props);
  }

  render() {
    const { active, className, content, icon, children } = this.props;
    const classes = classNames(styles.title, className, {
      [`${styles.isActive}`]: active,
    });

    return (
      <div className={classes} onClick={this.handleClick}>
        <Icon className={styles.iconLeft} size={16} name={icon} color={active === 1 ? '#fff' : '#a4a3a3'} />
        {children ? children : content}
        <Icon
          className={styles.iconRight}
          color={active ? '#fff' : '#a4a3a3'}
          size={18}
          name={active ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        />
      </div>
    );
  }
}

export default CSSModules(AccordionTitle, styles);
