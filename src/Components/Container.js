import React from 'react';
import './Container.css';

const Container = () => {
    return (
        <div className="container">
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/public/main.mp4" type="video/mp4" />
                    <source src="/public/main.mp4" type="video/webm" />
                </video>
            </div>
            <div className="content">
                {/* Your content here */}
            </div>
        </div>
    );
};

export default Container;
