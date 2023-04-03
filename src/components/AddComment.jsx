import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
  };
  postComment = async id => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify({
          comment: this.state.comment,
          rate: this.state.rate,
          elementId: id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2ODA1NDEwNDIsImV4cCI6MTY4MTc1MDY0Mn0.L5J7Y5LishXNCh2OsEziUEQsbMLc5EiNqP2mltaNmg8",
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comment: "" });
        console.log("data obtained: ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.comment || !this.state.rate) {
      return;
    }
    this.postComment(this.props.id);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} onClick={e => e.stopPropagation()}>
          <Form.Control value={this.state.comment} onChange={e => this.setState({ comment: e.target.value })} />
          <select value={this.state.rate} onChange={e => this.setState({ rate: e.target.value })}>
            <option>dai un voto al film</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <Button type="submit">invia</Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
