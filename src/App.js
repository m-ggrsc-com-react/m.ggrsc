import React,{Component} from "react" ;

import Footer from "@common/Footer" ;


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
				<Footer />
			</div>
		)
	}

}

export default App;









