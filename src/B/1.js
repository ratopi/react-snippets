const AccountFields = React.createClass(
	{
		"saveAndContinue": function ( e )
		{
			e.preventDefault();

			// Get values via this.refs
			var data = {
				name: this.refs.name.value,
				password: this.refs.password.value,
				email: this.refs.email.value
			};

			this.props.saveValues( data );
		},

		"render": function ()
		{
			return ( <div>
					<label>Name</label>
					<input type="text"
					       ref="name"
					       defaultValue={ this.props.fieldValues.name }/>

					<label>Password</label>
					<input type="password"
					       ref="password"
					       defaultValue={ this.props.fieldValues.password }/>

					<label>Email</label>
					<input type="email"
					       ref="email"
					       defaultValue={ this.props.fieldValues.email }/>

					<button onClick={ this.saveAndContinue }>Save and Continue</button>
				</div>
			)
		}
	}
);


class Container extends React.Component {
	constructor( props )
	{
		super( props );
		this.state = {
			"values": {}
		};
	}

	store( data )
	{
		console.log( "STORING:" );
		console.log( data );
	}

	render()
	{
		return <AccountFields fieldValues={this.state.values} saveValues={this.store}/>
	}
}


ReactDOM.render(
	<Container />,
	document.getElementById( "root" )
);
