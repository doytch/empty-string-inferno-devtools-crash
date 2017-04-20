import { render } from 'inferno';
import App from './App';
import './index.css';

require('inferno-devtools'); // eslint-disable-line global-require

render(<App />, document.getElementById('app'));
