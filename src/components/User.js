import React from "react";
import Loader from "react-loader-spinner";
import Author from "../components/Author";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publishedArticles: "",
      published: true,
      favoritesArticles: "",
    };
  }

  componentDidMount() {
    let author = JSON.parse(localStorage.getItem("user"))["username"];
    fetch(`/api/articles?author=${author}`)
      .then((data) => data.json())
      .then((articles) =>
        this.setState(
          {
            publishedArticles: articles.articles,
          },
          () => console.log(this.state.publishedArticles)
        )
      );
    fetch(`api/articles?au`);
  }

  render() {
    const { publishedArticles } = this.state;
    let currentLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (!publishedArticles) return <Loader />;
    return (
      <div className="container">
        <div className="card d-flex m-3 justify-content-center  flex-row mt-4">
          <img
            src="/img/profile.jpg"
            class="card-img-top w-25 rounded-circle"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-text">Username: {currentLoggedIn.username}</h5>
            <h5 className="card-text">Email: {currentLoggedIn.email}</h5>
            <h5 className="card-text">Bio: {currentLoggedIn.bio}</h5>
            <button className="btn btn-primary ml-2">Edit</button>
          </div>
        </div>
        <div className="row m-3">
          <li className="nav-link active">
            <a className="nav-link active bg-primary text-white">Published</a>
          </li>
          <li>
            <a className="nav-link">Favorites </a>
          </li>
        </div>
        <div className="article-section">
          {publishedArticles.map((article) => {
            return (
              <article
                style={{
                  padding: "15px",
                }}
              >
                <div className="card d-flex border border-0 flex-row-reverse p-3">
                  <div className="img-section  w-25">
                    <img
                      src="/img/article.jpg"
                      alt="random"
                      className="w-100 mt-3"
                    ></img>
                  </div>
                  <div className="card-body w-75">
                    <Author username={article.author.username} />

                    <a
                      href={`/articles/${article.slug}`}
                      className="text-dark text-decoration-none"
                    >
                      {" "}
                      <h2 className="card-title text-bold font-weight-bold">
                        {article.title}
                      </h2>
                    </a>
                    <p className="card-text">
                      {article.description.slice(0, 120)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default User;
