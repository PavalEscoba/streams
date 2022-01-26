import React from "react";

import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <>
      <button className="btn btn-danger">Delete</button>
      <button className="btn btn-primary">Cancel</button>
    </>
  );
  return (
    <>
      <h1>StreamDelete</h1>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </>
  );
};

export default StreamDelete;
