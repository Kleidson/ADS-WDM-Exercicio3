import React from 'react';
import Cabecalho from './components/cabecalho';
import 'rsuite/dist/styles/rsuite-default.css';
import Carros from './components/Carros';
//import { Button, Icon, ButtonToolbar } from 'rsuite';
//import Rodape from './components/rodape';
//import Array from './components/Array';
//import Objeto from './components/Objeto';



function App() {
  return (
    <div> 

      <Cabecalho titulo="Carros"/>

      <Carros/>
      
      {/*<p>Vamos estudar o React para entender melhor o React Native</p>

      <Array />
      
      
      <ButtonToolbar>
        <Button color="green"><Icon icon='save' />  Salvar</Button>
        <Button color="yellow"><Icon icon='refresh' />  Limpar</Button>
        <Button color="red"><Icon icon='hand-o-left' />  Cancelar</Button>
      </ButtonToolbar>

      
      <Rodape />

      <Objeto/>*/}
      

    </div>
  );
}

export default App;
