async function main() {
	const response = await fetch("https://status.openai.com/api/v2/status.json");

	const data = await response.json();
	console.log(data);
}
main();
