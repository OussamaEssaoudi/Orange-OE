import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ColorSection from './Components/ColorSection';
import PageSelect from './Components/PageSelect';

function Home() {
  return (
    <div>
      <Navbar />
      <ColorSection />
      <PageSelect />
      <div className='mb-52'></div>
    </div>
  );
}

export default Home;
