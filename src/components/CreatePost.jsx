import React from 'react';
import { useState } from "react"
import apiCreatePost from '../api/apicreatepost';

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("$")
    const [location, setLocation] = useState("On Request")
    const [willDeliver, setWillDeliver] = useState(false)

    const handleCheckbox = () => {
        willDeliver ===false ? setWillDeliver(true): setWillDeliver(false)
    }

    return (
        <div className="create-post">
                <form
                onSubmit={(event) => {
                    event.preventDefault()
                    apiCreatePost(title, description, price, location, willDeliver)
                    setTitle("")
                    setDescription("")
                    setPrice("$")
                    setLocation("On Request")
                    setWillDeliver(false)
                }}
                >

                    <div className="form">
                        <div className="create-title">Create Your Post!</div>
                        <div className="formDiv">
                            <input
                            type="text"
                            value={title}
                            onChange={({target: {value}}) => setTitle(value)}
                            placeholder="Title"
                            required
                            />
                        </div>

                        <div className="formDiv">
                            <input
                            type="text"
                            value={description}
                            onChange={({target: {value}}) => setDescription(value)}
                            placeholder="Description"
                            required
                            />
                        </div>

                        <div className="formDiv">
                            <input
                            type="text"
                            value={price}
                            onChange={({target: {value}}) => setPrice(value)}
                            placeholder="Price"
                            required
                            />
                        </div>

                        <div className="formDiv">
                            <input
                            type="text"
                            value={location}
                            onChange={({target: {value}}) => setLocation(value)}
                            placeholder="Location (Optional)"
                            />
                        </div>

                        <div className="formDiv">
                            <fieldset>
                            <legend>Will Deliver?</legend>
                            <label>Yes</label>
                            <input
                            type="checkbox"
                            label="Will Deliver?"
                            onChange={handleCheckbox}
                            />
                            </fieldset>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>      
        </div>
    );
};

export default CreatePost;