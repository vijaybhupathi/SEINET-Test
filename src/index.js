import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import css from './App.css';


const Element = React.lazy(() => import("./App"));
const rootElement = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Suspense fallback={"...Loading"}>
      <Element className="Lazy"/>
    </Suspense>
  </React.StrictMode>,
  rootElement,
);

