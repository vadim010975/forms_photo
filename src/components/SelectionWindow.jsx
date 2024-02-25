import PropTypes from 'prop-types';

const SelectionWindow = ({ onChange }) => {

  return (
    <form className="form_input_file" >
      <div className="damper_input_file">
        <p className="lable_input_file">Click to select</p>
      </div>
      <input type="file" accept="image/*" multiple className="input_file" onChange={onChange} />
    </form>
  );
}

SelectionWindow.propTypes = {
  onChange: PropTypes.func,
}

export default SelectionWindow;
