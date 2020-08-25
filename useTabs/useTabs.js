import React, {useState} from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the section 2"
  }
]

const useTabs = (initialTab, allTabs) =>{
  if(!allTabs || !Array.isArray(allTabs)){
    return; 
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex
  };
};


const App = () => {
  const {currentItem, chageItem} = useTabs(0, content); /* content는 배열이므로 [0] */
  return (
    <div className="App">
      {content.map((section, index) => (
      <button onClick={()=> chageItem(index)}>{section.tab}</button>))}
      <div>{currentItem.content}</div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);