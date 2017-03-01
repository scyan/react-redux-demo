import React from 'react';

import   {Component} from 'react';
import * as actions from './actions';
class Count extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div >
          		Hello, I'm a count: {this.props.count}
       		</div>
       	);

	}
}
	
export default class App extends Component{
	constructor(props){
		super(props);
		this.state=this.props.store.getState();
	}

	componentDidMount(){
		let _this = this;
		let store=this.props.store
		
		//订阅store发起的所有事件,获取新的state用来更新自身的state
		store.subscribe(function(){
			_this.setState(store.getState());
		
		});
	}
	
	add(count){
		//发起addCount事件
		this.props.store.dispatch(actions.addCount(count));
	}

	render(){
		return (
			<div>
				<Count store={this.store} count={this.state.count}/>
				<button onClick={this.add.bind(this,3)}>add</button>
			</div>
	    )
	}
}
