/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants enfants éventuels
import Navigation from 'src/components/Navigation';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// Styles et assets
import './styles.sass';

/**
 * Code
 */
const Blog = () => {
  return <div className="app">
    <Navigation /> {/* React.createElement(Navigation, {}, '') */}
    <Posts />
    <Footer />
  </div>;
};

/**
 * Export
 */
export default Blog;
