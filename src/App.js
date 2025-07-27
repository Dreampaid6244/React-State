import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Joseph wilfred',
        bio: 'Software developer who loves React.',
        imgSrc: 'https://cdn.corenexis.com/media/c/5ee3cf&2H&p&c&9p9o.jpg',
        profession: 'Software Developer'
      },
      shows: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App" style={{ padding: '20px' }}>
        <h1>React Class Component - Profile Toggle</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide' : 'Show'} Profile
        </button>

        {shows && (
          <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={person.imgSrc} alt="Profile" style={{ width: '150px' }} />
            <h2>{person.fullName}</h2>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p>{person.bio}</p>
          </div>
        )}

        <p style={{ marginTop: '20px' }}>
          Time since component mounted: {mountedTime} second(s)
        </p>
      </div>
    );
  }
}

export default App;
