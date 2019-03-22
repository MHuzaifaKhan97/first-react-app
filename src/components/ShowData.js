import React from 'react';


class ShowData extends React.Component{
    render(){
      return (
        <h1>
          {this.props.userValue}
        </h1>
      );
    }
}
export default ShowData;