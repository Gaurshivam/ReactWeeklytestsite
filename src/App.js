import './App.css';
import Body from './Components/Body/Body';
import Feature from './Components/Features/Feature';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Feature />
    <Body />
    <Footer />
    </div>
  );
}

export default App;
