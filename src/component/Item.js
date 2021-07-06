import React from 'react'

export default function Item({listItem}) {
    return (
        <>
        
        <p>{listItem.title}<a target='_blank' href={listItem.url}> read more...</a></p>

        
        </>
    )
}
