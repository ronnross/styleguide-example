import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Badge.css';



const Badge = ({ style, children, className, kind, containerProps, ...other }) => {
  const classes = classnames(
    className,
    { Badge: true
    ,'Badge--notify': kind === 'notify'
    }
    ,containerProps && containerProps.className
  );

  return (
    <div
      { ...other }
      tag='span'
      style={ style }
      { ...containerProps }
      className={ classes }
    >{ children }</div>
  );
};

Badge.propTypes = {
  kind: PropTypes.oneOf(['notify'])
  ,className: PropTypes.string
  ,containerProps: PropTypes.object
}

export default Badge;
