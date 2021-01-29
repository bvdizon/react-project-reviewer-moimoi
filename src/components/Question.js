import React, { useState } from 'react';
import useFetch from '../useFetch';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import NavButtons from './NavButtons';

const Question = () => {
  const { deck } = useParams();
  const { loading, data } = useFetch(deck);
  const [index, setIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);

  // check the current index and make sure it is within limits
  const checkNum = (num) => {
    if (num > data.length - 1) {
      return 0;
    }
    if (num < 0) {
      return data.length - 1;
    }
    return num;
  };

  // moves to next question, pass to a function to check index
  const handleNext = () => {
    setIsShown(false);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  // moves to previous question, pass to a function to check index
  const handlePrev = () => {
    setIsShown(false);
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (data) {
    var { gsx$answer: answer, gsx$question: question } = data[index];
  }

  return (
    <section className='cards'>
      {data && (
        <article className='card'>
          <div className='question'>
            <h2>Question:</h2>
            <h3>{question.$t}</h3>
          </div>
          {isShown && (
            <div className='answer'>
              <h2>Answer:</h2>
              <h3>{answer.$t}</h3>
              <div className='underline'></div>
            </div>
          )}

          <div className='buttons'>
            <button className='btn' onClick={handlePrev}>
              <FaAngleLeft />
            </button>
            <button
              className='btn show-answer'
              onClick={() => setIsShown(!isShown)}>
              {isShown ? 'Hide' : 'Show'} Answer
            </button>
            <button className='btn' onClick={handleNext}>
              <FaAngleRight />
            </button>
          </div>
        </article>
      )}

      <NavButtons />
    </section>
  );
};

export default Question;
