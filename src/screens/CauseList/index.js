import React, { Component } from 'react';
// import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from '../../actions/actions';
import './causelist.css';

class CauseList extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
  // Function for the api 'GET' call. Returns the entire cause list
  if (this.props.causeList.length === 0) {
    this.props.getCauseList();
  }
};

  render() {
    let causeArray = this.props.causeList.map(cause => {
      return(
        <div key={cause.id} style={{margin: '1rem 0rem'}} onClick={() => this.props.causeSelected(cause)}>
          <Link to={`/cause/${cause.id}`}>
            <h3>{cause.name}</h3>
          </Link>
        </div>
      );
    });

    return(
      <div className="CauseList" style={{paddingTop: '4.5rem'}}>
        <h2>Cause List</h2>

        {causeArray}

      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return { causeList: state.causeList }
}

const mapDispatchToProps = {
  getCauseList,
  causeSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(CauseList);
