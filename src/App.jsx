import React from 'react';
import ListaDeContato from './Components/Lista de Contatos';
import { GlobalStyled } from './Style/Styles'


const App = () => {
  return (
    <>
        <GlobalStyled   />

        <ListaDeContato></ListaDeContato>
    </>
    
  );
};

export default App;