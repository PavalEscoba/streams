import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="btn-block d-flex ms-auto">
          <Link to={`/streams/edit/${stream.id}`} className="btn btn-primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="btn btn-danger ms-3"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreateLink = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="d-flex justify-content-end mt-4">
          <Link className="btn btn-primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return (
      <ul className="list-group">
        {this.props.streams.map((stream) => {
          return (
            <li
              key={stream.title}
              className="list-group-item d-flex align-items-center"
            >
              <i
                className="fa fa-video-camera text-secondary me-3"
                aria-hidden="true"
                style={{ fontSize: 32 }}
              ></i>
              <div className="content me-3">
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
              </div>
              {this.renderAdmin(stream)}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="col-lg-8">
        {this.renderList()}
        {this.renderCreateLink()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.authStatus.userId,
    isSignedIn: state.authStatus.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
