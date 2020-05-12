import ReactDOM from 'react-dom';
import React from 'react';
import Person from "./components/Person";

const App = () => {
    return (
        <>
            <Person id="I178" top={1} left={1}/>
            <Person id="I185" top={1} left={2}/>
            <Person id="I186" top={1} left={3}/>
            <Person id="I213" top={1} left={4}/>
            <Person id="I224" top={1} left={5}/>
            <Person id="I225" top={1} left={6}/>
            <Person id="I43" top={1} left={7}/>

            <Person id="I12" top={1} left={9}/>
            <Person id="I183" top={1} left={10}/>
            <Person id="I202" top={1} left={11}/>

            <Person id="I208" top={1} left={13}/>
            <Person id="I44" top={1} left={14}/>

            <Person id="I15" top={1} left={16}/>
            <Person id="I58" top={1} left={17}/>

            <Person id="I132" top={1} left={19}/>
            <Person id="I67" top={1} left={20}/>
            <Person id="I66" top={1} left={22}/>
            <Person id="I103" top={1} left={23}/>
            <Person id="I104" top={1} left={24}/>

            <Person id="I110" top={1} left={26}/>
            <Person id="I53" top={1} left={27}/>

            <Person id="I14" top={1} left={29}/>
            <Person id="I56" top={1} left={30}/>
            <Person id="I57" top={1} left={31}/>


            <Person id="I184" top={2} left={7}/>
            <Person id="I136" top={2} left={8}/>
            <Person id="I137" top={2} left={9}/>
            <Person id="I8" top={2} left={10}/>

            <Person id="I9" top={2} left={12}/>
            <Person id="I59" top={2} left={14}/>
            <Person id="I60" top={2} left={16}/>

            <Person id="I105" top={2} left={20}/>
            <Person id="I10" top={2} left={22}/>

            <Person id="I11" top={2} left={24}/>
            <Person id="I45" top={2} left={25}/>
            <Person id="I46" top={2} left={26}/>
            <Person id="I47" top={2} left={27}/>
            <Person id="I48" top={2} left={28}/>
            <Person id="I98" top={2} left={29}/>


            <Person id="I18" top={3} left={5}/>
            <Person id="I21" top={3} left={8}/>
            <Person id="I20" top={3} left={11}/>
            <Person id="I19" top={3} left={14}/>
            <Person id="I7" top={3} left={17}/>

            <Person id="I6" top={3} left={19}/>
            <Person id="I16" top={3} left={23}/>
            <Person id="I17" top={3} left={27}/>


            <Person id="I13" top={4} left={17}/>
            <Person id="I5" top={4} left={19}/>

            <Person id="I180" top={5} left={19}/>
        </>
    );
};


const wrapper = document.getElementById('root-app');
ReactDOM.render(<App/>, wrapper);

