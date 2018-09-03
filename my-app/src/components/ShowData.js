import React from 'react';

const ShowData = (state) => {
  console.log(state);
  return(
    <div>
      {state.data}
    </div>
  )
}

export default ShowData;