import React from 'react';

function TextArea({minRows}) {
    const [rows, setRows] = React.useState(minRows);
    const [value, setValue] = React.useState("");
    
    React.useEffect(() => {
      const rowlen = value.split("\n");
  
      if (rowlen.length > minRows) {
        setRows(rowlen.length);
      }
    }, [value]);
  
    return (
      <textarea class="mx-auto w-6/12 h-32 p-2 bg-black text-white" rows={rows} onChange={(text) => setValue(text.target.value)} />
    );
  }

  export default TextArea;