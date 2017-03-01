import React from 'react';
import   {Component} from 'react';
import {connect} from 'react-redux';
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

class App extends Component{
	add(count){
		//dispatch是被connect注入到props中的
		this.props.dispatch(actions.addCount(count));
	}
	changeName(name){
		this.props.dispatch(actions.changeName(name));
		console.log(this.props.store.getState());
	}
	render(){
		return (
			<div>
				<Count  count={this.props.count}/>
				<button onClick={this.add.bind(this,3)}>add</button>
				<button onClick={this.changeName.bind(this,'haha')}>changeName</button>
			</div>
	    )
	}
}


// 把state中的值注入到组件的props中

function mapStateToProps(state){
	return{
		//仅把count放到App的props中,在App中就可以使用this.props.count来访问count了
		//并且只有当state中的count发生改变时才会引起app的重新渲染
		count:state.count
	}
}
	
//用connect生成的新组件覆盖原App，实际上我们在Provider里使用的是这个App,这一点非常重要
export default	App=connect(mapStateToProps)(App);	
