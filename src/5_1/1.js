class Toggle extends React.Component {
	constructor( props )
	{
		super( props );
		this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind( this );
	}

	handleClick()
	{
		this.setState(
			function ( prevState )
			{
				return {
					isToggleOn: ! prevState.isToggleOn
				};
			}
		);
	}

	render()
	{
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? "ON" : "OFF"}
			</button>
		);
	}
}

ReactDOM.render(
	<Toggle />,
	document.getElementById( "root" )
);
