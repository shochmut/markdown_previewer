import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

let DEFAULTTEXT = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

DEFAULTTEXT += ```
// this is multi-line code:
text = 'Hello World';
}
```;

DEFAULTTEXT += 'Heres some code, `<div></div>`, between 2 backticks.';

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
    <label>
      Markdown Editor:
      <textarea
        id="editor"
        text={text}
        onChange={() => childToParent(event.target.value)}
      />
    </label>
  );
}

function Preview({ parentToChild }) {
  const html = marked.parse(parentToChild);

  return (
    <div id="preview">
      <p>{html}</p>
    </div>
  );
}

export default App;
