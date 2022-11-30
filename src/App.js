import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'
import example from './example.md';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MarkdownEditor />
      </header>
    </div>
  );
}

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      displayEditor: true,
      displayPrev: true,
    }

  }

  componentWillMount() {
    fetch(example).then((response) => response.text()).then((text) => {
      this.setState({ input: text })
    })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleDisplay() {
    this.setState({
      displayPrev: !this.state.displayPrev
    })
  }

  handleDisplayEditor() {
    this.setState({
      displayEditor: !this.state.displayEditor
    })
  }

  render() {
    if (this.state.displayEditor) {
      return (
        <div>
          <div className='flex flex-col items-center gap-y-10 m-5'>

            {/* Editor */}
            <div className='bg-white flex flex-col w-2/4'>
              <div className='flex flex-row justify-between p-2 bg-purple-600'>
                <h1 className="">Editor</h1>
                <button onClick={this.handleDisplay.bind(this)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-2 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6" /></svg>
                </button>
              </div>
              <div className='flex flex-col'>
                <textarea id="editor" value={this.state.input} onChange={this.handleChange.bind(this)} className='text-black flex p-5' rows="5"></textarea>
              </div>
            </div>

            <MarkdownPrev dataText={this.state.input} dataDisplay={this.state.displayPrev} handlePrev={this.handleDisplayEditor.bind(this)} />

          </div>
        </div >
      )
    } else {
      return (
        <div>
          <div className='flex flex-col items-center gap-y-10 m-5'>
            <MarkdownPrev dataText={this.state.input} dataDisplay={this.state.displayPrev} handlePrev={this.handleDisplayEditor.bind(this)} />
          </div>
        </div >
      )
    }


  }
}

class MarkdownPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    }

  }

  render() {
    if (this.props.dataDisplay) {
      return (
        <>
          {/* Previwer */}
          <div className='bg-white flex flex-col w-3/4'>
            <div className='flex flex-row justify-between p-2 bg-purple-600'>
              <h1>Previewer</h1>
              <button onClick={this.props.handlePrev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-2 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6" /></svg>
              </button>
            </div>
            <div className='p-5'>
              <p id='preview' className='text-black text-left break-words prose max-w-none'><ReactMarkdown children={this.props.dataText} remarkPlugins={[remarkGfm, remarkBreaks]} /></p>
            </div>
          </div>
        </>
      )
    }
  }
}

export default App;
