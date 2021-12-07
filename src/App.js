import './App.css';
import React, { useState } from "react";
import curry1 from "./assets/curry1.jpg";
import curry2 from "./assets/curry2.jpg";
import curry3 from "./assets/curry3.jpg";
import curry4 from "./assets/curry4.jpg";
import curry5 from "./assets/curry5.jpg";
import curry6 from "./assets/curry6.jpg";

const images = [curry1, curry2, curry3, curry4, curry5, curry6 ];

const Loading = ({calculatedWidth}) => (
<aside>
  <div className="loading-bar">
    <label htmlFor="images-loaded">Loading all your favorites images...</label>
    <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
  </div>
</aside>
)

const App = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    })
  }

  const handleImgLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section className="App">

      <header className="title">
        <h1>Curry</h1>
        <h2>A photography project<br/> by Maxime Mondet</h2>
      </header>

      <figure>
        {numLoaded < images.length && (<Loading calculatedWidth={(numLoaded / images.length) * 100 } /> )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img alt="" key={imageURL} src={imageURL} onClick={handleClick} onLoad={handleImgLoad} style={{opacity: currentImage === index ? 1 : 0}}/>
        ))}
      </figure>

    </section>
  );
}

export default App;
