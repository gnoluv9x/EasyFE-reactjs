import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase , decrease} from './counterSlice'

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const count = useSelector( state => state.counter );
    const dispatch = useDispatch();

    function handleIncreaseCounter(){
        const action = increase(); //actions creator
        console.log( action );
        dispatch( action );
    };
    function handleDecreaseCounter(){
        const action = decrease(); //actions creator
        dispatch( action );
    };
    return (
        <div>
            Number Counter : {count}
            <div>
                <button onClick={handleIncreaseCounter}>Increase</button> 
                <button onClick={handleDecreaseCounter}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;
