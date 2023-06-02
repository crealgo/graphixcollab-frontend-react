const Chance = require('chance');
const { paramCase } = require('change-case');
const { writeFileSync } = require('fs');
const tags = require('../src/content/tags.json');
const prompt = require('prompt-sync')();
const chalk = require('chalk');

const createTags = async () => {
	const chance = new Chance();

	const tagLabelString = prompt(chalk.blue('tag list (comma separated): '));

	const createTag = label => ({
		id: chance.guid(),
		label: label.trim(),
		slug: paramCase(label)
	});

	const isValid = label => {
		return (
			Boolean(label.length > 0) &&
			tags.findIndex(({ slug }) => slug === paramCase(label)) === -1
		);
	};

	tagLabelString.split(',').forEach(label => {
		if (isValid(label)) {
			tags.push(createTag(label));
			return true;
		}

		throw Error(`Tag "${label}" is not valid or already exists`);
	});

	writeFileSync('src/content/tags.json', JSON.stringify(tags, null, 2));
};

createTags();
