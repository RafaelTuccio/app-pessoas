import './App.css';
import Navbar from './Component/Navbar';
import Container from './Component/Container'
import Footer from './Component/Footer'
import Table from './Component/Table';
function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Table />
      </Container>
      <Footer />
    </>
  );
}

export default App;
