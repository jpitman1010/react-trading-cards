"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Hello, user!!!</h3>
        <br></br>
        <br></br>
        <a href = '/cards'> Click here to go to Cards</a>
        <br></br>
        <img src="/static/img/balloonicorn.jpg"></img>
      </React.Fragment>
    );
  }
}



ReactDOM.render(<Homepage />, document.querySelector('#app'));
