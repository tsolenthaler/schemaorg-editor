'use client'

import MonacoEditor from '@monaco-editor/react';
import { useRef, useEffect, useState } from 'react';

const code = `{
  "some": "json"
}`;

const Edit = (_: any) => {
    const editorRef = useRef(null);
  
    const onMount = (editor: any, monaco: any) => {
      fetch('./assets/schemaorg-all-https.jsonld')
        .then(response => response.json())
        .then(data => {
            const completionItems = data["@graph"].map((item: any) => ({
            //label: item["@id"].replace('schema:', ''),
            label: item["rdfs:label"],
            kind: item["@type"] === "rdf:Property" ? monaco.languages.CompletionItemKind.Property : monaco.languages.CompletionItemKind.Class,
            insertText: item["rdfs:label"],
            detail: item["rdfs:comment"],
          }));
  
          const provideCompletionItems = () => {
            return { suggestions: completionItems };
          };
  
          monaco.languages.registerCompletionItemProvider('json', { provideCompletionItems });
      });
  
      editorRef.current = editor;
    };

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