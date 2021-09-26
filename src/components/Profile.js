import React from 'react'
import s from './../style/profile.module.css'
import {Link} from "react-router-dom";

const Profile = ( props ) => {

    const id = props.match.params.id
    const {login, avatar_url, html_url} = props.location.state.data


    return (
        <>
           <div className={s.user__card}>
               <h6 className={s.user__id}>ID: {id}</h6>
               <h2 className={s.user__login}>{login}</h2>
               <div className={s.user__avatar}><img className={s.user__img} src={avatar_url} alt="avatar"/></div>
                <a className={s.user__button} href={html_url}>github profile</a>
               <Link className={s.user__button} to='/'>назад</Link>
            </div>

        </>
 )
}

export default Profile

