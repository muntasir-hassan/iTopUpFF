import Banner from "../components/Banner";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import data from "../components/Card/data.js";
import Footer from "../components/Footer.jsx";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="grid grid-cols-1 items-center justify-center my-5 gap-y-6 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] sm:mx-auto md:my-7">
        {data.map((data, indx) => {
          return (
            <Card
              imageSrc={data.src}
              title={data.title}
              key={indx}
              titleLink={"#"}
            />
          );
        })}
      </div>
      <div className="mx-auto max-w-[1200px] w-11/12 my-4 border-2 border-black"></div>
      <div className="relative overflow-hidden max-w-[1200px] w-4/5 sm:mx-auto max-sm:ml-5 mb-8 pt-[50%] max-h-[700px]">
        <iframe
          src="https://www.youtube.com/embed/jqBMNsVS9NA?si=uUOpgDPMWy5wpfEf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="h-full w-full absolute top-0 left-0 bottom-0 right-0"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Home;
