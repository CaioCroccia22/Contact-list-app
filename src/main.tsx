import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App'
import {Cadastro} from './Containers/Cadastro'
import { Provider } from 'react-redux';
import { Store } from './Store/Store';
import { GlobalStyled } from './Style/Styles'
// import Cadastro from './Containers/Cadastro/index'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <Provider store={Store}>
            <BrowserRouter>
              <GlobalStyled   />
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="cadastro" element={<Cadastro/>} />
              </Routes>
            </BrowserRouter>
          </Provider>
  </StrictMode>
);
