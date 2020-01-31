import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ContentPane from "../components/listcontents/content";

// A simple component that shows the pathname of the current location
class listContent extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  // state
  state = {
    panes: [
      {
        listTitle:
          "A long title, I dont know why this title is so long, but its very long."
      },
      { listTitle: "This is a medium long title" }
    ]
  };

  render() {
    // props
    const { match, location, history } = this.props;

    // return <div>You are now at {location.pathname}</div>;
    return (
      <div
        style={{ background: "whitesmoke", overflowY: "hidden" }}
        className="fullheight-percent relative"
      >
        <div className="relative pad125 fullheight-percent absolute flex">
          {this.state.panes.map((Context, ContextIndex) => (
            <ContentPane
              Context={Context}
              ContextIndex={ContextIndex}
            ></ContentPane>
          ))}
        </div>
      </div>
    );
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(listContent);

export default ShowTheLocationWithRouter;
