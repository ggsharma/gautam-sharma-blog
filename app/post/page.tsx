"use client";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  linkDialogPlugin,
  linkPlugin,
  imagePlugin,
  tablePlugin,
  CodeToggle,
  frontmatterPlugin,
  markdownShortcutPlugin,
  sandpackPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  CreateLink,
  InsertCodeBlock,
  ChangeCodeMirrorLanguage,
  InsertFrontmatter,
  ConditionalContents,
  InsertImage,
  InsertSandpack,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  ShowSandpackInfo,
  AdmonitionDirectiveDescriptor,
  directivesPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { ForwardRefEditor } from "./ForwardRefEditor";
import dynamic from "next/dynamic";
import { useState } from "react";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

function App() {
  let [displayOutput, setDisplayOutput] = useState(false);
  let [output, setOutput] = useState("");
  return (
    <>
      <ForwardRefEditor
        onChange={(e) => {
          setDisplayOutput(false);
          setOutput(e);
        }}
        markdown={`hello
`}
        plugins={[
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              cpp: "C++",
              python: "Python",
            },
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          markdownShortcutPlugin(),

          // sandpackPlugin(),
          imagePlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <UndoRedo />
                <CodeToggle />
                <BoldItalicUnderlineToggles />
                <CreateLink />
                <InsertCodeBlock />
                <InsertFrontmatter />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
                <ListsToggle />
                <ConditionalContents
                  options={[
                    {
                      when: (editor) => editor?.editorType === "codeblock",
                      contents: () => <ChangeCodeMirrorLanguage />,
                    },
                    {
                      when: (editor) => editor?.editorType === "sandpack",
                      contents: () => <ShowSandpackInfo />,
                    },
                    {
                      fallback: () => (
                        <>
                          <InsertCodeBlock />
                          <InsertSandpack />
                        </>
                      ),
                    },
                  ]}
                />
                {/* <InsertSandpack />
              <ShowSandpackInfo /> */}
              </>
            ),
          }),
        ]}
      />
      <div className="space-y-2 pb-8 mt-96 md:space-y-5 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            setDisplayOutput(true);
          }}
        >
          Submit
        </button>
      </div>

      {displayOutput && (
        <>
          <pre>{output}</pre>
        </>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
