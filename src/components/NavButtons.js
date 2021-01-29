import React from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavButtons = () => {
  return (
    <nav>
      <button>
        <Link to='/'>
          <FaHome />
        </Link>
      </button>
      <button>
        <a href='https://forms.gle/TAqSZwmMrfwgqsQU7' target='_blank'>
          <FaPlus />
        </a>
      </button>
    </nav>
  );
};

export default NavButtons;
