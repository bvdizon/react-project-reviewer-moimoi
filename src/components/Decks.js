import React from 'react';
import { Link } from 'react-router-dom';
import useFetchDecks from '../useFetchDecks';
import Loading from './Loading';

const Decks = () => {
  const { loading, data } = useFetchDecks();

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <h1>List of Decks</h1>
      <div className='underline'></div>
      <section className='decks'>
        {data &&
          data.map((data, index) => {
            return (
              <div key={index}>
                <Link
                  to={`/review/${data}`}
                  style={{ textTransform: 'capitalize' }}>
                  {data}
                </Link>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Decks;
