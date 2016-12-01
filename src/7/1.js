function UserGreeting( props )
{
	return <span>Welcome back!</span>;
}

function GuestGreeting( props )
{
	return <span>Please sign up.</span>;
}

function Greeting( props )
{
	const isLoggedIn = props.isLoggedIn;
	if ( isLoggedIn )
	{
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

ReactDOM.render(
	// Try changing to isLoggedIn={true}:
	<Greeting isLoggedIn={false}/>,
	document.getElementById( "root" )
);
