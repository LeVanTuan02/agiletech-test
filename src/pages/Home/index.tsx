import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../../components/SliderArrow";
import Footer from "../../components/Footer";

type Props = {};

const HomePage = (props: Props) => {
  const settings = {
    // autoplay: true,
    infinite: true,
    dots: true,
    nextArrow: <SliderArrow direction="right" onClick={() => {}} />,
    prevArrow: <SliderArrow onClick={() => {}} />,
    customPaging: function (i: number) {
      return <div className="slider__dot"></div>;
    },
  };

  return (
    <div className="font-helvetica">
      <Header />

      <main className="mt-[164px]">
        <section>
          <div className="mx-auto text-center w-[575px]">
            <h2 className="font-bold text-secondary leading-[52px] text-[40px] mb-[48px]">Features</h2>
            <p className="font-avenir font-medium text-tertiary text-lg leading-[28.8px]">
              Some of the features and advantages that we provide for those of you who store data in this Data
              Warehouse.
            </p>
          </div>

          <div className="mt-[98px] my-container mx-auto">
            <div className="flex justify-end">
              <div className="relative">
                <img src="/images/Rectangle 39.png" className="" alt="Search Data" />
                <img src="/images/image3 1.png" alt="Image" className="absolute right-[295px] bottom-[73px]" />
                <img src="/images/Ellipse 61.png" alt="Vector 1" className="absolute top-[47px] right-[118px]" />
                <img src="/images/Vector 56.png" alt="Vector 2" className="absolute top-[12px] right-[23px]" />

                <div className="w-[266px] absolute right-0 top-[57px] bottom-0">
                  <span className="text-2xl leading-[32px] text-secondary block mb-[28px]">Search Data</span>
                  <p className="w-[222px] font-avenir leading-[26px] text-tertiary">
                    Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful
                    for making it easier to find data effectively saving time.
                  </p>

                  <Link to="" className="flex items-center absolute bottom-[33px]">
                    <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                    <div className="ml-5 text-primary">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="ml-[150px] relative">
                <img src="/images/Rectangle 39 2.png" className="" alt="24 Hours Access" />
                <img src="/images/image4.png" alt="Image" className="absolute right-[299px] bottom-[100px]" />
                <img src="/images/Vector 56 (1).png" alt="Vector 2" className="absolute bottom-[14px] right-[26px]" />

                <div className="w-[266px] absolute right-0 top-[57px] bottom-0">
                  <span className="text-2xl leading-[32px] text-secondary block mb-[28px]">24 Hours Access</span>
                  <p className="w-[222px] font-avenir leading-[26px] text-tertiary">
                    Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort
                    when you need data when urgent.
                  </p>

                  <Link to="" className="flex items-center absolute bottom-[33px]">
                    <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                    <div className="ml-5 text-primary">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="mt-[49px] relative">
                <img src="/images/Rectangle 39 3.png" className="" alt="Print Out" />
                <img src="/images/image5 1.png" alt="Image" className="absolute right-[300px] bottom-[53px]" />
                <img src="/images/Ellipse 61 (1).png" alt="Vector 1" className="absolute top-[30px] right-[32px]" />

                <div className="w-[266px] absolute right-0 top-[57px] bottom-0">
                  <span className="text-2xl leading-[32px] text-secondary block mb-[28px]">Print Out</span>
                  <p className="w-[222px] font-avenir leading-[26px] text-tertiary">
                    Print out service gives you convenience if someday you need print data, just edit it all and just
                    print it.
                  </p>

                  <Link to="" className="flex items-center absolute bottom-[33px]">
                    <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                    <div className="ml-5 text-primary">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mt-[49px] ml-[148px] relative">
                <img src="/images/Rectangle 39 4.png" className="" alt="Security Code" />
                <img src="/images/image6 1.png" alt="Image" className="absolute z-10 right-[305px] bottom-[70px]" />
                <img src="/images/Ellipse 61 (2).png" alt="Vector 1" className="absolute bottom-[30px] right-[28px]" />
                <img src="/images/Vector 56 (2).png" alt="Vector 2" className="absolute bottom-[92px] right-[106px]" />

                <div className="w-[266px] absolute right-0 top-[57px] bottom-0">
                  <span className="text-2xl leading-[32px] text-secondary block mb-[28px]">Security Code</span>
                  <p className="w-[222px] font-avenir leading-[26px] text-tertiary">
                    Data Security is one of our best facilities. Allows for your files to be safer. The file can be
                    secured with a code or password that you created, so only you can open the file.
                  </p>

                  <Link to="" className="flex items-center absolute bottom-[33px]">
                    <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                    <div className="ml-5 text-primary">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-container mx-auto mt-[120px] h-[710px] rounded-[50px] bg-primary">
          <h2 className="pt-[110px] ml-[93px] mb-[88px] font-bold text-[40px] leading-[52px] text-white">
            Testimonials
          </h2>

          <Slider {...settings} className="w-[932px] max-w-full mx-auto relative">
            <div>
              <div className="mb-5 flex h-[330px] pt-[60px] pl-[101px] bg-white rounded-[20px] mx-auto shadow-[0px_20px_0px_rgba(0,0,0,0.1)]">
                <img src="/images/Ellipse 76.png" alt="" className="w-[130px] h-[90px]" />
                <div className="pt-5 pl-[44px] font-avenir flex-1">
                  <span className="block leading-[28.8px] text-lg font-black text-secondary">John Fang </span>
                  <span className="block text-primary font-medium text-sm leading-[22px] mb-[16px]">wordfaang.com</span>
                  <p className="text-tertiary text-lg leading-[33px] w-[382px]">
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa
                    turpis. Arcu pulvinar aenean nam laoreet nulla.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 flex h-[330px] pt-[60px] pl-[101px] bg-white rounded-[20px] mx-auto shadow-[0px_20px_0px_rgba(0,0,0,0.1)]">
                <img src="/images/Ellipse 76.png" alt="" className="w-[130px] h-[90px]" />
                <div className="pt-5 pl-[44px] font-avenir flex-1">
                  <span className="block leading-[28.8px] text-lg font-black text-secondary">John Fang </span>
                  <span className="block text-primary font-medium text-sm leading-[22px] mb-[16px]">wordfaang.com</span>
                  <p className="text-tertiary text-lg leading-[33px] w-[382px]">
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa
                    turpis. Arcu pulvinar aenean nam laoreet nulla.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        <div className="w-[1600px] max-w-full mx-auto h-[2px] bg-primary opacity-[0.2] mt-[89px]"></div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
