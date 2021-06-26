import React from 'react'

export default function Item({listItem}) {
    return (
        <>
        
        <h2>{listItem.title}<a target='_blank' href={listItem.url}>read more...</a></h2>

        
        </>
    )
}
