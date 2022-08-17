import { BrowserRouter as Router  } from 'react-router-dom';

// Make up
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';


// Components
import SoundBar from './subComponents/SoundBar';
import AnimatedRoutes from './subComponents/AnimatedRoutes';


function App() {
  return (
    <>
      <Router> 
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <SoundBar />
          <AnimatedRoutes />
        </ThemeProvider>
      </Router>
    </>
  );    
}

export default App;

