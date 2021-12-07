import './App.css';
import React, { useState } from "react";

const images = "https://source.unsplash.com/random"
const subject = ["tokyo", "paris", "barcelona", "london", "medellin", "berlin"]
const theme = subject[Math.floor(Math.random() * subject.length)];

const App = (props) => {

  const [currentImage, setCurrentImage] = useState(0)

  const handleClick = () => {
    const length = images.length - 1
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    })
  }

  return (
    <section className="App">

      <header className="title">
        <h1>{theme}</h1>
        <h2>A photography project<br/> by Unsplash</h2>
      </header>

      <figure>

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt="" src={images + "/" + theme} onClick={handleClick} />
      </figure>

    </section>
  );
}

export default App;
