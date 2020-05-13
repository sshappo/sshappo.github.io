import ReactDOM from 'react-dom';
import React from 'react';

import { Tree } from "./components/Tree";

const App = () => {
    return (
        <Tree />
    );
};

const wrapper = document.getElementById('root-app');
ReactDOM.render(<App/>, wrapper);

