import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class listContent extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    console.log(match);

    // return <div>You are now at {location.pathname}</div>;
    return (
      <div className="borderred fullheight-percent relative">
        <div className="relative pad125 borderred fullheight-percent absolute">
          test
        </div>
      </div>
    );
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(listContent);

export default ShowTheLocationWithRouter;
