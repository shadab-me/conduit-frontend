import React from "react";
import "./Tags.css";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: "",
    };
  }

  componentDidMount() {
    fetch("/api/tags")
      .then((data) => data.json())
      .then((tags) =>
        this.setState(
          {
            tags: tags.tags,
          },
          () => console.log(this.state.tags)
        )
      );
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="tags-section mt-3">
        <h5 className="mt-4  ml-2">DISCOVER MORE OF WHAT MATTERS TO YOU</h5>
        <div className="tags mt-3">
          {tags
            ? tags.map((tag) => {
                return <li>{tag}</li>;
              })
            : null}
        </div>
      </div>
    );
  }
}
export default Tags;
