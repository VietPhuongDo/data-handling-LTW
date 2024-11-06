import React, { useState, useEffect } from 'react';
import './ApiExample.css';

const ApiExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="api-example-container">
            <h1>API Data</h1>
            {loading ? (
                <p className="loading">Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.cca3}>{item.name.common}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ApiExample;
