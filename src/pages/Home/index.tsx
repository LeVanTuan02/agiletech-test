import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import SliderArrow from "../../components/SliderArrow";
import Footer from "../../components/Footer";
import { GalleryResponse } from "../../models/gallery";
import { GalleryApi } from "../../api/galleryApi";
import { updateTitle } from "../../utils";
import classNames from "classnames/bind";

import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

type Props = {};

const HomePage = (props: Props) => {
  const [galleries, setGalleries] = useState<GalleryResponse[]>([]);

  useEffect(() => {
    updateTitle("Trang chủ");

    (async () => {
      const data = await GalleryApi.getAll();
      setGalleries(data);
    })();
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    nextArrow: <SliderArrow direction="right" onClick={() => {}} />,
    prevArrow: <SliderArrow onClick={() => {}} />,
    customPaging: function (i: number) {
      return <div className="slider__dot"></div>;
    },
  };

  return (
    <div>
      <Header />

      <main className={cx("content")}>
        <section>
          <div className={cx("heading")}>
            <h2 className={cx("heading__title")}>Features</h2>
            <p className={cx("heading__description")}>
              Some of the features and advantages that we provide for those of you who store data in this Data
              Warehouse.
            </p>
          </div>

          <div className="container">
            <div className={cx("features")}>
              <div className={cx("features__row")}>
                <div className={cx("features__row-box")}>
                  <img src="/images/Rectangle 39.png" className="" alt="Search Data" />
                  <img src="/images/image3 1.png" alt="Image" className={cx("features__row-box-1-image")} />
                  <img src="/images/Ellipse 61.png" alt="Vector 1" className={cx("features__row-box-1-image-1")} />
                  <img src="/images/Vector 56.png" alt="Vector 2" className={cx("features__row-box-1-image-2")} />

                  <div className={cx("features__row-box-content")}>
                    <span className={cx("features__row-box-content-title")}>Search Data</span>
                    <p className={cx("features__row-box-content-desc")}>
                      Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is
                      useful for making it easier to find data effectively saving time.
                    </p>

                    <Link to="" className={cx("features__row-box-content-link")}>
                      <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                      <div className={cx("features__row-box-content-link-icon")}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className={cx(["features__row-box", "features__row-box-2"])}>
                  <img src="/images/Rectangle 39 2.png" className="" alt="24 Hours Access" />
                  <img src="/images/image4.png" alt="Image" className={cx("features__row-box-2-image")} />
                  <img src="/images/Vector 56 (1).png" alt="Vector 2" className={cx("features__row-box-2-image-1")} />

                  <div className={cx("features__row-box-content")}>
                    <span className={cx("features__row-box-content-title")}>24 Hours Access</span>
                    <p className={cx("features__row-box-content-desc")}>
                      Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort
                      when you need data when urgent.
                    </p>

                    <Link to="" className={cx("features__row-box-content-link")}>
                      <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                      <div className={cx("features__row-box-content-link-icon")}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={cx("features__row")}>
                <div className={cx(["features__row-box", "features__row-box-3"])}>
                  <img src="/images/Rectangle 39 3.png" className="" alt="Print Out" />
                  <img src="/images/image5 1.png" alt="Image" className={cx("features__row-box-3-image")} />
                  <img src="/images/Ellipse 61 (1).png" alt="Vector 1" className={cx("features__row-box-3-image-1")} />

                  <div className={cx("features__row-box-content")}>
                    <span className={cx("features__row-box-content-title")}>Print Out</span>
                    <p className={cx("features__row-box-content-desc")}>
                      Print out service gives you convenience if someday you need print data, just edit it all and just
                      print it.
                    </p>

                    <Link to="" className={cx("features__row-box-content-link")}>
                      <span className="font-extrabold leading-[25.6px] text-secondary font-avenir">Learn more</span>
                      <div className={cx("features__row-box-content-link-icon")}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className={cx(["features__row-box", "features__row-box-4"])}>
                  <img src="/images/Rectangle 39 4.png" className="" alt="Security Code" />
                  <img src="/images/image6 1.png" alt="Image" className={cx("features__row-box-4-image")} />
                  <img src="/images/Ellipse 61 (2).png" alt="Vector 1" className={cx("features__row-box-4-image-1")} />
                  <img src="/images/Vector 56 (2).png" alt="Vector 2" className={cx("features__row-box-4-image-2")} />

                  <div className={cx("features__row-box-content")}>
                    <span className={cx("features__row-box-content-title")}>Security Code</span>
                    <p className={cx("features__row-box-content-desc")}>
                      Data Security is one of our best facilities. Allows for your files to be safer. The file can be
                      secured with a code or password that you created, so only you can open the file.
                    </p>

                    <Link to="" className={cx("features__row-box-content-link")}>
                      <span>Learn more</span>
                      <div className={cx("features__row-box-content-link-icon")}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className={cx("testimonials")}>
            <h2 className={cx("testimonials__title")}>Testimonials</h2>

            <div className={cx("testimonials__slider")}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={cx(["testimonials__slider-arrow", "testimonials__slider-arrow--left"])}
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx(["testimonials__slider-arrow", "testimonials__slider-arrow--right"])}
              />

              {/* dots */}
              <ul className={cx("testimonials__slider-dots")}>
                <li className={cx("testimonials__slider-dot")}></li>
                <li className={cx("testimonials__slider-dot", { "testimonials__slider-dot--active": true })}></li>
                <li className={cx("testimonials__slider-dot")}></li>
              </ul>

              {galleries?.map(
                (item, index) =>
                  index == 1 && (
                    <div key={item.id}>
                      <div className={cx("testimonials__slider-item")}>
                        <img src={item.imageUrl} alt={item.id} className={cx("testimonials__slider-item-avatar")} />
                        <div className={cx("testimonials__slider-item-user")}>
                          <span className={cx("testimonials__slider-item-user-name")}>John Fang </span>
                          <span className={cx("testimonials__slider-item-user-web")}>wordfaang.com</span>
                          <p className={cx("testimonials__slider-item-user-desc")}>{item.desctiption}</p>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </section>

        <div className={cx("line")}></div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
