import MonacoEditor from '@monaco-editor/react';

const code = `{
  "some": "json"
}`;

const Editor = (_: any) => {

    const classes = {
        root: {
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            padding: '1rem'
        }
    };

    function onMount(editor: any, monaco: any) {
        const modelUri = "https://tsolenthaler.github.io/schemaorg-editor/examples/hotel.jsonld"
        const model = monaco.editor.createModel(
          `{
    "@type": "Place"
}`, "json", monaco.Uri.parse(modelUri)
        )
        editor.setModel(model)
    
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
          ...monaco.languages.json.jsonDefaults.diagnosticOptions,
          allowComments: true,
          schemas: [
            {
              uri: "foo://myapp/segment/type",
              fileMatch: ["*.json"],
              schema: {
                type: "object",
                properties: {
                  type: {
                    enum: ["v1", "v2"],
                  },
                  name: {
                    enum: ["Test Object"],
                  },
                  byDay: {
                    enum: ["https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday", "https://schema.org/Saturday", "https://schema.org/Sunday"],
                  },
                },
              },
            }
          ],
          validate: true
        })
      }

    return(
        <div>
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
export default Editor;