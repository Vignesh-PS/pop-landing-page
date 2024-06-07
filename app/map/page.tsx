import MapChart from '@/components/home-map';
import Footer from '@/components/ui/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worldwide Passports',
  description: 'World map of electronic passports',
};

export default function GlobalMap() {
  return (
    <>
      <main className={`main -mt-3 relative`}>
        <div className={`mapRow`}>
          <div className={`mapSection`}>
            <MapChart />
          </div>
        </div>
        <div className="legend-info text-black relative bottom-2 lg:bottom-7 right-3 lg:absolute">
          <h2 className={`homeTitle`}>Proof of Passport country coverage</h2>
          <div className="legend-info-item flex items-center">
            <p className="w-8 h-4 bg-[#548233] me-2"></p> Supported countries
          </div>
          <div className="legend-info-item flex items-center">
            <p className="w-8 h-4 bg-[#70ac48] me-2"></p> Work in progress
          </div>
          <div className="legend-info-item flex items-center">
            <p className="w-8 h-4 bg-[#b0bfa7] me-2"></p> Not issuing e-passport
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
