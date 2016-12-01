class ClickButtons extends React.Component {

	constructor( props )
	{
		super( props );
		// This binding is necessary to make `this` work in the callback
		this.handleClick3 = this.handleClick3.bind( this );
	}

	handleClick1 = () =>
	{
		console.log( "1. this is:", this );
	};

	handleClick2()
	{
		console.log( "2. this is:", this );
	}

	handleClick3()
	{
		console.log( "3. this is:", this );
	}

	render()
	{
		return (
			<div>
				<button onClick={this.handleClick1}>Click me 1</button>
				<br/>
				<button onClick={this.handleClick2}>Click me 2a</button>
				<br/>
				<button onClick={(e) => this.handleClick2(e)}>Click me 2b</button>
				<br/>
				<button onClick={this.handleClick3}>Click me 3</button>
			</div>
		);
	}
}

ReactDOM.render(
	<ClickButtons />,
	document.getElementById( "root" )
);
