import React from 'react';
import ListaDeContato from './Components/Lista de Contatos';
import { GlobalStyled } from './Style/Styles'
import BarraSuperior from './Components/Barra Superior';
import MenuLateral from './Components/Menu Lateral';

const App = () => {
  return (
    <>
        <GlobalStyled   />
        <BarraSuperior></BarraSuperior>
        <ListaDeContato></ListaDeContato>
    </>
    
  );
};

export default App;