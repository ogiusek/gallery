import React, { useState } from "react";
import style from "./PostImage.module.css";

import AuthContext from "../../../../other/other/AuthContext";
import initPostImage from "./InitPostImage";
import link from "../../../../other/other/link";

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
        fetch(link + 'images/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': title,
                'description': description,
                'value': image,
                'user_login': ctx.login
            })
        })
            .then(response => response.json())
            .then(() => {
                props.refresh();
            })
    }

    return (<form className={style.form} onSubmit={formSubmit} >
        <div className={style.textInputs}>
            <div className={style.title}>
                <label htmlFor="title">Title</label>
                <input placeholder="Title" name="title" required type={'text'} value={title} onChange={event => setTitle(event.target.value)} />
            </div>

            <div className={style.desc}>
                <label htmlFor="description">Description</label>
                <input placeholder="Description" name="description" required type={'text'} value={description} onChange={event => setDescription(event.target.value)} />
            </div>
        </div>
        <div className={style.submitBox + (initPostImage !== image ? ' invert' : '')}>
            <div className={style.file} style={{ 'backgroundImage': 'url(' + image + ')' }}>
                <input required type={"file"}
                    accept={'image/*'}
                    onInput={event => reader.readAsDataURL(event.target.files[0])} />
            </div>
            <button type={'submit'} className={style.submitButton}>Submit</button>
        </div>
    </form >);
}

export default PostImage;