import PropTypes from 'prop-types';
import Preview from "./Preview";

const ListPreviews = ({ images, ...props }) => {

  return (
    <ul className="list_previews">
      {images.map(el => (
        <Preview
          {...props}
          image={el}
          key={el.id}
        />
      ))}
    </ul>
  )
}

ListPreviews.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
}

export default ListPreviews;
