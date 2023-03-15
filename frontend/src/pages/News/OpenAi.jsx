import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const OpenAi = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="">OpenAI</h1>
        </div>
        <p className="py-6">6 February 2023 | 2023</p>
        <div className="flex justify-center items-center pb-6">
          <img src="https://source.unsplash.com/790x217?figma" alt="" />
        </div>
        <div>
          <p className="text-2xl">
            OpenAI merupakan perusahaan kecerdasan buatan yang didirikan pada
            tahun 2015 oleh Elon Musk dan kawan-kawan. Perusahaan ini awalnya
            didorong oleh ketakutan bahwa keberadaan manusia akan terancam oleh
            kehadiran kecerdasan buatan. Perusahaan ini memiliki beberapa
            produk. Namun, yang saat ini tengah banyak diperbincangkan adalah
            chatGPT mereka yang mampu memberikan jawaban atas beragam pertanyaan
            dengan sangat cepat dan tepat. <br /> <br /> Beberapa produk milik
            openAI antara lain, Dall-E (mampu membuat gambar dari deskripsi
            teks), GPT-3, openAI Five, chatGPT, openAI codex.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OpenAi;
