import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox.jsx';
import Title from '../components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'Tentang'} text2={'Kami'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            UMKM Padukuhan Bibis adalah bisnis yang mengusung industri makanan dan kerajinan.
            Berdirinya UMKM ini adalah saat ramai nya wisata dan sejarah yang ada di Padukuhan tersebut,
            dimana terletak sebuah iconic Padukuahan Bibis yaitu puncak bibis dan wisata sejarah Letkol Soeharto.
            <p>(Balai Pelestarian Cagar Budaya Provinsi D.I. Yogyakarta 2024).</p>
          </p>
          <p>
            Potensi UMKM di Padukuhan XII Bibis meliputi pengerajin hingga pegiat kuliner. Mulai dari makanan, minuman,
            hingga fashion wanita dan pria.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {' '}
            Misi UMKM Padukuhan Bibis di bidang kuliner dan fashion ke depannya adalah untuk menciptakan produk-produk berkualitas yang mengedepankan cita rasa dan gaya khas lokal,
            sekaligus memperluas jangkauan pemasaran melalui inovasi digital.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'KENAPA MEMILIH'} text2={'KAMI'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Jaminan Kualitas</b>
          <p className="text-gray-600">
            Kami menawarkan produk berkualitas.
            Produk yang kami tawarkan dipilih dengan cermat untuk memastikan kepuasan pelanggan.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Kemudahan</b>
          <p className="text-gray-600">
            Website kami yang ramah pengguna memudahkan Anda untuk menjelajahi, membandingkan, dan membeli produk kapan saja dan di mana saja,
            memberikan pengalaman belanja yang praktis.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Layanan Pelanggan yang Unggul</b>
          <p className="text-gray-600">
            Kami berkomitmen untuk memberikan dukungan terbaik dan memastikan setiap pengalaman belanja Anda menyenangkan.{' '}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
