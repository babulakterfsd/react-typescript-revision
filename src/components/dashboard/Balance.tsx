import React, { useEffect, useState } from 'react';

function Balance() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        // fetch balance from server
        setTimeout(() => {
            setBalance(7000);
        }, 1000);
    }, []);

    if (balance === 0) {
        return (
            <div>
                <p>Getting Balance from database...</p>
            </div>
        );
    }

    return (
        <div>
            <p>Your balance is {`${balance}`}</p>
        </div>
    );
}

export default Balance;
