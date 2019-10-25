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
 * 1. Navigation détecte le click sur une catégorie et prévient Blog ---
 * 2. 2.1 Blog filtre la liste des posts en fonction de la catégorie cliquée ---
 *    2.2 Blog fournit la liste filtrée à Posts
 * 3. Posts affiche la liste filtrée
 */
// const Blog = () => {
//   const handleClick = (event) => {
//     const clickedCategory = event.target.innerText;
//     console.log('Blog réagit au click', clickedCategory);

//     const filteredPosts = posts.filter((post) => post.category === clickedCategory);
//     console.log(filteredPosts);
//   };

//   return <div className="app">
//     {/* React.createElement(Navigation, { categories: [.., ..] }, '') */}
//     <Navigation categories={categories} callback={handleClick} />
//     <Posts posts={posts} />
//     <Footer />
//   </div>;
// };

// On hérite de la classe React.Component, qui va nous fournir une méthode
// pour déclencher des refresh / re-rendering.
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    };
    // ALERTE !!! C'est un truc relou, on va s'en débarasser.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedCategory = event.target.innerText;
    console.log('Blog réagit au click', clickedCategory);

    const filteredPosts = posts.filter((post) => post.category === clickedCategory);
    console.log(filteredPosts);

    this.setState({ posts: filteredPosts });
  }

  /**
   * La méthode render d'un composant React (implémenté avec une classe)
   * a pour rôle de générer un élément React.
   */
  render() {
    return <div className="app">
      {/* React.createElement(Navigation, { categories: [.., ..] }, '') */}
      <Navigation categories={categories} callback={this.handleClick} />
      <Posts posts={this.state.posts} />
      <Footer />
    </div>;
  }
}

/**
 * Export
 */
export default Blog;
