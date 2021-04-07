import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Upload = () => {
    const [file, setFile] = useState();
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
            console.log(selected);
        } else {
            setError("Please selected a valid file (png,jpeg)");
            setFile(null);
        }

    }
    return (
        <div>
            <form>
                <section className=" row justify-content-center">
                    <div className="file-input ">
                        <input type="file" id="file" className="file" onChange={changeHandler} />
                        <label htmlFor="file">
                            Choose Image
                    <p className="file-name"></p>
                        </label>
                    </div>
                </section>

            </form>
            {error && <div className="error">{error}</div>}
            {file && <div className="error">{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    );
}

export default Upload;