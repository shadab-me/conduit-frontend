import {
  CardContent,
  CardHeader,
  Container,
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import Loader from "react-loader-spinner";
import Tags from "../components/Tags";
import Author from "../components/Author";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: "",
      tag: "",
    };
  }

  componentDidMount() {
    fetch("/api/articles")
      .then((data) => data.json())
      .then((articles) =>
        this.setState(
          {
            articles: articles.articles,
          },
          () => console.log(this.state.articles)
        )
      );
  }
  render() {
    const { articles } = this.state;
    if (!articles) return <Loader type="Bars" color=""></Loader>;
    return (
      <main>
        <Container style={{ display: "flex" }}>
          <div className="articles">
            {articles.map((article) => {
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
          <Tags />
        </Container>
      </main>
    );
  }
}

export default Home;
