import React from 'react'

export default class MorseCode1 extends React.Component {

  heh = "hehehe";

  constructor(props) {
    super(props);
    this.state = { word: "" };
  }

  morse (text) {
    var output = "";
    for (var i = 0; i < text.length; i++)
    {
      if (text[i] === "a") {
        output += ".-";
      }
      else if (text[i] === "b") {
        output += "-..."
      }
      output += " "
    }
    return output;
  }

  onChangeText(event) {
    this.setState({
      word: this.morse(event.target.value)
    })
  }

  render () {
    return <div>
      {/* <p>{this.heh}</p> */}
      <input onChange={(event) => this.onChangeText(event)}></input>
      <h1>{this.state.word}</h1>
    </div>
  }
}