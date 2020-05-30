import React, {useContext} from 'react';
import {ThemeConsumer, ThemeContext} from './ThemeContext';

const styles = {
    ciemno: {
        backgroundColor: 'black',
        color: 'white'
    },
    jasno: {
        backgroundColor: 'white',
        color: 'black'        
    }
}

const Przycisk = ({children}) => {

    const context = useContext(ThemeContext);

    return <div>
        <ThemeConsumer>
            {value => (
                <button className="btn btn-primary" style={styles[value]}>
                {children} {value}
                </button>
            )} 
        </ThemeConsumer>

        <button className="btn btn-primary" style={styles[context]}>
            {children} {context}
        </button>
    </div>;
}

export default Przycisk;