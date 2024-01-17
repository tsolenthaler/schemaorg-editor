import React from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default function Page() {
    const code = "// type your code...";
    const options = {
        selectOnLineNumbers: true
    };

    function onChange(newValue: string, e: any) {
        console.log('onChange', newValue, e);
    }

    function editorDidMount(editor: any, monaco: any) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    return (
        <div style={{ width: '800px', height: '600px' }}>
            <p>Dashboard Page</p>
            <MonacoEditor
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={onChange}
                editorDidMount={editorDidMount}
            />
        </div>
    );
}