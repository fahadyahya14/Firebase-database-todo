import React from 'react';


class Button extends React.Component{ 
render () {
  return (
    <button className={this.props.className} id={this.props.indexs} onClick={this.props.ojclick}>{this.props.text}</button>
  )
}

}

export default Button;