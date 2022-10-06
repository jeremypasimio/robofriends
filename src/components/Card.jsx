import React from "react";

const Card = (props) => {

    const { name, user, email } = props;

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="user robot" />
            <div>
                <h2>{name}</h2>
                <p>{user}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;