import Chance from 'chance';
import { type HTMLProps } from 'react';
import { type RegisterOptions } from 'react-hook-form';
import { type FileInputProps } from '../../form/FileInput';
import { type FormControlProps } from '../../form/FormControl';
import { deliveryMethods, materials, services } from './data';

const chance = new Chance();

const todayDate = new Date();

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
	[field in FormFieldName]: string | number | FileList | null;
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
				defaultValue: chance.name(),
				label: 'Full Name',
				required: true,
				span: 4
			},
			{
				type: 'text',
				name: 'email',
				defaultValue: chance.email(),
				label: 'Email',
				required: true,
				span: 4
			},
			{
				type: 'text',
				name: 'phone',
				defaultValue: chance.phone(),
				label: 'Phone Number',
				placeholder: 'XXX-XXX-XXXX',
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
				defaultValue: chance.pickone(
					materials.map(({ value }) => value)
				),
				label: 'Material Type',
				options: materials,
				span: 4
			},
			{
				type: 'select',
				name: 'service',
				defaultValue: chance.pickone(
					services.map(({ value }) => value)
				),
				label: 'Service Type',
				options: services,
				span: 4
			},
			{
				type: 'number',
				name: 'quantity',
				defaultValue: chance.natural({ min: 10, max: 9999 }),
				label: 'Quantity',
				required: true,
				min: 10,
				max: 9999,
				span: 4
			},
			{
				type: 'date',
				name: 'deadline',
				defaultValue: chance.date().toISOString().split('T')[0],
				label: 'Deadline',
				required: true,
				min: todayDate.toISOString().split('T')[0],
				span: 4
			},
			{
				type: 'radio',
				name: 'delivery',
				required: true,
				defaultValue: chance.pickone(
					deliveryMethods.map(({ value }) => value)
				),
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
				defaultValue: '',
				name: 'artwork',
				label: 'Artwork File(s)',
				displayText: '🌅 Upload your artwork',
				accept: '.gif,.jpeg,.jpg,.png,.pdf,.svg,.webp',
				helperText:
					'Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.',
				span: 8
			}
		]
	}
];
