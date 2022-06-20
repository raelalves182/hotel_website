import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import 'flexboxgrid';
import '../src/styles/reset.css'

function App() {
  return (
    <div>
      <Header />
        <div className="container">
          <main>Conteúdo</main>
        </div>
      <Footer />
    </div>
  );
}

export default App;
