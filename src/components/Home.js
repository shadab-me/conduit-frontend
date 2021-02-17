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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: "",
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
                  <Card style={{ style: "flex" }}>
                    <CardHeader>
                      <img src="https://unsplash.com/photos/dTQySHC4uxM"></img>
                    </CardHeader>
                    <CardContent>
                      <Typography variant="h6">{article.title}</Typography>
                      <Typography variant="p">{article.body}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        href={`/api/articles/${article.slug}`}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
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
