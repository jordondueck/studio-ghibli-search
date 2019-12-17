import React from "react";
// import from "./Form.css";
import "../containers/App";

const Form = props => {
  const { handleSelect, handleSubmit, formInput } = props;
  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <fieldset>
        <h4 className="formTitleStyle">Select a Category</h4>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="radioGroup"
                value={formInput.value[0]}
                checked={formInput.checked[0]}
                onChange={handleSelect}
              />
              Films
            </label>
          </li>
        </ul>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="radioGroup"
                value={formInput.value[1]}
                checked={formInput.checked[1]}
                onChange={handleSelect}
              />
              People
            </label>
          </li>
        </ul>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="radioGroup"
                value={formInput.value[2]}
                checked={formInput.checked[2]}
                onChange={handleSelect}
              />
              Locations
            </label>
          </li>
        </ul>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="radioGroup"
                value={formInput.value[3]}
                checked={formInput.checked[3]}
                onChange={handleSelect}
              />
              Species
            </label>
          </li>
        </ul>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="radioGroup"
                value={formInput.value[4]}
                checked={formInput.checked[4]}
                onChange={handleSelect}
              />
              Vehicles
            </label>
          </li>
        </ul>
        <div className="buttonContainer">
          <button className="buttonStyle">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
