import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MyLayout from './pages/layout/index';
function App() {
  return (
    <>
      <BrowserRouter>
          <MyLayout></MyLayout>
      </BrowserRouter>
    </>

  );
}

export default App;
