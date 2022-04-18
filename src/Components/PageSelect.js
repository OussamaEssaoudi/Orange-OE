import '../style/PageSelect.css';
import { useState } from 'react';
import orange from '../assets/orange.jpg';
import adpage from '../assets/AdvertisementPage.png';
import star from '../assets/Star.png';
import Experience from './Experience';
import Competences from './Competences';
import AboutMe from './AboutMe';

function PageSelect() {

  const [selected, setSelected] = useState(0);
  return (
    <>
    {/*nav*/}
    <div className="mt-10 flex">
      <div className="lineLeft"></div>
      <div className="flex">
        <div className={`option cursor-pointer ${selected === 0 ? "border-x-2 border-t-2" : "border-b-2"} `} onClick={()=> (setSelected(0))}>
          Expèriences
        </div>
        <div className={`option cursor-pointer ${selected === 1 ? "border-x-2 border-t-2" : "border-b-2"} `} onClick={()=> (setSelected(1))}>
          Competences
        </div>
        <div className={`option cursor-pointer ${selected === 2 ? "border-x-2 border-t-2" : "border-b-2"} `} onClick={()=> (setSelected(2))}>
          About Me
        </div>
      </div>
      <div className="lineRight"></div>
    </div>


    {selected === 0 ? <Experience/> : null}
    {selected === 1 ? <Competences/> : null}
    {selected === 2 ? <AboutMe/> : null}
    
    </>
  );
}

export default PageSelect;
