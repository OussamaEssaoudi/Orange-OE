import '../style/Navbar.css';
import orange from '../assets/orange.jpg';
import adpage from '../assets/AdvertisementPage.png';
import search from '../assets/Search.png';

function Navbar() {
  return (
    <>
    <div className="blackRec">
    </div>
    <div className="Nav flex pl-72 mt-6">
      <img alt='' className='logo' src={orange} />
      <h2 className="oDev pl-5 pt-3">
        <a href= ' https://developer.orange.com/'>Orange Developer</a>
      </h2>
      <ul className="pt-5">
        <li><a href= 'https://developer.orange.com/products/'>Products</a></li>
        <li><a href= 'https://developer.orange.com/resources/'>Resources</a></li>
        <li><a href= 'https://developer.orange.com/blog/'>Blog</a></li>
        <li><a href= 'https://developer.orange.com/customer-stories/'>Customer stories</a></li>
      </ul>
      <img alt='' className='search mt-3 ml-28 cursor-pointer' src={search}  onClick={() => (alert("Oups!\nJ'ai pas codé ça."))}/>
      <button className="orangeButton flex pt-2 mt-2 ml-7" onClick={() => (alert("Oups!\nJ'ai pas codé ça."))}>
        <img alt='' className='adpage ml-5' src={adpage} />
        <span className="pl-2">My apps</span>
      </button>
    </div>
    </>
  );
}

export default Navbar;
