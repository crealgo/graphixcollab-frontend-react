import Chance from 'chance';
import { type HTMLProps } from 'react';
import { type RegisterOptions } from 'react-hook-form';
import { type FileInputProps } from '../../form/FileInput';
import { type FormControlProps } from '../../form/FormControl';
import { deliveryMethods, materials, services } from './data';

const chance = new Chance();

const todayDate = new Date();
const defaultDeadline = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days from now
const defaultDeadlineDate = new Date(defaultDeadline);

export type FormFieldName =
	| 'name'
	| 'email'
	| 'phone'
	| 'material'
	| 'service'
	| 'quantity'
	| 'deadline'
	| 'delivery'
	| 'artwork';

export type FormFields = {
	name: string;
	email: string;
	phone: string;
	material: string;
	service: string;
	quantity: number;
	deadline: string;
	delivery: string;
	artwork: FileList;
};

export type FieldType =
	| 'checkbox'
	| 'radio'
	| 'select'
	| 'date'
	| 'number'
	| 'text'
	| 'file';

export type FieldBag = {
	type: FieldType;
	name: string;

	// grid
	span?: number;

	// select field
	options?: OptionBag[];

	// react-hook-form:
	registerOptions?: RegisterOptions;
} & Pick<FormControlProps, 'label' | 'helperText'> &
	Pick<
		HTMLProps<HTMLInputElement>,
		| 'required'
		| 'disabled'
		| 'placeholder'
		| 'multiple'
		| 'accept'
		| 'min'
		| 'max'
		| 'value'
		| 'defaultValue'
		| 'onChange'
	> &
	Pick<FileInputProps, 'displayText'>;

type FieldsetBag = {
	legend: string;
	fields: FieldBag[];
};

export const estimatorFields: FieldsetBag[] = [
	{
		legend: '👋 Your Information',
		fields: [
			{
				type: 'text',
				name: 'name',
				// defaultValue: chance.name(),
				label: 'Full Name',
				required: true,
				span: 4
			},
			{
				type: 'text',
				name: 'email',
				// defaultValue: chance.email(),
				label: 'Email',
				required: true,
				span: 4
			},
			{
				type: 'number',
				name: 'phone',
				label: 'Phone Number',
				placeholder: 'XXX-XXX-XXXX',
				min: 1000000000,
				max: 9999999999,
				span: 4
			}
		]
	},
	{
		legend: '⚙️ Service Request',
		fields: [
			{
				type: 'select',
				name: 'material',
				// defaultValue: materials[0].value,
				label: 'Material Type',
				options: materials,
				span: 4
			},
			{
				type: 'select',
				name: 'service',
				// defaultValue: services[0].value,
				label: 'Service Type',
				options: services,
				span: 4
			},
			{
				type: 'number',
				name: 'quantity',
				defaultValue: 10,
				label: 'Quantity',
				required: true,
				min: 10,
				max: 9999,
				span: 4
			},
			{
				type: 'date',
				name: 'deadline',
				defaultValue: defaultDeadlineDate.toISOString().split('T')[0],
				label: 'Deadline',
				helperText: 'By default, we will assume 1 month from now.',
				required: true,
				min: todayDate.toISOString().split('T')[0],
				span: 4
			},
			{
				type: 'radio',
				name: 'delivery',
				required: true,
				// defaultValue: deliveryMethods[0].value,
				label: 'Delivery Method',
				options: deliveryMethods,
				span: 4
			}
		]
	},
	{
		legend: '🎨 Artwork Information',
		fields: [
			{
				type: 'file',
				multiple: true,
				name: 'artwork',
				label: 'Artwork File(s)',
				displayText: '🌅 Upload your artwork',
				accept: '.gif,.jpeg,.jpg,.png,.pdf,.svg,.webp',
				helperText:
					'Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.',
				span: 12
			}
		]
	}
];
