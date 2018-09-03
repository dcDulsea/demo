import React from 'react';
import { connect } from 'react-redux';
import { showData } from "../acitons";

const style = {
  display: 'flex',
  width: "100%",
  flexDirection: 'row',
  justifyContent: 'space-around'
}

const GetData = ({ dispatch }) => {
  return (
    <div style={style}>
      <button type="submit" onClick={e => {
        console.log(e.target);
        const id = '1'
        dispatch(showData(id))
      }}>分页</button>
    </div>
  )
}

export default connect()(GetData);