import React from "react";
import EditorJS from "@editorjs/editorjs";

class React extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "",
    };
    clickHandler = () => {};
  }

  render() {
    return (
      <div className="">
        <form></form>
      </div>
    );
  }
}

export default Post;
