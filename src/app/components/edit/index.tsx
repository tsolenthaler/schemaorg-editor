'use client'

import MonacoEditor from '@monaco-editor/react';
import { useRef, useEffect, useState } from 'react';
import Papa from 'papaparse';

const code = `{
  "some": "json"
}`;

const Edit = (_: any) => {
    const editorRef = useRef(null);
    const [completionItems, setCompletionItems] = useState([]);
  
    const provideCompletionItems = () => {
      return { suggestions: completionItems };
    };
  
    function onMount(editor: any, monaco: any) {
        const modelUri = "https://tsolenthaler.github.io/schemaorg-editor/examples/hotel.jsonld"
        const model = monaco.editor.createModel(
          `{
    "@type": "Place"
}`, "json", monaco.Uri.parse(modelUri)
        )

        fetch('https://schema.org/version/latest/schemaorg-current-https-properties.csv')
        .then(response => response.text())
        .then(data => {
          const results = Papa.parse(data, { header: true });
          
          setCompletionItems(results.data.map(item => ({
            label: item.propertyID,
            kind: monaco.languages.CompletionItemKind.Property,
            insertText: item.propertyID,
            detail: item.description,
          })));
        });
        
        monaco.languages.registerCompletionItemProvider('json', { provideCompletionItems });
        editor.setModel(model)
        editorRef.current = editor;
    }

    const formatCode = () => {
      if (editorRef.current) {
        editorRef.current.getAction('editor.action.formatDocument').run()
      }
    }

    return(
        <div>
           <button onClick={formatCode}>Format Code</button>
            <MonacoEditor
                height="100vh" // By default, it fully fits with its parent
                theme="dark"
                language="json"
                value={code}
                onMount={onMount}
            />
        </div>
    );

}
export default Edit;