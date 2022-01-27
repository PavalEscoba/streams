import React from "react";
import { connect } from "react-redux";
import _ from 'lodash';


import { fetchStream, editStream } from "../../actions";
import Spinner from '../Spinner';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidUpdate() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    // this.props.editStream(this.props.stream.id, formValues) or
    this.props.editStream(this.props.match.params.id, formValues)
  };

  render() {
    if(!this.props.stream) {
      return <Spinner/>
    }
    return (
      <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, "title", "description")}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  fetchStream,
  editStream
})(StreamEdit);
