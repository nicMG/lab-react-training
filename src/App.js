import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Carousel from './components/Carousel';
import NumberTable from './components/NumberTable';
import Dice from './components/Dice';
import ClickablePicture from './components/ClickablePicture';


function App() {
  return (
    <div>
      <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female's
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Dice/>
      
      <ClickablePicture
        img="./assets/images/maxence.png"
        imgClicked="./assets/images/maxence-glasses.png"
      />

      <Carousel 
        imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
        ]}/>
      <NumberTable limit={15}/>
    </div>
  );
}

export default App;
