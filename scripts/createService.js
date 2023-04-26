const Chance = require('chance');
const {paramCase} = require('change-case');
const {writeFileSync} = require('fs');
const services = require('../src/content/services.json');
const prompt = require('prompt-sync')();

const chance = new Chance();

const createService = (name, description, imageSrc, imageAlt, tags) => ({
	id: chance.guid(),
	name: name ?? '',
	slug: paramCase(name) ?? '',
	description: description ?? '',
	image: {
		src: imageSrc ?? chance.avatar(),
		alt: imageAlt ?? ''
	},
	tags: tags ? tags.split(',').map(tag => tag.trim()) : []
});

const addService = () => {
	const name = prompt('name: ');
	const description = prompt('description: ');
	const imageSrc = prompt('imageSrc: ');
	const imageAlt = prompt('imageAlt: ');
	const tags = prompt('tags: ');

	// TODO: add fail-safes for empty inputs
	services.push(createService(name, description, imageSrc, imageAlt, tags));

	writeFileSync(
		'src/content/services.json',
		JSON.stringify(services, null, 2)
	);

	const addAnother = prompt('add another service? (y/n): ');
	const yes = /(yes|yep|y)/i.test(addAnother);
	const no = /(no|nope|n)/i.test(addAnother);

	if (yes) {
		addService();
	}

	if (no) {
		console.log('Thanks for adding services!');
	}
};

addService();
