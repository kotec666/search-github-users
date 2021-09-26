import React, { useState } from 'react'
import Card from "./Card";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import axios from 'axios'

const Cards = () => {
    const [user, setUser] = useState('')
    const [items, setItems] = useState({})


    const onSubmit = (e) => {
        if (user.trim()){
            if(e.key === 'Enter') {
                axios.get(`https://api.github.com/search/users?q=${user}`).then(result => {
                    setItems(result.data.items)
                    setUser('')
                })
            }
        }
    }

    return (
     <>
                <input
                     type="text"
                     className="search-input"
                     placeholder="Введите ник пользователя..."
                     value={user}
                     onChange={event => setUser(event.target.value)}
                     onKeyPress={onSubmit}
                 />

         <div className="app-users-wrapper">
         { items.length &&
            items.map((item, index) => {
                return (
                        <Route key={`${item} ${index}`} path="/" exact  render={()=>

                            <Card
                            avatar_url={item.avatar_url}
                            id={item.id}
                            login={item.login}
                            items={item}
                        />

                        }  />
                )
            })
         }
         </div>
         <Route path="/profile/:id" exact  component={Profile}  />
     </>
  )
}

export default Cards