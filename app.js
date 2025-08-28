import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/component/header.js';
import Main from './src/component/main.js';
import Footer from './src/component/footer.js';


function App() {
  // Tab to edit
  return(
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
