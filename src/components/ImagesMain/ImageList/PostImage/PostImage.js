import React, { useState } from "react";
import style from "./PostImage.module.css";

import AuthContext from "../../../../other/AuthContext";
import initPostImage from "./InitPostImage";

function PostImage(props) {
    const ctx = React.useContext(AuthContext);
    const [image, setImage] = useState(initPostImage);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const reader = new FileReader();
    reader.onload = () => {
        setImage(reader.result);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        fetch('http://213.155.174.52:5000/images/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'value': image,
                'name': title,
                'description': description,
                'user_login': ctx.login
            })
        })
            .then(response => response.json())
            .then(result => {
                props.refresh();
            })
    }

    return (<form className={style.form} onSubmit={formSubmit} >
        <div className={style.desc}>
            {/* <div>Share your images</div> */}
        </div>
        <div className={style.file} style={{ 'backgroundImage': 'url(' + image + ')' }}>
            <input required type={"file"}
                accept={'image/*'}
                onChange={event => reader.readAsDataURL(event.target.files[0])} />
        </div>
        <div className={style.inputs}>
            <div>
                <label className="unselectable" htmlFor="title">Title</label>
                <input placeholder="Title" name="title" required type={'text'} value={title} onChange={event => setTitle(event.target.value)} />
            </div>

            <div>
                <label className="unselectable" htmlFor="description">Description</label>
                <input placeholder="Description" name="description" required type={'text'} value={description} onChange={event => setDescription(event.target.value)} />
            </div>

        </div>
        <button type={'submit'} className={style.submitButton}><p className="unselectable">Submit</p></button>
    </form>);
}

export default PostImage;