import React from 'react';

const Navigation = (props) => {
  // On prépare les liens de la navigation.
  const menuItems = props.categories.map((category) => {
    return <a href="#" className="nav-item">{category}</a>;
  });

  // return React.createElement(div, {}, 'ici, bientôt, une navigation');
  return <div className="app-navigation">{menuItems}</div>;
};

export default Navigation;
