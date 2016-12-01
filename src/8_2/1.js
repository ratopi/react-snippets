function Mailbox( props )
{
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>

			<h2>
				You have {unreadMessages.length === 0 ? "no" : unreadMessages.length} unread messages.
			</h2>
		</div>
	);
}

function Messages( props )
{
	const list =
		props.messages.map(
			( item ) =>
				<li>{item}</li>
		);

	return (
		<ul>
			{list}
		</ul>
	);
}

const MessageContainer = React.createClass(
	{
		"getInitialState": function ()
		{
			return {
				"messages": [],
				"counter": 1
			};
		},

		"componentDidMount": function ()
		{
			this.timerID = setInterval(
				() => this.change(),
				500
			);
		},

		"componentWillUnmount": function ()
		{
			clearInterval( this.timerID );
		},

		"change": function ()
		{
			this.setState(
				function ( prevState )
				{
					const messages = prevState.messages;
					var counter = prevState.counter;
					if ( messages.length === 0 || Math.random() < .5 )
					{
						messages.push( "Msg#" + counter ++ );
					}
					else
					{
						messages.pop();
					}

					return {
						"messages": messages,
						"counter": counter
					};
				}
			);
		},

		"render": function ()
		{
			return (
				<div>
					<Mailbox unreadMessages={this.state.messages}/>
					<Messages messages={this.state.messages}/>
				</div>
			);
		}
	}
);

ReactDOM.render(
	<MessageContainer/>,
	document.getElementById( "root" )
);
