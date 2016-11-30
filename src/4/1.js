function Welcome( props )
{
	return <h1>Hello, {props.name}.</h1>;
}

function App()
{
	return (
		<div>
			<Welcome name="Anna"/>
			<Welcome name="Berta"/>
			<Welcome name="Cecille"/>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById( "root" )
);
