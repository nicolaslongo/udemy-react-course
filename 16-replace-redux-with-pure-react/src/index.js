import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./hooks-store/products-store";

import './index.css';
import App from './App';
// import ProductsProvider from "./context/products-context";

// ProductsProvider approach: this is not good for state that changes so much. API Context does not
// perform too well and is not optimitzed for such usage
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ProductsProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter> 
//   </ProductsProvider>
// );

configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
