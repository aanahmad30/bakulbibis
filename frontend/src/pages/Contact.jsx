import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import Title from '../components/Title';

const Contact = () => {
  const handleRedirect = () => {
    window.location.href = "https://maps.app.goo.gl/47DF1XtXCEJ8BAT79"; // Ganti dengan URL tujuan Anda
  };

  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'KONTAK'} text2={'KAMI'} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-gray-600">LOKASI UMKM KAMI</p>
          <p className="text-gray-500">
            Padukuhan XII Bibis
            <br />
            Bangunjiwo, Kecamatan Kasihan, Kabupaten Bantul, Yogyakarta.
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">083866151200</span>
          </p>
          <p className="text-gray-800">
            Email: <span className="text-gray-500">padukuhanbibis@gmail.com</span>
          </p>

          <p className="text-gray-500">Lokasi di Google Maps</p>
          <p className="text-gray-500">
            Temukan UMKM Kami di Google Maps
          </p>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
            onClick={handleRedirect} // Mengarahkan ke URL saat tombol diklik
          >
            Google Maps
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
