import '../style/ColorSection.css';
import star from '../assets/Star.png';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var color = getRandomInt(3);
//console.log(color);


function ColorSection() {
  return (
    <>
    <div className={`colorRec ${color===0 ? ("green") : (color===1 ? ("pink") : ("yellow"))} mt-4 flex`}>
      <div>
        <div className="nameStar flex ml-72 pl-4 pt-7">
          <h2>Oussama Essaoudi</h2>
          <img alt='' className='star mt-2 ml-3' src={star} />
        </div>
        <p className="desc ml-72 pl-4">Développeur full stack en recherche d'alternance de 12 mois</p>
      </div>
      <div className="ml-96 pl-44">
        <h1 className="pl-6">1.0</h1>
        <button className="blackButton ml-2 items-center justify-center">
          <a className="pl-0" href='https://github.com/OussamaEssaoudi'>Github</a>
        </button>
      </div>
    </div>
    </>
  );
}

export default ColorSection;
