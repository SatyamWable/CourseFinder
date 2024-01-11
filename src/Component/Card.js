import React from "react";
import './Card.css'
function Card({id,pr,prname,course,cn,u,uname,ps,psname,cs,csname,info}){
    return(
        <div className="card">
            <div className="c_id">
            {id} <i><b>{info}</b></i>
        </div>

        <div className="c1">
        <i>{pr}</i>
        <h3>{prname}</h3>
        </div>
        <div className="c2">
        <i>{course}</i>
        <h2>{cn}</h2>
        <i>{u}</i>
        <h3>{uname}</h3>
        <i>{ps}</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>{cs}</i>
        <h4>{psname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{csname}</h4>
        </div>
        </div>
    )

}
export default Card