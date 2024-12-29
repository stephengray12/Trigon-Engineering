import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <p className="text-2xl font-bold text-white text-center p-4">
          &quot; Trigon Engineering, Arkansas Premier distributor of industrial equipment and sales &quot;
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;