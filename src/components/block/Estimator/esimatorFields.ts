import { type HTMLInputTypeAttribute, type HTMLProps } from 'react';
import { type FileInputProps } from '../../form/FileInput';
import { type FormControlProps } from '../../form/FormControl';
import { materials, services } from './data';

export type FormFieldNames =
	| 'name'
	| 'email'
	| 'phone'
	| 'material'
	| 'service'
	| 'quantity'
	| 'deadline'
	| 'artwork';

export type FormFields = {
	[field in FormFieldNames]: string | number | FileList | null;
};

type OptionBag = {
	value: string;
	label: string;
};

export type FieldBag = {
	type: HTMLInputTypeAttribute | 'select';
	name: FormFieldNames;

	// grid
	span?: number;

	// select field
	options?: OptionBag[];
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
				label: 'Full Name',
				span: 4
			},
			{
				type: 'text',
				name: 'email',
				label: 'Email',
				span: 4
			},
			{
				type: 'text',
				name: 'phone',
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
				label: 'Material Type',
				options: materials,
				span: 4
			},
			{
				type: 'select',
				name: 'service',
				label: 'Service Type',
				options: services,
				span: 3
			},
			{
				type: 'number',
				name: 'quantity',
				label: 'Quantity',
				required: true,
				min: 10,
				max: 9999,
				span: 2
			},
			{
				type: 'date',
				name: 'deadline',
				label: 'Deadline',
				required: true,
				min: '@today',
				span: 3
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
				span: 8
			}
		]
	}
];
