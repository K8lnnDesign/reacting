
import './App.css';

// import WelcomeMessage from './components/WelcomeMessage';
// import CustomHeader from './components/CustomHeader';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Right from './components/Right';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      {/* <CustomHeader />
      <WelcomeMessage /> */}

      <div className="body">
        <Header />
        <div className="container">
          <Menu />
          <Main />
          <Right />
        </div>
        <Footer />
      </div>

    </div >
  );
}

export default App;
