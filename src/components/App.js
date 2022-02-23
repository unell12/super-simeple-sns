import React, { useState } from 'react'
import AppRouter from './Router';
import fbase from '../fbase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; supersimplesns {new Date().getFullYear()}</footer>
    </>
  )
}

export default App;
