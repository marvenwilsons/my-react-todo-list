import React, { Component } from "react";

import AddList from "../components/mylist/addlist";
import AllList from "../components/mylist/all-list";

import Loadable from "react-loadable";

const LoadableBar = Loadable({
  loader: () => import("../components/mylist/all-list"),
  timeout: 300, // 10ms
  // delay: 300, // 3ms
  loading() {
    return <div>Loading Content...</div>;
  }
});

export class mylist extends Component {
  state = {
    list: [
      { listTitle: "How to create a lamp" },
      { listTitle: "The right way to be a programmer for begginers" },
      {
        listTitle:
          "How to build a humanoid robot using Phyton as a back end langguage"
      },
      { listTitle: "Doctors guid list for heart surgery" },
      { listTitle: "How to create a lamp" }
    ],
    showAddNewListForm: false
  };

  showAddListForm = state => {
    this.setState({
      showAddNewListForm: state
    });
  };

  render() {
    return (
      <div className="fullheight-percent flex flexcenter">
        {/* <div className>asdf</div> */}
        {this.state.list.length == 0 || this.state.showAddNewListForm ? (
          <div className="flex flexcenter fullwidth fullheight-percent">
            <AddList showAddListForm={this.showAddListForm} />
          </div>
        ) : (
          <div className="flex flexcenter fullwidth fullheight-percent">
            {/* <AllList list={this.state.list} /> */}
            <LoadableBar
              list={this.state.list}
              showAddListForm={this.showAddListForm}
            />
          </div>
        )}
      </div>
    );
  }
}

export default mylist;
