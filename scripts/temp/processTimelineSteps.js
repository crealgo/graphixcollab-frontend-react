const Chance = require('chance');
const {paramCase} = require('change-case');
const {writeFileSync} = require('fs');
const timelines = require('../../src/content/timelines.json');

const chance = new Chance();

const jsonSteps = [
	{
		title: 'Embroidery',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital or physical design that you want to embroider on your chosen item, such as a garment, accessory, or promotional product.'
			},
			{
				title: 'Digitization',
				description:
					'Convert the design into a digital embroidery file format that can be read by an embroidery machine.'
			},
			{
				title: 'Material Preparation',
				description:
					'Choose the appropriate type and color of fabric or material for your embroidery project, and hoop it securely onto the embroidery machine.'
			},
			{
				title: 'Embroidery',
				description:
					'Load the digitized design into the embroidery machine and start the embroidery process. The machine will stitch the design onto the fabric according to the programmed pattern, using various colored threads to create the final embroidered design.'
			},
			{
				title: 'Finishing',
				description:
					'Once the embroidery is complete, trim any excess threads and remove the fabric from the hoop. The embroidered item may then be finished with additional steps, such as steaming, ironing, or adding backing material for stability.'
			}
		]
	},
	{
		title: 'Direct to Garment (DTG) Printing',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital design using computer software or choose an existing design that you want to print on a garment using DTG printing.'
			},
			{
				title: 'Garment Preparation',
				description:
					'Choose a suitable garment made of 100% cotton or a cotton blend, and pre-treat it with a special solution to prepare the fabric for optimal ink absorption.'
			},
			{
				title: 'Printing',
				description:
					'Load the pre-treated garment onto the DTG printer, and using specialized inkjet technology, the printer will directly apply the ink onto the fabric according to the design file. Multiple passes may be required for full color saturation.'
			},
			{
				title: 'Curing',
				description:
					'After printing, the garment is heat pressed or cured using a heat press machine or a conveyor dryer to cure the ink and ensure it adheres to the fabric.'
			},
			{
				title: 'Finishing',
				description:
					'Once cured, the DTG printed garment may be finished with additional steps, such as steaming, ironing, or adding any additional embellishments, such as rhinestones or studs.'
			}
		]
	},
	{
		title: 'Screen Printing',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital or physical design that you want to print on your chosen item, such as a t-shirt, poster, or flyer.'
			},
			{
				title: 'Screen Preparation',
				description:
					'Create a screen for each color in the design by coating a mesh screen with a light-sensitive emulsion, exposing it to UV light through the design, and washing away the emulsion to create a stencil.'
			},
			{
				title: 'Ink Preparation',
				description:
					'Mix the ink colors according to the design specifications, and load them onto the appropriate screens.'
			},
			{
				title: 'Printing',
				description:
					'Place the item to be printed onto a flat surface, and position the screens over the item. Using a squeegee, force the ink through the stencil onto the item, creating the design. Repeat this process for each color in the design.'
			},
			{
				title: 'Curing',
				description:
					'Once the ink is applied, the item is dried and cured using a heat press machine, a conveyor dryer, or other curing methods, to ensure the ink bonds permanently to the fabric or surface.'
			},
			{
				title: 'Finishing',
				description:
					'After curing, the screen printed item may be finished with additional steps, such as steaming, ironing, or adding any additional embellishments.'
			}
		]
	},
	{
		title: 'Vinyl Cutting',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital design using computer software or choose an existing design that you want to cut out of vinyl material.'
			},
			{
				title: 'Material Preparation',
				description:
					'Choose the appropriate type and color of vinyl material for your project, and load it onto a vinyl cutting machine.'
			},
			{
				title: 'Cutting',
				description:
					'Using specialized blades, the vinyl cutting machine will precisely cut the design out of the vinyl material according to the design file. The excess vinyl material is peeled away, leaving only the desired design on the backing sheet.'
			},
			{
				title: 'Weeding',
				description:
					'Once the design is cut, the excess vinyl material needs to be carefully removed from the backing sheet, a process known as weeding. This leaves only the desired design on the backing sheet, ready for application.'
			},
			{
				title: 'Transfer Tape Application',
				description:
					'Transfer tape, also known as application tape, is applied over the top of the weeded design to help transfer it to the final surface.'
			},
			{
				title: 'Application',
				description:
					'The transfer tape with the design is carefully positioned and applied onto the final surface, such as a garment, a sign, or a promotional product. The design is then pressed down firmly to ensure proper adhesion.'
			},
			{
				title: 'Removal of Transfer Tape',
				description:
					'The transfer tape is peeled away, leaving behind the vinyl design on the final surface.'
			},
			{
				title: 'Finishing',
				description:
					'Once the vinyl design is applied, any excess vinyl material or transfer tape is trimmed away, and the final product may be finished with additional steps, such as heat pressing or additional embellishments.'
			}
		]
	},
	{
		title: 'T-Shirt Printing',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital or physical design that you want to print on a t-shirt.'
			},
			{
				title: 'Garment Preparation',
				description:
					'Choose a suitable t-shirt made of 100% cotton or a cotton blend, and pre-treat it with a special solution to prepare the fabric for optimal ink absorption, if necessary.'
			},
			{
				title: 'Printing',
				description:
					'Using the chosen printing method, such as screen printing, DTG printing, or vinyl cutting, apply the design onto the t-shirt according to the design file and method-specific steps.'
			},
			{
				title: 'Curing',
				description:
					'After printing, the t-shirt is heat pressed or cured using a heat press machine or a conveyor dryer to cure the ink or vinyl and ensure it adheres to the fabric.'
			},
			{
				title: 'Finishing',
				description:
					'Once cured, the printed t-shirt may be finished with additional steps, such as steaming, ironing, or adding any additional embellishments.'
			}
		]
	},
	{
		title: 'Poster Printing',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital or physical design that you want to print on a poster.'
			},
			{
				title: 'File Preparation',
				description:
					'Convert the design into a high-resolution digital file with the appropriate color mode, resolution, and dimensions for poster printing.'
			},
			{
				title: 'Material Selection',
				description:
					'Choose the appropriate type and size of paper or material for your poster, considering factors such as durability, finish, and intended use.'
			},
			{
				title: 'Printing',
				description:
					'Load the selected paper or material into the printer, and using the appropriate printing method, such as digital printing or offset printing, print the design onto the poster material according to the design file and method-specific steps.'
			},
			{
				title: 'Finishing',
				description:
					'Once printed, the poster may be finished with additional steps, such as laminating, mounting onto a backing board, or trimming to the desired size.'
			}
		]
	},
	{
		title: 'Business Cards',
		steps: [
			{
				title: 'Design Creation',
				description:
					'Create a digital or physical design that you want to print on your business cards.'
			},
			{
				title: 'File Preparation',
				description:
					'Convert the design into a high-resolution digital file with the appropriate color mode, resolution, and dimensions for business card printing.'
			},
			{
				title: 'Material Selection',
				description:
					'Choose the appropriate type and size of paper or material for your business cards, considering factors such as durability, finish, and intended use.'
			},
			{
				title: 'Printing',
				description:
					'Load the selected paper or material into the printer, and using the appropriate printing method, such as digital printing or offset printing, print the design onto the business card material according to the design file and method-specific steps.'
			},
			{
				title: 'Finishing',
				description:
					'Once printed, the business cards may be finished with additional steps, such as laminating, die-cutting into'
			}
		]
	}
];

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
	createBy: ''
});

const refinedTimelines = jsonSteps.map(timeline => {
	const refinedSteps = timeline.steps.map(step => {
		const {title, description} = step;
		const imageSrc = `./images/${timeline.title}/${paramCase(title)}.jpg`;
		const imageAlt = `${timeline.title} ${title}`;
		return createTimelineStep(title, description, imageSrc, imageAlt);
	});

	return createTimeline(timeline.title, timeline.description, refinedSteps);
});

timelines.push(...refinedTimelines);

writeFileSync('src/content/timelines.json', JSON.stringify(timelines, null, 2));
