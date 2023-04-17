const fs = require('fs');

module.exports = () => {
	const variablesFile = 'tokens/build/css/variables.css';
	const distStringFile = 'tokens/build/css/variablesString.js';
	const tokensExist = fs.existsSync(variablesFile);

	if (tokensExist) {
		const tokens = fs.readFileSync(variablesFile, 'utf8');
		const tokensArray = tokens.split('\n');
		const tokensArrayFiltered = tokensArray.filter(token => token !== '');
		const tokensArrayFilteredAndTrimmed = tokensArrayFiltered.map(token => token.trim());
		const tokensArrayFilteredAndTrimmedAndJoined = tokensArrayFilteredAndTrimmed.join('\n');
		fs.writeFileSync(distStringFile, `module.exports = \`${tokensArrayFilteredAndTrimmedAndJoined}\`;`);
	}
};

