import '../style/Experience.css';
import Anglais from '../assets/Queen.png';
import Francais from '../assets/French.png';
import Arabe from '../assets/City.png';
import Design from '../assets/Design.png';
import Esports from '../assets/Game.png';
import Football from '../assets/Stadium.png';
import Lecture from '../assets/Reading.png';
import phone from '../assets/Phone.png';
import mail from '../assets/Mail.png';
import linkedin from '../assets/LinkedIn.png';

const topics = [
  {
    title : "LANGUES",
    langs : [
      {
        name : "Anglais",
        img : Anglais 
      },
      {
        name : "Francais",
        img : Francais
      },
      {
        name : "Arabe",
        img : Arabe
      },
    ]
  },
  {
    title : "LOISIRS",
    langs : [
      {
        name : "Design",
        img : Design
      },
      {
        name : "Esports",
        img : Esports
      },
      {
        name : "Football",
        img : Football
      },
      {
        name : "Lecture",
        img : Lecture
      },
    ]
  },
  {
    title : "CONTACT",
    langs : [
      {
        name : "0647986946",
        img : phone
      },
      {
        name : "essaoudi37@gmail.com",
        img : mail
      },
      {
        name : "linkedin.com/in/oussama-essaoudi1",
        img : linkedin
      },
    ]
  },
]

function AboutMe() {
  return (
    <>
    {/*nav*/}
    <div className="mt-16 ml-72 flex">
    {topics.map((topic) => (
      <div className="mr-36">
        <div className="title pb-4">
          {topic.title}
        </div>
        
        <div className='langs mt-0'>
          {topic.langs.map((lang) => (
          <div className='flex pt-7'>
            <img alt='' className='' src={lang.img} />
            <span className='lang pl-2'>{lang.name}</span>
          </div>)
          )}
        </div>
      </div>)
          )}

    </div>


    
    </>
  );
}

export default AboutMe;
