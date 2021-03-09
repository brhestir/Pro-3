
import React from 'react';
import { render } from 'react-dom';
import CandleStickChartWithFibonacciInteractiveIndicator from "../CandleStickChartWithFibonacciInteractiveIndicator/CandleStickChartWithFibonacciInteractiveIndicator"
import { getData } from "../../utils/utils"
import { TypeChooser } from "react-stockcharts/lib/helper";
import { ChartCanvas, Chart } from "react-stockcharts";

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <CandleStickChartWithFibonacciInteractiveIndicator type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

render(
	<ChartComponent />,
	document.getElementById("root")
);

export default ChartComponent;