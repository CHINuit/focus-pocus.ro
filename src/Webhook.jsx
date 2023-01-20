import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Webhook() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/sync') {
            fetch('http://localhost/sync.sh')
                .then(response => response.text())
                .then(script => {
                    // execute the script here
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [location]);

    return <div>...</div>;
}
export default Webhook;
