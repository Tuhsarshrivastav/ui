import React, { useState } from "react";
const data = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  },
];

const Feed = () => {
  return (
    <div
      className="bg-[#e1e5e8] w-full h-full p-6
    "
    >
      <div className="bg-white border container mx-auto h-1/2 ">
        <header className="flex p-5 px-10 justify-between pt-4 container mx-auto ">
          <div className="flex">
            <img
              className="w-20 h-20 rounded-lg absolute z-10 "
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              alt=""
            />
            <p className="pl-4 ml-20 absolute z-10">name hai </p>
          </div>
          <div className="flex ">
            <p>3 minuntes </p>
            <p className="ml-6">icon</p>
          </div>
        </header>
        <main className="flex relative">
          <div
            className="w-1/2 flex-1
          "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              alt=""
              className="w-full rounded-lg "
            />
          </div>
          <div className="w-1/2 flex flex-wrap flex-1">
            {data.map(({ image }) => (
              //   <div className="w-full ">
              <div className="w-60 px-6 last:mt-4 ">
                <img className="w-60 h-44 rounded-lg" src={image} alt="" />
              </div>
              //   </div>
            ))}
          </div>
        </main>
        <section className="p-4">
          <p className="text-gray-500">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quae commodi molestiae fuga aliquid, voluptatum enim id veniam
            dolorem, neque reiciendis pariatur ratione error natus laudantium
            consequatur nemo fugiat numquam.
          </p>
        </section>
        <hr />
        <footer className="flex py-4 px-10 justify-between">
          <div className="flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              alt=""
              className="w-16 rounded-lg mr-5"
            />
            <input
              placeholder="add comments"
              type="text"
              className="border px-4 "
            />
            <div className="border flex px-4">
              <img src="" alt="icon" className="mr-4 mt-2" />
              <img src="" alt="icon" className="mt-2" />
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sagrado_Corazon_mueble_heraldico.svg/800px-Sagrado_Corazon_mueble_heraldico.svg.png"
              className="h-12 w-12 mr-2"
              alt=""
            />
            <p>60</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sagrado_Corazon_mueble_heraldico.svg/800px-Sagrado_Corazon_mueble_heraldico.svg.png"
              className="h-12 w-12 mr-2"
              alt=""
            />
            <p>60</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sagrado_Corazon_mueble_heraldico.svg/800px-Sagrado_Corazon_mueble_heraldico.svg.png"
              className="h-12 w-12 mr-2"
              alt=""
            />
            <p>60</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Feed;
