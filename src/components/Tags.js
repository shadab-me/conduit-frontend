import React from "react";
import "./Tags.css";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [1, 2],
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
    console.log(tags);
    return (
      <div className="tags-section">
        <h5>DISCOVER MORE OF WHAT MATTERS TO YOU</h5>
        <div className="tags">
          {tags.map((tag) => {
            return <li>{tag}</li>;
          })}
        </div>
      </div>
    );
  }
}
export default Tags;
