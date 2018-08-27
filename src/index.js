import ReactDOM from 'react-dom';
import flyd from 'flyd';
import './css/style.css';
import { createApp } from './App';

const update = flyd.stream();
const app = createApp(update);

const models = flyd.scan((model, func) => 
  func(model),
  app.model(), 
  update
);

const element = document.getElementById('root');
const states = models.map(app.state);
states.map(state => ReactDOM.render(app.view(state), element));
