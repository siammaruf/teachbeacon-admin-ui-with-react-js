import React from 'react';

const LoadingAnimation = () => {

    return (
        <>
            <div className="spinner">
                <span className="ball-1"></span>
                <span className="ball-2"></span>
                <span className="ball-3"></span>
                <span className="ball-4"></span>
                <span className="ball-5"></span>
                <span className="ball-6"></span>
                <span className="ball-7"></span>
                <span className="ball-8"></span>
            </div>

            <div className="top-loading-animation" style={{position:"fixed",top:0,left:0}}>
                <div id="loading-bar" className="loading-bar" style={{width:'0%',height:'10px',backgroundColor:"red"}}></div>
            </div>
        </>
    );
};

export default LoadingAnimation;