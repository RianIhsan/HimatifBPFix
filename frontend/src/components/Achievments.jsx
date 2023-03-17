import Achievement1 from "../assets/achievement1.jpeg";
import React, { useState } from "react";

const Achievments = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: Achievement1,
      caption: "Juara III Pagar Nusa UNINUS",
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
        className="bg-[#020181] w-[130px] h-[50px] mb-10 rounded-md flex justify-center items-center max-[500px]:w-[100px] ml-[-39px] sm:ml-[-13px] md:ml-[-13px] lg:ml-0.5 xl:ml-7 "
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2 className="text-white font-semibold">Achievment</h2>
      </div>
      <div
        className="grid grid-cols-3 md:grid-cols-3 px-[50px] lg:grid-cols-3 gap-3"
        cd
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="col-span-3 md:col-span-1 flex justify-center items-end hover:scale-90 ease-in duration-300"
          >
            <img
              className="aspect-[4/3] object-cover shadow-md cursor-pointer w-[100vw]"
              src={image.src}
              alt={image.src}
              onClick={() => openModal(image)}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-once="true"
            />
            <p className="z-100 absolute bg-black bg-opacity-80 text-[10px] sm:text-[14px] md:text-[16px] text-white p-2 mb-2 rounded-lg">
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
                className="fixed top-0 right-0 m-6 px-4 rounded-full focus:outline-none hover:scale-105 duration-150 ease-out"
                onClick={closeModal}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 -0.5 17 17"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="si-glyph si-glyph-button-error"
                >
                  <title>970</title>

                  <defs></defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g transform="translate(1.000000, 0.000000)" fill="#FFFFFF">
                      <path
                        d="M13.646,2.371 C10.535,-0.739 5.469,-0.74 2.358,2.371 C-0.753,5.483 -0.752,10.548 2.358,13.66 C5.469,16.77 10.534,16.771 13.646,13.66 C16.758,10.547 16.757,5.483 13.646,2.371 L13.646,2.371 Z M3.587,12.431 C1.148,9.993 1.146,6.028 3.58,3.594 C6.014,1.159 9.979,1.162 12.418,3.6 C14.856,6.038 14.857,10.004 12.424,12.438 C9.988,14.872 6.024,14.869 3.587,12.431 L3.587,12.431 Z"
                        class="si-glyph-fill"
                      ></path>
                      <path
                        d="M10.164,11.063 C9.982,11.063 9.845,10.991 9.776,10.922 L8.009,9.157 L6.314,10.852 C6.248,10.918 6.095,10.998 5.891,10.998 C5.738,10.998 5.507,10.952 5.288,10.733 C5.067,10.513 5.018,10.295 5.017,10.153 C5.013,9.965 5.086,9.823 5.157,9.753 L6.881,8.028 L5.201,6.35 C5.049,6.197 4.922,5.723 5.321,5.325 C5.546,5.1 5.767,5.053 5.914,5.053 C6.097,5.053 6.234,5.125 6.301,5.194 L8.009,6.9 L9.705,5.204 C9.773,5.137 9.925,5.058 10.129,5.058 C10.283,5.058 10.514,5.104 10.733,5.324 C11.111,5.703 11.035,6.134 10.864,6.304 L9.138,8.03 L10.875,9.766 C10.942,9.834 11.021,9.986 11.021,10.19 C11.021,10.344 10.976,10.573 10.756,10.792 C10.531,11.016 10.311,11.063 10.164,11.063 L10.164,11.063 L10.164,11.063 Z"
                        class="si-glyph-fill"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievments;
