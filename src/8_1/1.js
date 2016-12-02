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

const MessageContainer = React.createClass(
	{
		"getInitialState": function ()
		{
			return {
				"messages": []
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
					if ( messages.length === 0 || Math.random() < .5 )
					{
						messages.push( "x" );
					}
					else
					{
						messages.pop();
					}

					return {
						"messages": messages
					};
				}
			);
		},

		"render": function ()
		{
			return (
				<Mailbox unreadMessages={this.state.messages}/>
			);
		}
	}
);

ReactDOM.render(
	<MessageContainer/>,
	document.getElementById( "root" )
);
