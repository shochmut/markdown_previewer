import { useState } from 'react';
import React from 'react';
import './App.css';
import { marked } from 'marked';

let DEFAULTTEXT = `# heading element \n 
## sub heading element \n 
[link element](https://www.freecodecamp.org) \n 
Inline Code: \`<div></div>\` \n 
A Code Block: \n \`\`\` // this is multi-line code: 
\`\`\` function App() {
  const [text, setText] = useState(DEFAULTTEXT);

  const parentToChild = () => {};
  const childToParent = (childdata) => {
    setText(childdata);
  };

  return (
    <div className="App">
      <Editor childToParent={childToParent} />
      <Preview parentToChild={text} />
    </div>
  );
}
 \`\`\` \n 
- And of course there are lists.
- Some are bulleted.
   - With different indentation levels.
      - That look like this. \n
> Block Quotes! \n 
![React!](src/assets/react.svg) \n
![Binx!](src/assets/Binx.svg) \n
You can also make text **bold**... whoa!
` 


function App() {
  const [text, setText] = useState(DEFAULTTEXT);

  const parentToChild = () => {};
  const childToParent = (childdata) => {
    setText(childdata);
  };

  return (
    <div className="App">
      <Editor childToParent={childToParent} />
      <Preview parentToChild={text} />
    </div>
  );
}

function Editor({ childToParent, text }) {
  return (
    <label className='editorWrap'>
      Markdown Editor:
      <textarea
        id="editor"
        defaultValue={DEFAULTTEXT}
        text={text}
        onChange={() => childToParent(event.target.value)}
      />
    </label>
  );
}

function Preview({ parentToChild }) {
  let marktext = parentToChild

  return (
    <div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(marktext) }}
      ></div>
    </div>
  );
}

export default App;
