import Footer from "@/components/Footer";
import OurTeams from "@/components/OurTeams";
import PreviousWorks from "@/components/PreviousWorks";

const page = () => {
  return (
    <main className="mx-auto w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto about-banner-bg w-full h-[650px] md:h-[800px] relative">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="w-full text-white mx-auto text-5xl text-center items-center md:text-7xl font-helveticaNowDisplayBold font-extrabold flex flex-col md:items-center md:text-center">
            <span>Preparing For</span>
            <span>The End</span>
            <span>Time.</span>
          </h1>
          <span className="text-xs text-white uppercase bg-gray-300/20 p-3 rounded-full w-fit">
            Welcome
          </span>
        </div>
      </div>
      <OurTeams />
      <PreviousWorks />
      <Footer />
    </main>
  );
};

export default page;
