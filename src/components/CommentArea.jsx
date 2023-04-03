import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.fetchComments(this.props.id);
  };

  fetchComments = async id => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2ODA1NDEwNDIsImV4cCI6MTY4MTc1MDY0Mn0.L5J7Y5LishXNCh2OsEziUEQsbMLc5EiNqP2mltaNmg8",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data obtained: ", data);
        this.setState({ comments: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <AddComment id={this.props.id} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
