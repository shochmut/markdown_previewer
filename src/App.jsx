import { useState } from 'react'
import './App.css'
import { marked } from 'marked'

function App() {
  const [text, setText] = useState('text')

  const parentToChild = () => {

  }
  const childToParent = (childdata) => {
      setText(childdata);
    }

  return (
    <div className="App">
      <Editor childToParent={childToParent}/>
      <Preview parentToChild={text}/>
    </div>
  )
}

function Editor({childToParent, text}) {

  return (
    <label>
      Markdown Editor:
      <textarea    id='editor'
                   text={text} 
                   onChange={() => childToParent(event.target.value)}/>
    </label>
  ); 
}


function Preview({parentToChild}) {
  const html = marked.parse(parentToChild)
  

  return(
    <div>
      <p>{html}</p>
    </div>
  )
}





export default App
