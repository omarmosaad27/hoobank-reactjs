import React from 'react'
import { stats } from '../constants'
const Stats = () => {
  return (
    <section className="flex p-5 w-full justify-center items-center m-auto flex-row flex-wrap sm:mb-20 mb-6">
      {stats.map((state,index) => {
        return (
          <div key={state.id} className="flex-1 flex flex-row  w-full justify-center gap-2 items-center m-3">
            <h4 className="font-poppins text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{state.value}</h4>
            <p className={`text-gradient text-sm uppercase ml-3 xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]`}>{state.title}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Stats