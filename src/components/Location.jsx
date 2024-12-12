import styles from './Location.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Location() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/locations');
                setLocations(response.data);
            } catch (err) {
                // Handle errors
                console.error(err);
            };
        };
       fetchData();
    }, []);

    return (
        <div className={styles.locations_container}>
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Locations</h2>
            <div className={styles.container}>
            {locations.map(location => (
             <div className={styles.location_container} key={location.id}>
                <div>{location.address}</div>
                <div>{location.street}</div>
                <div>{location.city}, {location.state} {location.zip}</div>
                <div>{location.phone}</div>
             </div>
             ))}
             </div>
        </div>
    )
}