import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  };

  renderActions = () => {
    const { id }= this.props.match.params;
    return (
    <>
      <button className="btn btn-danger" onClick={()=> this.props.deleteStream(id)}>Delete</button>
      <Link to="/" className="btn btn-primary">Cancel</Link>
    </>
    );
  };

  renderContent= () => {
    if(!this.props.stream) {
      return "Are you sure you want to delete a stream?"
    }

    return `Are you sure you want to delete a stream "${this.props.stream.title}"?`
  }

  render() {
    console.log(this.props);
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
