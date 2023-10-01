import React, { useState, useEffect } from 'react';
import './Home.css';
const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/api/category').then(
      response => response.json()
    ).then(
      data => {
        setCategory(data.categories);
        console.log(data); // Log the value of BackendData to the console
      }
    )
  }, [])

  return (
    <div className="home">
      <div className="big-image">
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2019/08/header-images.jpg" alt="Big Image" />
      </div>
      {Array.isArray(category) && category.length > 0 && (
        <div className="category">
          <h2>Categories</h2>
          <div className="category-icons">
            {category.map((item) => (
              <div className="category-icon" key={item.id}>
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;