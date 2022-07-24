import React from 'react';
import choose from "../assets/choose.png"

const Choose = () => {
  return (
    <div className='choose'>
<div className="img2">
    <img src={choose} alt="choose" />
</div>
<div className="content2">
    <h2> Why should you Choose Our Website ?</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quis dignissimos, suscipit non veritatis minus, earum eveniet, debitis animi nihil exercitationem officiis nostrum error unde beatae fugit necessitatibus eaque consequatur.</p>
<button>Read More</button>
</div>
    </div>
  )
}

export default Choose;