import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import Card from '../src/components/Card/index';
import 'flexboxgrid';
import '../src/styles/reset.css'
import { Box, Content, Title } from './styles/home';

function App() {
  return (
    <div>
      <Header />
        <div className="container">
          <main>
            <Content>
              <section>
                <Title>Latest on the Property Listing</Title>
                <div>
                  {Array.from({ length: 4 })?.map((_, index) => (
                    <Card key={index} />
                  ))}
                </div>
              </section>

              <section>
                <Title>Nearby Listed Properties</Title>
                <div>
                  {Array.from({ length: 4 })?.map((_, index) => (
                    <Card key={index} />
                  ))}
                </div>
              </section>

              <section>
                <Title>Top Rated Properties</Title>
                <div>
                  {Array.from({ length: 4 })?.map((_, index) => (
                    <Card key={index} />
                  ))}
                </div>
              </section>

              <Box>
                <div>
                  <h1>Try Hosting With Us</h1>
                  <span>Earn extra just by renting your property...</span>
                  <div>
                    <button>Become A Host</button>
                  </div>
                </div>
              </Box>
            </Content>
          </main>
        </div>
      <Footer />
    </div>
  );
}

export default App;
