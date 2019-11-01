import React, { Component } from "react";
import Header from "./Header";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  hanldeChange = event => {
    this.setState({});
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <h1>MEME Generator Section</h1>
        <form onSubmit={this.handleSubmit} className="meme-form">
          <input type="text" />
          <input type="text" />
          <button>Gen</button>
        </form>
      </div>
    );
  }
}
export default MemeGenerator;
