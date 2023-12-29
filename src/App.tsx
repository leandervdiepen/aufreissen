import { Editable, Slate, withReact } from "slate-react";
import "./App.css";
import { useMemo, useState } from "react";
import { createEditor } from "slate";

type EditorFormat = "markdown" | "html";

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value] = useState([
    { type: "paragraph", children: [{ text: "" }] },
  ]);
  const [outputFormat, setOutputFormat] = useState<EditorFormat>("markdown");
  return (
    <>
      <div className="App">
        <main>
          <h1 className="text-green-500">Hello, world!</h1>
          <div className="toggle-switch mt-4">
            <button
              className={`p-2 ${
                outputFormat === "markdown" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setOutputFormat("markdown")}
            >
              Markdown
            </button>
            <button
              className={`p-2 ${
                outputFormat === "html" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setOutputFormat("html")}
            >
              HTML
            </button>
          </div>
          <div className="flex flex-col">
            <div className="markdown">
              <h2>Markdown Textarea</h2>
              <textarea className="w-96 h-44" cols={30} rows={10}></textarea>
              <Slate
                editor={editor}
                initialValue={value}
                // onChange={(newValue) => setValue(newValue)}
              >
                <Editable className="w-96 h-44 border p-2" />
              </Slate>
            </div>

            <div className="preview">
              <h2>Preview</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
