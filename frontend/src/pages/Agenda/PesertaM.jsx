import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PesertaM = () => {
  const [peserta_makrab, setPesertaMakrab] = useState([]);
  const [keterangan, setKet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getPeserta_makrab();
  }, []);

  const getPeserta_makrab = async () => {
    const response = await axios.get("http://localhost:5000/pesertaM");
    setPesertaMakrab(response.data);
  };

  const updatePesertaM = async (index, newKeterangan) => {
    try {
      const updatedPeserta = {
        ...peserta_makrab[index],
        keterangan: newKeterangan,
      };
      await axios.patch(
        `http://localhost:5000/pesertaM/${peserta_makrab[index].id}`,
        updatedPeserta
      );
      const updatedPesertaList = [...peserta_makrab];
      updatedPesertaList[index] = updatedPeserta;
      setPesertaMakrab(updatedPesertaList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="text-center max-w-md mx-auto md:w-full">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 bg-clip-text text-transparent">
            ABSENSI PESERTA MAKRAB
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
                  <th className=" py-3 px-2 lg:px-9">Keterangan</th>
                  <th className=" py-3 px-2 lg:px-9">Action</th>
                </tr>
              </thead>
              <tbody>
                {peserta_makrab.map((peserta, index) => (
                  <tr key={peserta.id} className="text-teal-900">
                    <td className="py-3 px-2 lg:px-9">{index + 1}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.nama}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.kelas}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.whatsapp}</td>
                    <td className="py-3 px-2 lg:px-9">{peserta.keterangan}</td>
                    <td className="py-3 px-2 lg:px-9">
                      <div className="flex">
                        <div className="select is-fullwidth">
                          <select
                            value={peserta.keterangan}
                            onChange={(e) =>
                              updatePesertaM(index, e.target.value)
                            }
                            className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                          >
                            <option
                              value=""
                              disabled
                              selected
                              className="hidden"
                            ></option>
                            <option value="hadir">Hadir</option>
                            <option value="izin">Izin</option>
                            <option value="sakit">Sakit</option>
                            <option value="Tanpa Keterangan">
                              Tanpa Keterangan
                            </option>
                          </select>
                        </div>
                      </div>
                    </td>
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

export default PesertaM;
