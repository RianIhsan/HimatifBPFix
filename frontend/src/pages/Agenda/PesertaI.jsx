import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";
  const PesertaI = () => {
    const [peserta_icc, setPesertaIcc] = useState([]);
  
    const getPeserta_icc = async () => {
      try {
        const res = await supabase.from("user").select();
        setPesertaIcc(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getPeserta_icc();
    }, []);
  

  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="text-center max-w-sm mx-auto md:w-full">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 bg-clip-text text-transparent">
            DATA PESERTA ICC
          </h1>
        </div>

        <div className="px-4 mx-auto md:w-full">
          <div className="my-6 flex justify-center mx-4">
            <table className="border-2 border-teal-900 shadow-sm">
              <thead className="border-b-2 border-teal-900 bg-gradient-to-tr from-teal-900 via-teal-800 to-teal-900">
                <tr className="text-white">
                  <th className=" py-3 px-2 lg:px-9">No</th>
                  <th className=" py-3 px-2 lg:px-9">Name</th>
                  <th className=" py-3 px-2 lg:px-9">Kelas</th>
                  <th className=" py-3 px-2 lg:px-9">Whatsapp</th>
                </tr>
              </thead>
              <tbody>
                {peserta_icc.map((peserta, index) => (
                  <tr key={peserta.id} className="text-teal-900">
                    <td className="py-3 px-2 lg:px-9">{index + 1}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.nama}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.kelas}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.wa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesertaI;
