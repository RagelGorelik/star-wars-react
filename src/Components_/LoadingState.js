import React from 'react';
const style_profile_wrap = {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'} 
export default class LoadingState extends React.Component{
  render() {
    const  {loading} = this.props;

    return (
      loading ?
      <div style={style_profile_wrap}>
        <span className="">
          <h2>Loading...</h2>
        </span>
      </div>
      : null
    )
  }
}