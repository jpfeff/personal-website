import React from 'react';
import Header from './header/header';
import Introduction from './introduction/Introduction';
import Image from './image/Image';

function App() {
  return (
    <div>
      <Header />
      <section id="about" className="section">
        <Introduction />
        <Image />
      </section>
    </div>
  );
}

export default App;
