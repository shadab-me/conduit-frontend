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

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      comments: [1, 2, 3],
    };
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    let requests = [`/api/articles/${slug}`, `/api/articles/${slug}/comments`];
    Promise.all(requests.map((request) => fetch(request))).then((data) =>
      data.map((Sdata) => console.log(Sdata.json()))
    );
  }
  render() {
    const { article } = this.state;
    let comments = [1, 2, 3];
    console.log(article, this.state.comments);
    if (!article || !comments) {
      return (
        <Loader
          type="Bars"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      );
    }
    return (
      <Container>
        <article>
          <Typography variant="h1">{article.title}</Typography>
          <Typography variant="p">{article.body}</Typography>
        </article>
        <div className="comments">
          {}
          <h1>Comments</h1>
          {comments.map((comment) => (
            <Paper style={{ padding: "40px 20px" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="Remy Sharp" src="##" />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}></h4>
                  <p style={{ textAlign: "left" }}></p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </Paper>
          ))}
        </div>
      </Container>
    );
  }
}

export default Article;
