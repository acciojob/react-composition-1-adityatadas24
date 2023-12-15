
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs.js";

const setTabs=[
  {
    title:"Tab 1",
    content: "This is a Content Tab 1."
  },
  {
    title:"Tab 2",
    content: "This is a Content Tab 2."
  },
  {
    title:"Tab 3",
    content: "This is a Content Tab 3."
  }
]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs setTabs={setTabs}/>
    </div>
  )
}

export default App
