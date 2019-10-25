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

// Données
import categories from 'src/data/categories';
import posts from 'src/data/posts';

/**
 * Code
 */
const Blog = () => {
  return <div className="app">
    {/* React.createElement(Navigation, { categories: [.., ..] }, '') */}
    <Navigation categories={categories} />
    <Posts />
    <Footer />
  </div>;
};

/**
 * Export
 */
export default Blog;
