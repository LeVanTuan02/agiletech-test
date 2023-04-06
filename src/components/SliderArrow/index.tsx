import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SliderArrowProps = {
  onClick: () => void;
  direction?: string;
};

const SliderArrow = ({ onClick, direction }: SliderArrowProps) => {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10 outline-none transition-all ease-linear duration-200 text-white ${
        direction === "right" ? "-right-12" : "-left-12"
      }`}
      onClick={onClick}
    >
      {direction === "right" ? <FontAwesomeIcon icon={faArrowRightLong} /> : <FontAwesomeIcon icon={faArrowLeftLong} />}
    </button>
  );
};

export default SliderArrow;
