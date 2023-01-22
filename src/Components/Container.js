import React from 'react';
import './Container.css';

const Container = () => {
    return (
        <div className="container">
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/main.mp4" type="video/mp4" />
                    <source src="/main.mp4" type="video/webm" />
                </video>
            </div>
            <div className="content">
                {
                    <div className='flex'>
                        <a className="yellow" href="https://artipic.net"><h1 className="yellow">Artipic</h1></a>
                        <a className="red" href="https://www.facebook.com/FoCuS.s.PoCuS.s/"><h1 className="red">FoCuS PoCuS</h1></a>
                    </div>}
            </div>
        </div>
    );
};

export default Container;
