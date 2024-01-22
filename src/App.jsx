import axios from "axios";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-w-96 min-h-screen justify-between">
        <Navbar />
        <Timeline />
        <Footer />
      </div>
    </>
  );
}

export default App;
