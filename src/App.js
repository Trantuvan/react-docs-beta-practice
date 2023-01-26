import ResetForm from "components/use-state/reset-state/ResetForm";
import React from "react";
import "styles/App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResetForm />
    </div>
  );
}

export default App;
