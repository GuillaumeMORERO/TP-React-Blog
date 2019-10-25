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

/**
 * Filtrage des posts :
 * 1. Navigation détecte le click sur une catégorie et prévient Blog
 * 2. - Blog filtre la liste des posts en fonction de la catégorie cliquée
 *    - Blog fournit la liste filtrée à Posts
 * 3. Posts affiche la liste filtrée
 */
const Blog = () => {
  const handleClick = (event) => {
    console.log('Blog réagit au click', event.target.innerText);
  };

  return <div className="app">
    {/* React.createElement(Navigation, { categories: [.., ..] }, '') */}
    <Navigation categories={categories} callback={handleClick} />
    <Posts posts={posts} />
    <Footer />
  </div>;
};

/**
 * Export
 */
export default Blog;
