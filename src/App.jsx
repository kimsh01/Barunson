import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Head from '../src/common/header/Head';
import Footer from '../src/common/footer/Footer';
import Home from '../src/components/Home';

function App() {
  return (
    <>
      <Head />
        <Home />

      <Footer />
    </>
  );
}

export default App;
