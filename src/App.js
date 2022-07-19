import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import Card from '../src/components/Card/index';
import 'flexboxgrid';
import '../src/styles/reset.css'

function App() {
  return (
    <div>
      <Header />
        <div className="container">
          <main>
            <div>
              <h1>Latest on the Property Listing</h1>
              <Card />
            </div>
          </main>
        </div>
      <Footer />
    </div>
  );
}

export default App;
