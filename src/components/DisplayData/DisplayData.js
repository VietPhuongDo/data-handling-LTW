import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DisplayData = () => {
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data');
                setApiData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h2>API Data Display</h2>
            {apiData ? (
// Render your component using the fetched data
                <MyComponent data={apiData} />
            ) : (
// Render a loading state or placeholder
                <p>Loading...</p>
            )}
        </div>
    );
};
export default DisplayData

const MyComponent = ({ data }) => {
    return (
        <div>
            <p>{data.message}</p>
            {/* Render other components based on data */}
        </div>
    );
};