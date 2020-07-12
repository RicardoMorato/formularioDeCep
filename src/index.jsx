import React from 'react';
import ReactDOM from 'react-dom';
import Form from './views';
import { Header } from './components';
import './App.scss';

function App() {
  return (
    <section className="app">
      <div className="main-application">
        <Header />
        <Form />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
