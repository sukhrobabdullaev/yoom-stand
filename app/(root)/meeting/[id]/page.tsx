import React from 'react'

function Meeting({params}: {params: {id: string}}) {
  return (
    <div>
      Meeting {params.id}
    </div>
  )
}

export default Meeting
