import '../style/Experience.css';
import orange from '../assets/orange.jpg';
import adpage from '../assets/AdvertisementPage.png';
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import mysql from '../assets/MySQL.png';
import nodejs from '../assets/Nodejs.png';
import mongodb from '../assets/mongodb.png';
import excel from '../assets/Excel.png';

const experiences = [
  {
    title : "DÉVELOPPEUR FRONT END",
    desc : "Université de Rouen Normandie  |   2021 - 2022",
    infos : [
      "Projet annuel : Équipe de 8 personnes (méthode scrum)",
      "Développement d’un site web et d’une application mobile permettant le contrôle d’un système d’irrigation à distance"
    ],
    langs : [
      {
        name : "ReactJS",
        img : react 
      },
      {
        name : "Tailwind",
        img : tailwind 
      },
      {
        name : "MySQL",
        img : mysql 
    },
    ]
  },
  {
    title : "DÉVELOPPEUR FULL STACK",
    desc : "Université de Rouen Normandie  |   2021",
    infos : [
      "Développement d’un site web permettant la gestion de maintenance des ressources matériels de l’université."
    ],
    langs : [
      {
        name : "ReactJS",
        img : react 
      },
      {
        name : "NodeJS",
        img : nodejs 
      },
      {
        name : "MongoDB",
        img : mongodb 
    },
    ]
  },
  {
    title : "DÉVELOPPEUR VBA - STAGE DE 5 MOIS",
    desc : "autoneum France SASU  |   Aubergenville 78410  |   2021",
    infos : [
      "Développement d’un outil permettant l’évaluation du budget et la gestion de la charge de travail.",
    ],
    langs : [
      {
        name : "Excel VBA",
        img : excel 
      },
    ]
  },
]

function Experience() {
  return (
    <>
    {/*nav*/}
    <div className="mt-16 ml-72">
    {experiences.map((exp) => (
      <div className="mb-16">
        <div className="title pb-5">
          {exp.title}
        </div>
        <div className="infos">
        <div className="mb-3">{exp.desc}</div>
        <div>
          {exp.infos.map((info) => (
        <p>{info}<br/>
        </p>)
          )}
        </div>
        
        </div>
        <div className='langs flex mt-6'>
          {exp.langs.map((lang) => (
          <div className='flex pr-10'>
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

export default Experience;
