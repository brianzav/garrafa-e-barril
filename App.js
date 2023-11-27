// App.js
import React from 'react';
import { CartContextProvider } from './src/CartContextProvider'; // Ajusta la ruta según sea necesario
import TelaPadrao from './src/Componentes/TelaPadrao';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <CartContextProvider>
      <TelaPadrao>
        <Rotas />
      </TelaPadrao>
    </CartContextProvider>
  );
}
