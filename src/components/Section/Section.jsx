import { Component } from 'react';

class Section extends Component {
  render() {
      const {title, children} = this.props
    return (
      <>
        <h1>{title}</h1>
        {children}
        <h2>Statistics</h2>
      </>
    );
  }
}

export default Section;
