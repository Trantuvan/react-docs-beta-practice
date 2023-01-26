import React, { useState } from "react";
import Form from "./Form";

function ResetForm() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </div>
  );
}

export default ResetForm;
