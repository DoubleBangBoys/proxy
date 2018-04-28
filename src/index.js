import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-3';
import Modal from 'react-modal';

import PhotoGallery from './components/OtherCompos/Photo-Gallery-Server/client/src/components/app';
import RelatedItems from './components/OtherCompos/Related-Items-Server/client/src/components/App';
import ReviewServer from './components/OtherCompos/Review-Server/client/src/components/App';
import App from './components/App';


const indexRender = (props) => {
  const id = Number(props.location.pathname.substr(1));
  return (
    <div>
      <div className="HeaderImage" />
      <div className="flexBoxStart">
        <PhotoGallery id={id}
          Modal={Modal}
        />
        <App id={id} />
        <div className="PurchaseImage" />
      </div>
      <div className="bucketDivider" />
      <RelatedItems id={id} />
      <div className="bucketDivider" />
      <div className="HaveQuestion" />
      <div className="bucketDivider" />
      <div className="FrequentlyBought" />
      <div className="bucketDivider" />
      <ReviewServer product={id} />
      <div className="footerDivider" />
      <div className="FooterImage" />
    </div>
  );
};

render(

  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={indexRender} />
      <Route path="/:id" component={indexRender} />
    </Route>
  </Router>, document.getElementById('root'));

export default indexRender;

