import React from 'react';
import { features } from '../constants';
import BTN from './BTN';
const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex rounded-[20px] feature-card p-6 ${
        index !== features.length - 1 && 'mb-4 '
      }`}
    >
      <div className="rounded-full w-[64px] h-[64px]  flex justify-center items-center bg-dimBlue">
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h3 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
          {title}
        </h3>
        <p className="font-poppins font-normal text-[16px] leading-[24px] mb-1 text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};
const Business = () => {
  return (
    <section
      id="features"
      className="flex w-full  text-white flex-col md:flex-row sm:py-16 py-6"
    >
      <div className="flex flex-1 flex-col justify-center items-start ">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business,
          <br /> we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <BTN styles="mt-10" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center  md:mr-10 mr-0 md:mt-0 mt-10 relative">
        {features.map((feature) => {
          return <FeatureCard key={feature.id} {...feature} />;
        })}
      </div>
    </section>
  );
};

export default Business;
