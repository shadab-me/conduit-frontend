import React from "react";
import EditorJS from "@editorjs/editorjs";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      tags: "",
    };
  }
  changeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  postHandler = (e) => {
    e.preventDefault();
    const { title, content, tags } = this.state;
    fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        article: {
          title: title,
          description: content,
          tags: tags.split(","),
        },
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("user"))["token"],
      },
    })
      .then((res) => res.json())
      .then((article) => console.log(article));
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5 text-success">New Post</h1>
        <form>
          <div className="from-group mt-5">
            <label for="title">Title</label>
            <input
              name="title"
              type="text"
              className="from-control input w-100 mb-3 border border-primary form-control"
              placeholder="Enter Title"
              onChange={this.changeHandler}
            ></input>
            <div className="form-group">
              <label for="text-area">Write</label>
              <textarea
                className="form-control border border-primary"
                rows="5"
                name="content"
                onChange={this.changeHandler}
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <label for="text-area">Tags</label>
            <input
              className="w-100 input border border-primary form-control"
              placeholder="tags"
              onChange={this.changeHandler}
            ></input>
          </div>
          <button
            className="btn btn-primary pl-5 pr-5 pt-1"
            onClick={this.postHandler}
          >
            <Link to="/">
              <button className=" btn btn-primary text-white">Post</button>
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Post;
