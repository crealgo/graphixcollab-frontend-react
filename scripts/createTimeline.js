const Chance = require('chance');
const {paramCase} = require('change-case');
const {writeFileSync} = require('fs');
const timelines = require('../src/content/timelines.json');
const prompt = require('prompt-sync')();

const chance = new Chance();

const createTimelineStep = (
	title = '',
	description = '',
	imageSrc = '',
	imageAlt = ''
) => ({
	id: chance.guid(),
	title,
	description,
	image: {
		src: imageSrc,
		alt: imageAlt
	}
});

const createTimeline = (title = '', description = '', steps = []) => ({
	id: chance.guid(),
	title,
	slug: paramCase(title),
	description,
	steps,
	createdOn: new Date().toISOString(),
	createBy: '',
});

const addStep = (steps = [], stepIndex = 0) => {
	const stepTitle = prompt(`Step ${stepIndex} title: `);

	if (stepTitle.length > 0) {
		const stepDescription = prompt(`Step ${stepIndex} description: `);
		const stepImageSrc = prompt(`Step ${stepIndex} image src: `);
		const stepImageAlt = prompt(`Step ${stepIndex} image alt: `);

		steps.push(
			createTimelineStep(
				stepTitle,
				stepDescription,
				stepImageSrc,
				stepImageAlt
			)
		);

		stepIndex++;

		addStep(steps, stepIndex);
	}
};

const addTimeline = () => {
	const title = prompt('title: ');
	const description = prompt('description: ');

	console.log("Let's add some steps!");
	let stepIndex = 0; // eslint-disable-line prefer-const

	const timelineSteps = [];

	addStep(timelineSteps, stepIndex);

	const timeline = createTimeline(title, description, timelineSteps);
	timelines.push(timeline);

	writeFileSync(
		'src/content/timelines.json',
		JSON.stringify(timelines, null, 2)
	);
};

addTimeline();
