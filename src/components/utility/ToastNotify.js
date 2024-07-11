import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

function MyToastComponent(props) {
    const [showToast, setShowToast] = useState(false);
    const handleButtonClick = (e) => {
        e.preventDefault();
        setShowToast(true);
    }
    return (
        <div>
            <Button onClick={handleButtonClick}>عرض Toast</Button>
            <Toast show={showToast} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </div>
    );
}

export default MyToastComponent 