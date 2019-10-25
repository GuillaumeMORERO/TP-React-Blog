import React from 'react';

import './styles.sass';

const Navigation = (props) => {
  // On prépare les liens de la navigation.
  const menuItems = props.categories.map((category) => {
    return <li key={category} className="nav-item">
      {/* React.createElement(a, { href: '#', onClick: fn() }, category) */}
      <a href="#" onClick={props.callback}>{category}</a>
    </li>;
  });

  // return React.createElement(div, {}, 'ici, bientôt, une navigation');
  return <ul className="app-navigation">{menuItems}</ul>;
};

export default Navigation;
