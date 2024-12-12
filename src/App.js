import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Location from './components/Location.jsx';
import styles from './App.module.css';
import "./index.css";

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
     
        <Menu></Menu>
        <Location></Location>
      <Footer></Footer>
    </div>
  );
}

export default App;
