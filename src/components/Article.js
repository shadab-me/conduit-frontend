import {
  Container,
  TextareaAutosize,
  Typography,
  Paper,
  Grid,
  Divider,
  Avatar,
} from "@material-ui/core";
import React from "react";
import Loader from "react-loader-spinner";
import Author from "./Author";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      comments: [],
      comment: "",
    };
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    fetch(`/api/articles/${slug}`)
      .then((data) => data.json())
      .then((article) =>
        this.setState({
          article: article,
        })
      );

    fetch(`/api/articles/${slug}/comments`)
      .then((data) => data.json())
      .then((comments) =>
        this.setState({
          comments: comments,
        })
      );
  }
  changeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  commentDelete = async (e, slug, id) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    await fetch(`/api/articles/${slug}/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: user.token,
      },
    });

    await fetch(`/api/articles/${slug}/comments`)
      .then((data) => data.json())
      .then((comments) =>
        this.setState({
          comments: comments,
        })
      );
  };
  commentPost = async (e, slug) => {
    e.preventDefault();
    const { comment } = this.state;
    await fetch(`/api/articles/${slug}/comment`, {
      method: "POST",
      body: JSON.stringify({
        comment: {
          body: comment,
        },
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("user"))["token"],
      },
    });
    await fetch(`/api/articles/${slug}/comments`)
      .then((data) => data.json())
      .then((comments) =>
        this.setState({
          comments: comments,
          comment: "",
        })
      );
  };
  render() {
    const { article, comments } = this.state;
    if (!article || !comments) {
      return (
        <div className="loader">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={2000} //3 secs
          />
        </div>
      );
    }
    return (
      <div className="container w-50 mt-5">
        <article>
          <h1 className="font-weight-bold mb-3">{article.title}</h1>
          <Author username={article.author.username} />
          <img src="/img/article.jpg" className="w-100 mt-5"></img>
          <p className="text-justify mt-5">{article.description}</p>
        </article>
        <div className="tag-section d-flex flex-row">
          {article.tagList.map((tag) => {
            return (
              <li className="bg-light border w-100 font-weight-light">{tag}</li>
            );
          })}
        </div>

        <div className="comments">
          {comments.map((comment) => {
            return (
              <div
                className="comment card p-2 mt-3 mb-3 d-flex flex-row justify-content-between"
                key={comment._id}
              >
                <div className="author-comment">
                  <Author username={comment.author.username} />
                  <p className="p-2 font-weight-bold">{comment.body}</p>
                </div>
                {comment.author.username ==
                JSON.parse(localStorage.getItem("user"))["username"] ? (
                  <i
                    onClick={(e) =>
                      this.commentDelete(e, article.slug, comment._id)
                    }
                  >
                    X
                  </i>
                ) : null}
              </div>
            );
          })}
        </div>
        <textarea
          onChange={this.changeHandler}
          value={this.state.comment}
          className="form-control"
          placeholder="comment"
          rows="2"
          name="comment"
        ></textarea>
        <button
          className="btn btn-primary mt-3"
          onClick={(e) => this.commentPost(e, article.slug)}
        >
          Comment
        </button>
      </div>
    );
  }
}

export default Article;
