import React,{Component} from "react" ;

import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends Component {
	
	render(){
		return (
			<div>
				<WingBlank>
		    		<Button>default</Button><WhiteSpace />
		    		<Button disabled>default disabled</Button><WhiteSpace />
		    	</WingBlank>
			</div>
		)
	}

}

export default App;









