import React from 'react';
import PropTypes from 'prop-types';

export default class LabIcon extends React.Component {
  static defaultProps = {
    variant: 'mineral',
  }

  static propTypes = {
    type: PropTypes.oneOf([
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-top',
      'calendar',
      'coin',
      'collapse-closed',
      'collapse-open',
      'check',
      'dropdown-closed',
      'dropdown-open',
      'edit',
      'eye-closed',
      'eye-opened',
      'track',
      'key',
      'logout',
      'lupe',
      'minus',
      'plus',
      'reload',
      'remove',
      'sort',
      'trash',
      'upload',
    ]).isRequired,
    variant: PropTypes.oneOf([
      'teal',
      'mineral',
      'disabled',
    ]),
  }


  render() {
    const { type, variant } = this.props;
    return <span className={`lab-icon ${variant} ${type}`} />;
  };
}
