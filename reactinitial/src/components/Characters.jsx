import React from 'react'

function Characters({ name, details }) {

    const [data, setData] = React.useState(false);

    return (
        <>
            <h2>{name}</h2>
            {data &&
                <>
                    <h4>{details}</h4>
                </>
            }
            <button onClick={() => { setData(!data) }}>{data ? "Show less" : "Show more"}</button>
        </>
    )
}

export default Characters