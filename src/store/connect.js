
import React from 'react';
import { StateContext } from './Provider';

const connect = selectState => Component => {
  class Connect extends React.Component {

    constructor(props, context){
      super(props);
      this.state = {
        slice: selectState(context.getState())
      }
      this.unsubscribe = context.subscribe(() => {
        this.setState({slice: selectState(context.getState())})
      })
    }

    componentWillUnmount(){
      this.unsubscribe();
    }

    render() {
      const { dispatch } = this.context;
      const { slice } = this.state;
      return <Component {...slice} dispatch={dispatch
      }></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}

export default connect;