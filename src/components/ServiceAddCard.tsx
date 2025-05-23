"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ServiceAddCardProps {
  id: string;
  name: string; // Added the missing 'name' property
  description: string;
  price: number;
  onItemCountChange: (id: string, count: number) => void;
}

function ServiceAddCard({ id, onItemCountChange }: ServiceAddCardProps) {
  const [itemAdded, setItemAdded] = React.useState(false);
  const [itemCount, setItemCount] = React.useState(0);

  useEffect(() => {
    onItemCountChange(id, itemCount);
  }, [itemCount, onItemCountChange, id]);

  const clickHandler = () => {
    setItemAdded(!itemAdded);
    if (!itemAdded) {
      setItemCount(1);
    } else {
      setItemCount(0);
      setItemAdded(false);
    }
  };

  const posCountHandler = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const negClickHandler = () => {
    setItemCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount <= 0) {
        setItemAdded(false);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <div className="h-full w-full flex justify-between ">
      <div className="relative w-40 h-32 bg-gray-400 rounded-lg">
        <Image
          src="https://previews.123rf.com/images/lacheev/lacheev2203/lacheev220300467/183798923-portrait-of-happy-handsome-moustached-ac-maintenance-service-worker-holding-screwdriver-looking-at.jpg"
          alt="AC Check-Up Service"
          fill
          className="object-cover object-right rounded-lg"
        />
      </div>

      <div className="h-full w-full flex flex-col justify-start px-4 gap-2 py-2">
        <h3 className="font-semibold ">AC Check-Up</h3>
        <div className="h-full w-full flex justify-between items-center">
          <div className="">
            <p className="text-gray-500 inline-block">Starts from</p>
            <br />
            <div className=" p-2 mt-2 rounded-xl font-bold inline-block">
              <span className="text-red-500 line-through">₹500</span>
              <span className="text-green-600 text-lg"> ₹299</span>
            </div>
          </div>

          {itemAdded ? (
            <div className="border-2 py-2 px-6 border-lightpurple bg-lightpurple text-white rounded-2xl flex gap-4 font-bold">
              <button onClick={negClickHandler}>-</button>
              {itemCount}
              <button onClick={posCountHandler}>+</button>
            </div>
          ) : (
            <button
              onClick={clickHandler}
              className="border-2 py-2 px-6 border-lightpurple text-lightpurple rounded-2xl font-semibold"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceAddCard;
