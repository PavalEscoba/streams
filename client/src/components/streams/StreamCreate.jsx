import React from "react";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="col-md-6">
        <h2>Create a stream</h2>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
