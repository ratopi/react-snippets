const Clock = React.createClass(
	{

		"getInitialState": function ()
		{
			return { date: new Date() };
		},

		"componentDidMount": function ()
		{
			this.timerID = setInterval(
				() => this.tick(),
				1000
			);
		},

		"componentWillUnmount": function ()
		{
			clearInterval( this.timerID );
		},

		"tick": function ()
		{
			this.setState(
				{
					date: new Date()
				} );
		},

		"render": function ()
		{
			return (
				<div>
					<h1>Hello, world!</h1>

					<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				</div>
			);
		}
	}
);

ReactDOM.render(
	<Clock />,
	document.getElementById( "root" )
);
