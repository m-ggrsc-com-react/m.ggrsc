import React,{Component} from 'react';

import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Footer extends Component{
	render (){
		return (
			<div>
				<Button type="warning">warning</Button><WhiteSpace />
	    		<Button type="warning" disabled>warning disabled</Button><WhiteSpace />
	    	</div>
		)
	}
}

export default Footer;