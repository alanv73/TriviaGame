import { useState } from 'react';

const useIncrementState = value => {
    const [state, setState] = useState(value);
    const increment = () => {
        setState(state + 1);
    }

    return [state, increment];
}

export default useIncrementState;