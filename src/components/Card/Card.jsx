import PropTypes from "prop-types";
function Card({ imageSrc, title, titleLink }) {
  return (
    <div className="flex flex-col items-center max-w-[300px] max-sm:ml-5 sm:mx-auto w-4/5">
      <img src={imageSrc} className="w-full" />
      <a
        href={titleLink}
        className="text-center text-blue-900 font-medium hover:underline hover:text-black"
      >
        {title}
      </a>
      
    </div>
  );
}
Card.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  titleLink: PropTypes.string,
};

export default Card;
