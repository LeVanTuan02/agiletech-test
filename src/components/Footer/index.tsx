import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import classNames from "classnames/bind";

type Props = {};

const cx = classNames.bind(styles);

const Footer = (props: Props) => {
  return (
    <footer className="container">
      <div className={cx("footer")}>
        <div className={cx("footer__top")}>
          <div className={cx("footer__top-item-1")}>
            <Link to="" className={cx("footer__bottom-logo-link")}>
              <img src="/images/Logo.png" alt="Logo" />
              <span className={cx("footer__bottom-logo-text")}>DataWarehouse</span>
            </Link>

            <p className={cx("footer__top-item-1-text")}>
              Warehouse Society, 234 <br />
              Bahagia Ave Street PRBW 29281
            </p>

            <p className={cx(["footer__top-item-1-text", "footer__top-item-1-text-last"])}>
              <a href="mailto:info@warehouse.project" className={cx("footer__top-item-1-text-link")}>
                info@warehouse.project
              </a>{" "}
              <br />
              <a href="tel:1-232-3434" className={cx("footer__top-item-1-text-link")}>
                1-232-3434
              </a>{" "}
              (Main)
            </p>
          </div>

          <div className={cx("footer__top-item-2")}>
            <span className={cx("footer__top-item-title")}>About</span>

            <ul className={cx("footer__top-item-list")}>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  DW News
                </Link>
              </li>
            </ul>
          </div>

          <div className={cx("footer__top-item-3")}>
            <span className={cx("footer__top-item-title")}>Help</span>

            <ul className={cx("footer__top-item-list")}>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Support
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Sign up
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Guide
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Reports
                </Link>
              </li>
              <li>
                <Link to="" className={cx("footer__top-item-list-link")}>
                  Q&A
                </Link>
              </li>
            </ul>
          </div>

          <div className={cx("footer__top-item-4")}>
            <span className={cx("footer__top-item-title")}>Social Media</span>

            <ul className={cx("footer__top-item-4-list")}>
              <li className={cx("footer__top-item-4-list-item")}></li>
              <li className={cx("footer__top-item-4-list-item")}></li>
              <li className={cx("footer__top-item-4-list-item")}></li>
            </ul>
          </div>
        </div>

        <div className={cx("footer__bottom")}>
          <p className={cx("footer__bottom-text")}>
            © Datawarehouse™, 2020. All rights reserved. <br />
            Company Registration Number: 21479524.
          </p>

          <img src="/images/Group 64.png" alt="Img message" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
