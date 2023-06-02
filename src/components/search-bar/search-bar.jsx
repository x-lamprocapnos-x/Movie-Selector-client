import {connect} from "react-redux";
import { setFilter } from "../../actions/actions";

const SearchBar = (props) => {
    function inputHandler(e) {
        let searchTerm = e.target.value;
        props.setFilter(searchTerm);
    }
    return (
        <input type="search" onInput={inputHandler} />
    );
}

let mapStateToProps = (state) => {
    return { filter: state.filter };
  };
export default connect(mapStateToProps, {setFilter})(SearchBar);