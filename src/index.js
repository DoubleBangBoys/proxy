import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-3';


import App from './components/App';
import AndyIsCool from './components/OtherCompos/Photo-Gallery-Server/client/src/components/app';
import ZachIsKing from './components/OtherCompos/Related-Items-Server/client/src/components/App';
import MikeIsAwesome from './components/OtherCompos/Review-Server/client/src/components/App';

import './index.css';

const indexRender = (props) => {
  const id = Number(props.location.pathname.substr(1));
  return (
    <div>
      <App id={id} />
      <AndyIsCool id={id}/>
      <ZachIsKing id={id}/>
      <MikeIsAwesome id={id}/>
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
