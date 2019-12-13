import React from "react";
// import from "./Form.css";
import "../containers/App";

const Form = props => {
  return (
    <form className="formStyle">
      <fieldset>
        <h4 className="formTitleStyle">Select a Category</h4>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="radioGroup"
                value="0"
                checked={props.checkboxGroup[0]}
                onChange={props.handleBoxChecked}
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
                value="1"
                checked={props.checkboxGroup[1]}
                onChange={props.handleBoxChecked}
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
                value="2"
                checked={props.checkboxGroup[2]}
                onChange={props.handleBoxChecked}
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
                value="3"
                checked={props.checkboxGroup[3]}
                onChange={props.handleBoxChecked}
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
                value="4"
                checked={props.checkboxGroup[4]}
                onChange={props.handleBoxChecked}
              />
              Vehicles
            </label>
          </li>
        </ul>
        <div className="buttonContainer">
          <button className="buttonStyle" onClick={props.handleSubmitButton}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.handleBoxChecked = this.handleBoxChecked.bind(this);
//     this.handleSubmitButton = this.handleSubmitButton.bind(this);
//     this.state = {
//       checkboxGroup: [false, false, false, false, false, false],
//       categoryArr: ['Films', 'People', 'Locations', 'Species', 'Vehicles'],
//       selectedCategory: Form,
//       selectedCategoryIndex: -1,
//       showForm: true
//     };
//   }

//   handleBoxChecked(event) {
//     let boxChecked = new Array(5);
//     boxChecked.fill(false);
//     boxChecked[event.target.value] = event.target.checked;
//     let categoryIndex = event.target.value;
//     this.setState({
//       checkboxGroup: boxChecked,
//       selectedCategory: this.state.categoryArr[categoryIndex],
//       selectedCategoryIndex: categoryIndex
//     });
//   }

//   handleSubmitButton(event) {
//     event.preventDefault();
//     this.setState({
//       showForm: false
//     });
//   }

//   handleHTTPErrors(response) {
//     if (!response.ok) throw Error(response.status + ": " + response.statusText);
//     return response;
//   }

//   render() {
//     if (this.state.showForm) {
//       return (
//             <form className="formStyle">
//               <fieldset>
//                 <h4 className="formTitleStyle">Select a Category</h4>
//                 <ul>
//                   <li>
//                     <label>
//                       <input
//                         type="radio"
//                         name="radioGroup"
//                         value="0"
//                         checked={this.state.checkboxGroup[0]}
//                         onChange={this.handleBoxChecked}
//                       />
//                       Films
//                     </label>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <label>
//                       <input
//                         type="radio"
//                         name="radioGroup"
//                         value="1"
//                         checked={this.state.checkboxGroup[1]}
//                         onChange={this.handleBoxChecked}
//                       />
//                       People
//                     </label>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <label>
//                       <input
//                         type="radio"
//                         name="radioGroup"
//                         value="2"
//                         checked={this.state.checkboxGroup[2]}
//                         onChange={this.handleBoxChecked}
//                       />
//                       Locations
//                     </label>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <label>
//                       <input
//                         type="radio"
//                         name="radioGroup"
//                         value="3"
//                         checked={this.state.checkboxGroup[3]}
//                         onChange={this.handleBoxChecked}
//                       />
//                       Species
//                     </label>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <label>
//                       <input
//                         type="radio"
//                         name="radioGroup"
//                         value="4"
//                         checked={this.state.checkboxGroup[4]}
//                         onChange={this.handleBoxChecked}
//                       />
//                       Vehicles
//                     </label>
//                   </li>
//                 </ul>
//                 <div className="buttonContainer">
//                   <button className="buttonStyle" onClick={this.handleSubmitButton}>
//                     Submit
//                   </button>
//                 </div>
//               </fieldset>
//             </form>
//       );
//     } else {
//       return (
//         <div className="container">
//           <Results category={this.state.selectedCategory} categoryIndex={this.state.selectedCategoryIndex}/>
//         </div>
//       )
//     }
//   }
// }

export default Form;
