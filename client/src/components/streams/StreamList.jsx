import React from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return (
      <ul className="list-group">
        {this.props.streams.map((stream) => {
          return (
            <li key={stream.title} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="content">
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
              </div>
              <i class="fa fa-video-camera" aria-hidden="true"></i>
            </li>
          )
        })}
      </ul>
    )
  };

  render() {
    return (
      <div className="col-md-6">
        {this.renderList()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {streams: Object.values(state.streams)}
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
