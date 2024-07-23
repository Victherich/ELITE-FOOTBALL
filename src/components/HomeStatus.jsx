import React, { useContext } from 'react';
import '../CSS/HomeStatus.css';
import { Context } from './Context';

const footballers = [
  { name: 'Lionel Messi', imgSrc: 'path-to-messi.jpg' },
  { name: 'Cristiano Ronaldo', imgSrc: 'path-to-ronaldo.jpg' },
  { name: 'Neymar Jr', imgSrc: 'path-to-neymar.jpg' },
  { name: 'Kylian Mbappe', imgSrc: 'path-to-mbappe.jpg' },
  { name: 'Kevin De Bruyne', imgSrc: 'path-to-debruyne.jpg' },
  { name: 'Mohamed Salah', imgSrc: 'path-to-salah.jpg' },

];

const HomeStatus = () => {
    const {login}=useContext(Context)
    console.log(login)
  return (
    <div className='StoriesWrap'>
       <div className='Story'>
          <img src="" alt="YourStory" />
          <p>Your story</p>
        </div> 
      {footballers.map((footballer, index) => (
        <div className='Story' key={index}>
          <img src={footballer.imgSrc} alt={footballer.name} />
          <p>{footballer.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeStatus;
