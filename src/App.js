import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import 'flexboxgrid';
import '../src/styles/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={ <Home /> } />
            </Routes>
          </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
