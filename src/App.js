import { version } from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';

const Empty = () => <div style={{border: '1px solid black'}}>{''}</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          Here is a component that renders an empty string.
        </p>
        <Empty />
      </div>
    );
  }
}

export default App;
