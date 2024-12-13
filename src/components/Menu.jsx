import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import { AddOutline } from 'react-ionicons'
function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/posts');
            setMenuItems(response.data);
        } catch (err) {
            // Handle errors
            console.error(err);
        };
    };

    useEffect(() => {
        fetchData();
    }, []);

    function addHandler() {
        alert("add item")
    }

    function customizeHandler() {
        alert("customize item")
    }

    return (
        <div className={styles.menu_container}>
            {menuItems.map(item => (
                <div className={styles.menu_item_container}>
                    <div className={styles.image_container}>
                        {item.name}<br />picture
                    </div>
                    <div className={styles.menu_item}>
                        <div key={item.id}>
                            <div className={styles.menu_item_title}>
                                {item.name}
                            </div>
                            <div>{item.description}</div>
                            <div className={styles.buttons_container}>
                            
                                <div className={styles.add_button} onClick={addHandler}>
                                    <AddOutline
                                color={'#00000'} 
                                title={'Add'}
                                height="15px"
                                width="15px"
                                /> Add
                                </div>
                                <div className={styles.add_button} onClick={customizeHandler}>Customize</div>
                            </div>
                        </div>
                    </div>


                </div>
            ))}
        </div>

    )
}

export default Menu;