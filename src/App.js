import React from "react";
import AlbumList from "./features/Album";
import ColorBox from "./features/Colorbox";
import Counter from "./features/Counter";
import ToDoFeatures from "./features/Todo";
// import ToDoFeatures from "./features/Todo";

function App() {
    return (
        <div className="App">
            <ToDoFeatures />
            {/* <AlbumList/>
            <ColorBox />
            <Counter /> */}
        </div>
    );
}

export default App;
