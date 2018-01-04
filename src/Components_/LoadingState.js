import React from 'react';
const assign = Object.assign;

const style_profile_wrap = {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'} 
const style_shadow = assign({backgroundColor: '#337ab7', opacity: 0.8}, style_profile_wrap)
const style_profile_window = {position: 'relative', backgroundColor: 'white', }
const style_profile_body = assign({padding: ' 20px 20px 50px 20px'}, style_profile_window)
assign(style_profile_window, {width: '50%', margin: '20% auto', float: 'none'});
export default class LoadingState extends React.Component{
  render() {
    const  {loading} = this.props;

    return (
      loading ?
      <div>
          <div style={style_shadow}>
          </div>
          <div style={style_profile_wrap}>
            <div id='loadBody' style={style_profile_window}>
        <span className="">
          <h2>...Loading...</h2>
        </span>
      </div>
      </div>
      </div>
      : null
    )
  }
}