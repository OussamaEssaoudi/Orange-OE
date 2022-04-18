import '../style/Experience.css';
import orange from '../assets/orange.jpg';
import adpage from '../assets/AdvertisementPage.png';
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import mysql from '../assets/MySQL.png';
import nodejs from '../assets/Nodejs.png';
import mongodb from '../assets/mongodb.png';
import excel from '../assets/Excel.png';
import typescript from '../assets/TypeScript.png';
import vuejs from '../assets/Vuejs.png';
import golang from '../assets/Golang.png';
import java from '../assets/Java.png';
import django from '../assets/Django.png';
import docker from '../assets/Docker.png';
import git from '../assets/Git.png';
import figma from '../assets/Figma.png';
import vscode from '../assets/VisualStudio.png';
import eclipse from '../assets/Eclipse.png';

const competences = [
  {
    title : "FRONT END",
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
        name : "TypeScript",
        img : typescript
      },
      {
        name : "Vue.JS",
        img : vuejs
      },
    ]
  },
  {
    title : "BACK END",
    langs : [
      {
        name : "Golang",
        img : golang
      },
      {
        name : "NodeJS",
        img : nodejs 
      },
      {
        name : "Java",
        img : java
      },
      {
        name : "django",
        img : django
      },
      {
        name : "MySQL",
        img : mysql 
      },
      {
        name : "Docker",
        img : docker
      },
    ]
  },
  {
    title : "SOFTWARES",
    langs : [
      {
        name : "Git",
        img : git
      },
      {
        name : "Figma",
        img : figma
      },
      {
        name : "VSCode",
        img : vscode
      },
      {
        name : "Eclipse",
        img : eclipse
      },
    ]
  },
]

function Competences() {
  return (
    <>
    {/*nav*/}
    <div className="mt-16 ml-72">
    {competences.map((exp) => (
      <div className="mb-14">
        <div className="title pb-5">
          {exp.title}
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

export default Competences;
