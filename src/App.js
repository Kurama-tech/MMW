import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
      <>
      <Header />
      <main id="main">
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/contact us" element={<Users />} /> */}
        </Routes>
      </main>
      
      </>
       
    
  );
}

export default App;
