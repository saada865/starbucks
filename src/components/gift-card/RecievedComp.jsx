import React from "react";

const Recieved = () => {
  return (
    <div className="bg-green-100 pl-24 pr-10 mt-5 pb-5 pt-10">
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row text-center items-center space-x-4">
          <h2 className="font-semibold text-2xl tracking-wide">
            Received a gift card?
          </h2>
          <h2 className="text-neutral-600 text-xl">Earns 2★Stars per $1</h2>
          <a className="border-2 border-black rounded-2xl py-1 px-2" href="">
            Add or reload
          </a>
          <a className="bg-black text-white rounded-2xl py-1 px-2" href="">
            Check balance
          </a>
        </div>
        <div className="text-right">
          <p className="text-green-800 font-semibold">
            <a href="">Card Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recieved;
