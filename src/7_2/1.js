function Greeting( props )
{
	const isLoggedIn = props.isLoggedIn;

	return (
		<div>
			The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
		</div>
	);
}

function LoginButton( props )
{
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton( props )
{
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}
class LoginControl extends React.Component {
	constructor( props )
	{
		super( props );
		this.handleLoginClick = this.handleLoginClick.bind( this );
		this.handleLogoutClick = this.handleLogoutClick.bind( this );
		this.state = { isLoggedIn: false };
	}

	handleLoginClick()
	{
		this.setState( { isLoggedIn: true } );
	}

	handleLogoutClick()
	{
		this.setState( { isLoggedIn: false } );
	}

	render()
	{
		const isLoggedIn = this.state.isLoggedIn;

		let button = null;
		if ( isLoggedIn )
		{
			button = <LogoutButton onClick={this.handleLogoutClick}/>;
		}
		else
		{
			button = <LoginButton onClick={this.handleLoginClick}/>;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}
			</div>
		);
	}
}

ReactDOM.render(
	<LoginControl />,
	document.getElementById( "root" )
);
