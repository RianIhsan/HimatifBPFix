import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";
import "../CarouselButton.css";
import figma from "../assets/figma.png";
import resesi from "../assets/resesi.png";
import iphone from "../assets/iphone.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Berita = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1310 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1310, min: 1115 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1115, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    // ======================================
    // ==============Dekstop=================
    // ======================================
    <div className="container mx-auto">
      <div className="hidden md:block">
        <div className="flex justify-center">
          <div
            className="flex border-2 border-[#020181] lg:w-[80vw] pl-[50px] h-[540px] md:w-[760px] my-[40px] bg-[#020181] rounded-[12px] flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-[32px] font-[400px] m-[26px] pl-[10px] text-white py-2">
              News
            </h2>
            {/* Carousel */}
            <div>
              <div>
                <Carousel responsive={responsive} className="mx-[5vw]">
                  {/* slide 1 */}
                  <Link to="../Society">
                    <div className="flex cursor-pointer flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={figma}
                          alt=""
                          className="rounded-t-md h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                        <h1 className="text-[25px]">Figma</h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] text-red-500">
                            5 hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px]">
                          Figma menjadi website desain terbaik bagi para
                          desainer web dan mobile
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* slide 2 */}
                  <Link to="../Bhs">
                    <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={resesi}
                          alt=""
                          className="rounded-t-md h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                        <h1 className="text-[25px]">Resesi 2023</h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] text-red-500">
                            7 hari yang lalu
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* slide 3 */}
                  <Link to="../Duel">
                    <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={iphone}
                          alt=""
                          className="rounded-t-md w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                        <h1 className="text-[25px]">Resesi 2023</h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] text-red-500">
                            7 hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px]">
                          Menginjak awal tahun 2023 dengan resesi global
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* slide 4 */}
                  <Link to="../OpenAi">
                    <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                      <div className="w-auto h-[200px] bg-black rounded-t-[9px] text-center"></div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                        <h1 className="text-[25px]">Figma</h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] text-red-500">
                            5 hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px]">
                          Figma menjadi website desain terbaik bagi para
                          desainer web dan mobile
                        </p>
                      </div>
                    </div>
                  </Link>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================================
      ==============Mobile================
      ===================================== */}
      <div className="md:hidden max-[200px]:hidden">
        <div className="flex justify-center">
          <div
            className="flex border-2 border-[#020181] w-[252px] sm:w-[385px] h-[1040px] sm:h-[1348px] my-[60px] bg-[#020181] rounded-[12px] flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-[24px] sm:text-[30px] text-white m-[20px] pl-[6px] sm:pl-[22px] font-[400px]">
              News
            </h2>
            <div className="pl-[20px] sm:pl-[66px] pt-[10px]">
              {/* Slide 1 */}
              <Link to="../Society">
                <div className="group w-[19vw]">
                  <div className="flex flex-col w-[210px] h-[260px] sm:w-[261px] sm:h-[358px] font-semibold bg-white rounded-[0.64rem] group-hover:cursor-pointer duration-100 group-hover:bg-slate-200">
                    <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                      <img
                        src={figma}
                        alt=""
                        className="rounded-t-[0.58rem] h-full group-hover:opacity-90"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px]">
                      <h1 className="text-[16px] sm:text-[25px]">Figma</h1>
                      <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                        <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                        <span className="text-[9px] sm:text-[12px] text-red-500">
                          5 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[13px] w-[180px]">
                        Figma menjadi website desain terbaik bagi para desainer
                        web dan mobile
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Slide 2 */}
              <Link to="../Bhs">
                <div className="group w-[19vw] mt-[30px]">
                  <div className="flex flex-col w-[210px] h-[260px] sm:w-[261px] sm:h-[358px] font-semibold bg-white rounded-[0.64rem] group-hover:cursor-pointer duration-100 group-hover:bg-slate-200">
                    <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                      <img
                        src={resesi}
                        alt=""
                        className="rounded-t-[0.58rem] h-full group-hover:opacity-90"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px]">
                      <h1 className="text-[16px] sm:text-[25px]">
                        Resesi 2023
                      </h1>
                      <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                        <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                        <span className="text-[9px] sm:text-[12px] text-red-500">
                          7 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[13px] w-[180px]">
                        Menginjak awal tahun 2023 dengan resesi global
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Slide 3 */}
              <Link to="../Duel">
                <div className="group w-[19vw] mt-[30px]">
                  <div className="flex flex-col w-[210px] h-[340px] sm:w-[261px] sm:h-[427px] font-semibold bg-white rounded-[0.64rem] group-hover:cursor-pointer duration-100 group-hover:bg-slate-200">
                    <div className="w-auto h-[268px] rounded-t-[0.64rem] text-center">
                      <img
                        src={iphone}
                        alt=""
                        className="rounded-t-[0.58rem] h-full group-hover:opacity-90"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly ml-[20px] h-[156px] w-[200px]">
                      <h1 className="text-[16px] sm:text-[18px] w-[150px]">
                        Apple buka pabrik di China
                      </h1>
                      <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                        <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                        <span className="text-[9px] sm:text-[12px] text-red-500">
                          14 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[13px] w-[180px]">
                        Strategi Apple buka pabrik di China menjadi sorotan
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
