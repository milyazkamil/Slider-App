import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { list } from '../data';
import MainContent from './MainContent';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => (oldPerson - 1 + people.length) % people.length);
  };
  
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => (oldPerson + 1) % people.length);
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    //cleanup function
    //with this function we clear all setIntervals that mounted to our website
    return () => {
      clearInterval(sliderId);
    }
  }, [currentPerson]);

  return (
    <section className="slider-container">
      <button type="button" onClick={prevSlide}>
        <MdOutlineKeyboardArrowLeft className="icon" />
      </button>
      <MainContent people={people} currentPerson={currentPerson} />
      <button type="button" onClick={nextSlide}>
        <MdOutlineKeyboardArrowRight className="icon" />
      </button>
    </section>
  )
}
export default Carousel;