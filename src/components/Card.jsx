import React from 'react'

const Card = ({title,path}) => {
  return (
    <div class="card d-flex flex-col align-items-center justify-content-between pt-4 pb-2 rounded-3 bg-white">
      <img src={path} width="90" height="90" alt="" />
      <h5 class="mt-3 fw-bold">{title}</h5>
    </div>
  )
}

export default Card