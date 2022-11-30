import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Markdown />
      </header>
    </div>
  );
}

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <div className='bg-purple-600 flex flex-col'>
          <div className='flex flex-row justify-between p-2'>
            <h1 className="">Editor</h1>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className='flex flex-row'>
            <textarea id="editor" className='text-black'>
              Teste
            </textarea>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
