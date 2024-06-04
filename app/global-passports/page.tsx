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
      <main className={`main -mt-3`}>
        <h2 className={`homeTitle`}>Proof of Passport country coverage</h2>
        <div className={`mapRow`}>
          <div className={`mapSection`}>
            <MapChart  />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}