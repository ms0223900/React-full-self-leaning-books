import React,{ Component } from 'react';

import WorkController from './WorkController';

import BreakController from './BreakController';

export default class TimerControllers extends Component {
	render(){
		return (
			<div className="time-controllers">
				<WorkController/>
				<BreakController/>
			</div>
		)
	}
}
