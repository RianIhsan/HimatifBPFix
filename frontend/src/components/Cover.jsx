import React, { useEffect } from "react";
import image from "../assets/cover.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Cover = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container mx-auto rounded-lg bg-center bg-no-repeat mt-12 h-[90vh]"
      style={{ backgroundImage: `url(${image})` }}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      {/* MOBILE  */}
      <div className="h-[350px] bg-cover flex justify-center items-center bg-teal-300 md:hidden">
        <div className="">
          <h1 className="text-center text-xl text-[#020181] font-bold py-2">
            HIMATIF INFORMATION WEBSITE
          </h1>

          <h6 className="text-center px-4 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea
            impedit culpa? Delectus, et dicta!
          </h6>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="h-[550px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-[32px] mb-2 font-semibold text-[#020181] mx-auto max-w-md">
              HIMATIF <br /> INFORMATION WEBSITE
            </h1>
            <h2 className="text-[24px] max-w-xl leading-relaxed">
              Himpunan Mahasiswa Teknik Informatika Fakultas Teknik Universitas
              Islam Nusantara
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
