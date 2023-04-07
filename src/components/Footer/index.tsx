import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="my-container mx-auto mt-[96px] mb-[125px] font-avenir text-secondary">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-[42.5%]">
          <Link to="" className="flex items-center mb-[65px]">
            <img src="/images/Logo.png" alt="Logo" />
            <span className="font-black text-xl leading-8 block ml-5">DataWarehouse</span>
          </Link>

          <p className="font-medium leading-[28.8px]">
            Warehouse Society, 234 <br />
            Bahagia Ave Street PRBW 29281
          </p>

          <p className="mt-[18px] text-secondary leading-[28.8px]">
            <a href="mailto:info@warehouse.project">info@warehouse.project</a> <br />
            <a href="tel:1-232-3434">1-232-3434</a> (Main)
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-[19.5%] mt-10 md:mt-0">
          <span className="font-black mb-[35px] block mt-[10px]">About</span>

          <ul className="leading-10">
            <li>
              <Link to="">Profile</Link>
            </li>
            <li>
              <Link to="">Features</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">DW News</Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-[19%] mt-10 lg:mt-0">
          <span className="font-black mb-[35px] block mt-[10px]">Help</span>

          <ul className="leading-10">
            <li>
              <Link to="">Support</Link>
            </li>
            <li>
              <Link to="">Sign up</Link>
            </li>
            <li>
              <Link to="">Guide</Link>
            </li>
            <li>
              <Link to="">Reports</Link>
            </li>
            <li>
              <Link to="">Q&A</Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 lg:mt-0">
          <span className="font-black mb-[35px] block mt-[10px]">Social Media</span>

          <ul className="flex items-center">
            <li className="w-[50px] h-[50px] mr-[14px] rounded-full bg-secondary opacity-10"></li>
            <li className="w-[50px] h-[50px] mr-[14px] rounded-full bg-secondary opacity-10"></li>
            <li className="w-[50px] h-[50px] mr-[14px] rounded-full bg-secondary opacity-10"></li>
          </ul>
        </div>
      </div>

      <div className="mt-[80px] flex flex-wrap flex-1 items-center justify-between">
        <p className="text-xs leading-[22px] pt-[15px]">
          © Datawarehouse™, 2020. All rights reserved. <br />
          Company Registration Number: 21479524.
        </p>

        <img src="/images/Group 64.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
