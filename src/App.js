import PersonIcon from '@mui/icons-material/Person'; 
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddIcon from '@mui/icons-material/Add';  
import NextPlanIcon from '@mui/icons-material/NextPlan';  
import './App.css';
import MainContainer from './component/MainContainer';
import Pic from './image/pic.jpg';
import { useEffect } from 'react';
import Pin from './component/Pin';
import Data from './component/Data'

function App() {
  useEffect(()=> {
    const allIcon = document.querySelectorAll(".iconContainer");
    function setMenusActive(){
      allIcon.forEach((n) => n.classList.remove('active'));
      this.classList.add('active')
    }
    allIcon.forEach(n => n.addEventListener('click', setMenusActive))
  } , [])
  return ( 
    <>
    <div className='App'>
      <div className='container'>
        <img src={Pic} alt='' className='logo' />
        <div className='submenu'>
          <div>
            <MainContainer icon={<PersonIcon/>}/>
            <MainContainer icon={<NotificationsIcon/>}/>
            <MainContainer icon={<ChatIcon/>}/>
          </div>
          <div>
            <MainContainer icon={<FavoriteIcon/>}/>
          </div>
          <div>
            <MainContainer icon={<QuestionMarkIcon/>}/>
            <MainContainer icon={<AddIcon/>}/>
          </div>
        </div>
     </div>
      <main>
        <div className='searchBox'>
          <input type='text' placeholder='Search' />
          <div className='Search'>
             <NextPlanIcon/>
          </div>
        </div>
        <div className='mainContainer'>
          {Data && Data.map((data) => <Pin 
            key ={data.id}
            pinSize = {data.size}
            imgSrc={data.imgSrc}
            name={data.name}
            link={data.link}
            />)}
          
        </div>
      </main>
      </div>
    </>
  );
}

export default App;
