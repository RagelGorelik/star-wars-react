import React from 'react';

export default class Pager extends React.Component{
  render() {
    const  {prev, next} = this.props;
    return (
      <div>
        <span className="pager">
          <button type="button" className="btn btn-primary" onClick={prev} disabled={!prev}>prev</button>
          <button type="button" className="btn btn-primary pull-right" onClick={next} disabled={!next}>next</button>
        </span>
      </div>
    )
  }
}