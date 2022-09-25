import React from 'react';

const BTN = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient rounded-[10px] text-primary font-poppins font-medium outline-none text-[18px]`}
    >
      Get Started
    </button>
  );
};

export default BTN;
