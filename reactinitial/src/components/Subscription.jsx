import React, { useState } from 'react';
import LoadingMask from './LoadingMask';

function Subscription() {

    const [mail, setMail] = useState("");
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [hide, setHide] = useState(false);

    const handleInputChange = (event) => {
        setMail(event.target.value);
        mail.includes("@") && mail.includes(".") ? setValid(true) : setValid(false);
    };

    const postThisSubscribedData = () => {
        fetch('https://demoapi.com/api/series/newsletter', {
            method: "POST",
            body: JSON.stringify({
                "email": mail
            })
        }).then(res => {
            // setResponse(true);
            setLoading(false);
            setDone(true);
            setTimeout(() => {
                setHide(true);
            }, 5000);
        })
    };

    const handleClickSubscribe = (event) => {
        event.preventDefault();
        console.log("clicked");
        setLoading(true);
        postThisSubscribedData();
    };


    return (
        <>
            {
                hide ? null :
                    loading && !done ? <LoadingMask /> :
                        done ? <h2>Subscribed!</h2> :
                            <form>
                                <h2>Subscribe to our newsletter</h2>
                                <input type="text" value={mail} onChange={(event) => { handleInputChange(event) }} ></input>
                                {valid ? <button onClick={(event) => { handleClickSubscribe(event) }}>Send</button> : <button disabled>Send</button>}
                            </form>
            }

        </>
    )
}

export default Subscription