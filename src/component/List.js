import React from 'react'
import Item from './Item'

export default function List({result}) {
    return (
        <>
        {
            result.map(i => {
                return <Item key={i.id} listItem={i} />
            })
        }

        
        
        </>
    )
}
