import PropTypes from 'prop-types';

const Preview = ({ image, onClick }) => {

  return (
    <li className="wrapper_preview">
      <button onClick={() => onClick(image)} className="btn_preview" />
      <img src={image.img} className="preview" />
    </li>
  )
}

Preview.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func,
}

export default Preview;
