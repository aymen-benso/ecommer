import React, { useEffect, useState } from "react";


function App() {

const [BackendData,SetBackendData] = useState([{}])

useEffect(() => {
  fetch('/api').then(
    response => response.json()
  ).then(
    data => {
      SetBackendData(data)
    }
  )
}, [])

  return (
    <div className="App">
     {BackendData}
    </div>
  );
}

export default App;