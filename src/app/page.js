import Contact from "./Contact";
// import Title from "./Title";
import MainForm from "./components/MainForm";

const HomePage = () => {
  return (
    <div className="px-12">
      <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
        <div className="w-full md:w-1/2">
          <MainForm />
        </div>
        <div className="w-full md:w-1/2 ">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
