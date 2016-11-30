function update()
{
	const element = (
		<div>
			<h1>Hello, world!</h1>

			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(
		element,
		document.getElementById( "root" )
	);
}

update();

setInterval( update, 1000 );
