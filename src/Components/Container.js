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
                {
                    <div className='flex'>
                        <a className="link" href="https://artipic.net"><h1 className="link">Artipic</h1></a>
                        <a className="linkf" href="https://www.facebook.com/FoCuS.s.PoCuS.s/"><h1 className="linkf">FoCuS PoCuS</h1></a>
                    </div>}
            </div>
        </div>
    );
};

export default Container;
