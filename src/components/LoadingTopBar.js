import React, {useEffect, useState} from 'react';

const LoadingTopBar = ({isLoading}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const loadingBar = document.getElementById("loading-bar");
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 130);

        if (!isLoading){
            setTimeout(()=>{
                loadingBar.parentElement.style.display="none";
                loadingBar.style.width="0%";
                setCounter(0);
                clearInterval(interval);
            },1000)
        }else{
            loadingBar.parentElement.style.display="block";
        }

        return () => {
            clearInterval(interval);
        };
    }, [isLoading]);

    return (
        <div className="top-loading-animation"
             style={{position: "fixed", top: 0, left: 0, zIndex: '9999', width: '100%'}}>
            <div id="loading-bar" className="loading-bar" style={{width: `${isLoading ? counter : 100}%`, height: '8px'}}></div>
        </div>
    );
};

export default LoadingTopBar;