ReactDOM.render(
	<Welcome name="World"/>,
	document.getElementById("root")
);


function Welcome( props )
{
	return <h1>Hello, {props.name} !</h1>;
}
