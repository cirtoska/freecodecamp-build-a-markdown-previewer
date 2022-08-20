import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Footer from "./components/Footer";

function App() {
  const [markdown, setMarkdown] = useState(placeholder);
  return (
    <>
      <main>
        <div className="container">
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          ></textarea>
          <article id="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

const placeholder = `# My React Markdown Previewer!

## The Cosmos Awaits...
### Sea of Tranquility

A mote of **dust suspended** in a sunbeam realm of the galaxies globular star cluster cosmic fugue rich in [mystery explorations](https://google.com)? Vastness is bearable only through ***love*** stirred by starlight Sea of Tranquility invent the universe ~~encyclopaedia galactica colonies~~? 

![image](https://images.unsplash.com/photo-1553570739-330b8db8a925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

> “Dance with the waves, move with the sea, let the rhythm of the water set your soul free.”

- The carbon in our apple.
  - Hydrogen atoms.
     - Billions upon billions.
        - Light years.

1. Something incredible is waiting to be known.
2. Callosum gathered by gravity muse
3. The only home we've ever known.

Realm of the galaxies stirred by starlight astonishment \`<p>great turbulent clouds</p>\` descended from astronomers Hypatia? With pretty stories for which there's little good evidence

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

`;

export default App;
