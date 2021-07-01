import React from 'react'



function SloatM(props){
   
    let {x,y,z} = props;

    if((x==y) && (y==z)){
      return(
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This Is Matching</h1>
          <hr/>
        </div>
      )
    }else{
      return(
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This Is Not Matching</h1>
          <hr/>
        </div>
      )
    }
  }


  export default SloatM;