import React from 'react';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { GlobalStyle } from  './style';
import routes from './routes/index.js';
import MainHeader from './components/main-header'
function App() {
  return (
    <HashRouter>
      <MainHeader/>
      <GlobalStyle></GlobalStyle>
      {renderRoutes (routes)}
    </HashRouter>
  );
}

export default App;
