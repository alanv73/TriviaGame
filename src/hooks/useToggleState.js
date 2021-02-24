import { useState } from 'react';

const useToggleState = (value=false) => {
    const [state, setState] = useState(value);
    const toggle = () => {
        setState(!state);
    }

    return [state, toggle];
}

export default useToggleState;