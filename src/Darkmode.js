import React from "react"
import Item from './component/Item'


export default function Darkmode({listItem}) {
    return (
        <div className="todo-container">
            <h2>{listItem.title}<a target='_blank' href={listItem.url}>read more...</a></h2>
        </div>
    )
}
  