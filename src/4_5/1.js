const Greeting = React.createClass(
	{
		"render": function ()
		{
			return (
				<h1>Hello, world!</h1>
			);
		}
	}
);

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
				<span>It is {this.state.date.toLocaleTimeString()}.</span>
			);
		}
	}
);

ReactDOM.render(
	(
		<div>
			<Greeting />
			<h2><Clock /></h2>
		</div>
	),
	document.getElementById( "root" )
);
