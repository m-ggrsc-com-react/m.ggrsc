import React,{Component} from "react" ;

import Home from "@components/Home" ;


class App extends Component {
	
	constructor (){
		super();

		this.current = this.current.bind(this);
	}

	current(){
		console.log(0)
	}

	render(){
		return (
			<div>				
				<Home/>
			</div>
		)
	}

}

export default App;









