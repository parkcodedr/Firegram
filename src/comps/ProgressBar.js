import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar"
                style={{ width: progress + "%" }} aria-valuenow={Math.ceil(progress)}
                aria-valuemin="0" aria-valuemax="100">{Math.ceil(progress)}%</div>
        </div>
    );
}

export default ProgressBar;