import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
