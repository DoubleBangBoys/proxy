import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-3';
import Modal from 'react-modal';


import AndyIsCool from './components/OtherCompos/Photo-Gallery-Server/client/src/components/app';
import ZachIsKing from './components/OtherCompos/Related-Items-Server/client/src/components/App';
import MikeIsAwesome from './components/OtherCompos/Review-Server/client/src/components/App';
import App from './components/App';

// import './index.css';

const indexRender = (props) => {
  const id = Number(props.location.pathname.substr(1));
  return (
    <div>
      <div className="HeaderImage" />
      <div className="flexBoxStart">
        <AndyIsCool id={id} Modal={Modal} />
        <App id={id} />
        <div className="PurchaseImage" />
      </div>
      <ZachIsKing id={id} />
      <div className="HaveQuestion" />
      <div className="FrequentlyBought" />
      <MikeIsAwesome product={id} />
      <div className="FooterImage" />
    </div>
  );
};

render(<Router history={browserHistory}>
  <Route path="/">
    <IndexRoute component={indexRender} />
    <Route path="/:id" component={indexRender} />
  </Route>
</Router>, document.getElementById('root'));

export default indexRender;

