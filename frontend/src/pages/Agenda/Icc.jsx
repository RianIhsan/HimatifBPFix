import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { z } from "zod";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import withReactContent from "sweetalert2-react-content";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { supabase } from "../../supabase";
const Icc = () => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [wa, setWhatsapp] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const validationSchema = z.object({
    nama: z.string().min(1, { message: "Nama lengkap harus diisi" }),

    kelas: z.string().min(1, { message: "Kelas harus di isi" }),
    whatsapp: z
      .string()
      .min(10, { message: "Nomor Whatsapp setidaknya harus 10 karakter" })
      .max(13, { message: "Nomor whatsapp tidak bisa lebih dari 13" }),
  });
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      nama: "",
      kelas: "A1",
      whatsapp: "",
    },
  });

  const MySwal = withReactContent(Swal);

  const onSubmit = handleSubmit(async (data) => {
    const { nama, kelas, whatsapp } = data;
    const payload = { nama, kelas };
    try {
      setLoading(true);
      const { error } = await supabase
        .from("user")
        .insert({ ...payload, wa: whatsapp });
      if (error) {
        setLoading(false);
        MySwal.fire({
          title: "Telah terjadi error",
          text: error.message,
          icon: "error",
        });
      }
      setLoading(false);
      if (!error) {
        MySwal.fire({
          title: "Selamat Anda Berhasil terdaftar!",
          text: "Kini anda telah terdaftar di ICC 2023",
          icon: "success",
        });
      }
    } catch (err) {
      throw err;
    }
  });

  return (
    <div className="container mx-auto my-24">
      <Navbar />
      <h1 className="text-[#FF7800] flex justify-center py-12 text-2xl font-semibold md:hidden">
        <span className="text-[#2E3BC4]">ICC</span> : Informatika Coding Camp
      </h1>

      <div className="flex flex-wrap justify-center items-center">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="border-2 p-6 md:p-6 rounded-lg shadow-lg mb-12">
            <h1 className="text-center pb-2 text-2xl font-semibold">
              Registrasi
            </h1>
            <form onSubmit={onSubmit}>
              <Input
                control={control}
                type="text"
                label="Nama"
                required
                name="nama"
                placeholder="Masukan Nama Anda"
              />

              <Select
                control={control}
                type="text"
                label="Kelas"
                required
                name="kelas"
                options={[
                  {
                    value: "A1",
                    label: "A1",
                  },
                  {
                    value: "A2",
                    label: "A2",
                  },
                  {
                    value: "A3",
                    label: "A3",
                  },
                  {
                    value: "A4",
                    label: "A4",
                  },
                  {
                    value: "A5",
                    label: "A5",
                  },
                  {
                    value: "A6",
                    label: "A6",
                  },
                  {
                    value: "B1",
                    label: "B1",
                  },
                  {
                    value: "B2",
                    label: "B2",
                  },
                ]}
              />

              <Input
                control={control}
                type="number"
                label="No Whatsapp"
                required
                name="whatsapp"
                placeholder="Masukan No Whatsapp Anda"
              />

              <button
                id="btn"
                className="bg-[#313ED1] p-2 text-white rounded-lg mt-6 hover:bg-[#060e63] disabled:bg-gray-200 w-full"
                disabled={!isValid}
              >
                {loading ? "Sedang Memproses..." : "Daftar"}
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="">
            <div className="flex flex-wrap justify-center items-center">
              <h1 className="text-[#FF7800] py-12 text-2xl hidden md:block md:text-3xl lg:text-5xl font-semibold">
                <span className="text-[#2E3BC4]">ICC</span> : Informatika Coding
                Camp
              </h1>
              <div className="flex justify-center items-end">
                <img
                  src="https://source.unsplash.com/350x350?man"
                  alt=""
                  className="rounded-lg"
                />
                <p className="z-50 absolute bg-black bg-opacity-40 text-white p-2 mb-2 rounded-lg max-w-xs">
                  ICC adalah program bootcamp dari himatif untuk mengasah
                  kemampuan skill coding mahasiswa.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                to="PesertaI"
                className="bg-[#FDBD3D] text-white p-2 rounded-lg my-6"
              >
                Lihat Peserta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icc;
