import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Menu.module.css';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/posts');
                setMenuItems(response.data);
            } catch (err) {
                // Handle errors
                console.error(err);
            };
        };
       fetchData();
    }, []);

    return (
        <div className={styles.menu_container}>
            {menuItems.map(item => (
                <div key={item.id} className={styles.menu_item}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                </div>
            ))}
        </div>

    )
}

export default Menu;