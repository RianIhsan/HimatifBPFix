import trophy from "../assets/1.png";
import tape from "../assets/3.png";
import React, { useState } from "react";

const Achievments = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://source.unsplash.com/500x500?male",
      caption: "ini adalah caption",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/500x500?programming",
      caption: "ini adalah caption",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/500x500?cars",
      caption: "ini adalah caption",
    },

    {
      id: 4,
      src: "https://source.unsplash.com/500x500?bikes",
      caption: "ini adalah caption",
    },
    {
      id: 5,
      src: "https://source.unsplash.com/500x500?future",
      caption: "ini adalah caption",
    },
    {
      id: 6,
      src: "https://source.unsplash.com/500x500?internet",
      caption: "ini adalah caption",
    },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-[59px]">
      <div
        className="bg-[#020181] w-[130px] h-[50px] mb-10 rounded-md flex justify-center items-center max-[500px]:w-[100px] ml-6"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2 className="text-white font-semibold">Achievment</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 px-[50px] lg:grid-cols-3 gap-3">
        {images.map((image) => (
          <div
            key={image.id}
            className="col-span-3 md:col-span-1 flex justify-center items-end"
          >
            <img
              className="aspect-[4/3] object-cover rounded-lg shadow-md cursor-pointer w-[50vw]"
              src={image.src}
              alt={image.src}
              onClick={() => openModal(image)}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-once="true"
            />
            <p className="z-100 absolute bg-black opacity-60 text-white p-2 mb-2 rounded-lg">
              {image.caption}
            </p>
          </div>
        ))}
        {selectedImage && (
          <div className=" fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="flex items-center justify-center h-screen bg-black bg-opacity-80">
              <img
                className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-lg shadow-md"
                src={selectedImage.src}
                alt={selectedImage.src}
              />
              <button
                className="fixed top-0 right-0 m-4 p-2 bg-white rounded-full text-black hover:bg-gray-300 focus:outline-none"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievments;
