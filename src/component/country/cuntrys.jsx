import React, { use } from 'react';

const cuntrys = ({CountrysPromie}) => {
    const cuntrysData = use(CountrysPromie);
    const cuntrys = cuntrysData
    console.log(cuntrys)
    return (
        <div>
            <h1>In the Country</h1>
        </div>
    );
};

export default cuntrys;