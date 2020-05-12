import ReactDOM from 'react-dom';
import React from 'react';
import Person from "./components/Person";

const App = () => {
    return (
        <>
            <Person id="I178" top={1} left={1} />
            <Person id="I185" top={1} left={2} />
            <Person id="I186" top={1} left={3} />
            <Person id="I213" top={1} left={4} />
            <Person id="I224" top={1} left={5} />
            <Person id="I225" top={1} left={6} />
            <Person id="I43" top={1} left={7} />

            <Person id="I12" top={1} left={9} />
            <Person id="I183" top={1} left={10} />
            <Person id="I202" top={1} left={11} />
            <Person id="I211" top={1} left={12} />
        </>
    );
};


const wrapper = document.getElementById('root-app');
ReactDOM.render(<App/>, wrapper);

