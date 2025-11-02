import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatusPanel from './components/StatusPanel';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <HeroSection />
        <StatusPanel />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
