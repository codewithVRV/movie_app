import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainRoutes from './routes/MainRoutes';
import NavBar from './components/NavBar/NavBar';


// context import

import ThemeContext from './context/ThemeContext';
import { useEffect, useState } from 'react';


function App() {

  const [theme, setTheme] = useState("dark")
  useEffect(() => {
    const userTheme = localStorage.getItem("app-theme")
    if(userTheme != null) {
      setTheme(userTheme);
    }
  })

  return (
    <>
      {/* <h1>Thank You God!</h1> */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='app-wrapper' data-theme={theme}>
          <NavBar />
          <MainRoutes />
        </div>
        
      </ThemeContext.Provider>
      
    </>
  )
}

export default App;
