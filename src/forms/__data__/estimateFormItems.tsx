import { Link } from '../../components/base/Link';
import { type FormItemBag } from '../FormItemGenerator';
import { deliveryMethods, materials, services } from './serviceOptions';

const todayDate = new Date();
const defaultDeadline = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days from now
const defaultDeadlineDate = new Date(defaultDeadline);

export const estimateFormItems: FormItemBag[] = [
	{
		itemType: 'title',
		title: '👋 Your Information'
	},
	{
		itemType: 'input',
		inputType: 'text',
		name: 'name',
		placeholder: 'John Snow',
		label: 'Full Name',
		required: true,
		span: 4
	},
	{
		itemType: 'input',
		inputType: 'text',
		name: 'email',
		placeholder: 'johnsnow@gmail.com',
		label: 'Email',
		required: true,
		span: 4
	},
	// {
	// 	itemType: 'input',
	// 	inputType: 'number',
	// 	name: 'phone',
	// 	label: 'Phone Number',
	// 	placeholder: 'XXXXXXXXXX',
	// 	min: 1000000000,
	// 	max: 9999999999,
	// 	span: 4
	// },
	{
		itemType: 'title',
		title: '⚙️ Service Request'
	},
	{
		itemType: 'select',
		name: 'material',
		label: 'Material Type',
		options: materials,
		span: 4
	},
	{
		itemType: 'select',
		name: 'service',
		label: 'Service Type',
		options: services,
		span: 4
	},
	{
		itemType: 'input',
		inputType: 'number',
		name: 'quantity',
		defaultValue: 10,
		label: 'Quantity',
		required: true,
		min: 10,
		max: 9999,
		span: 4
	},
	{
		itemType: 'input',
		inputType: 'date',
		name: 'deadline',
		defaultValue: defaultDeadlineDate.toISOString().split('T')[0],
		label: 'Deadline',
		helperText: 'By default, we will assume 1 month from now.',
		required: true,
		min: todayDate.toISOString().split('T')[0],
		span: 4
	},
	{
		itemType: 'radio',
		name: 'delivery',
		required: true,
		label: 'Delivery Method',
		options: deliveryMethods,
		span: 3
	},
	{
		itemType: 'title',
		title: '📝 Additional Information'
	},
	{
		itemType: 'input',
		inputType: 'file',
		multiple: true,
		name: 'artwork',
		label: 'Artwork File(s)',
		displayText: '🌅 Upload your artwork',
		accept: '.gif,.jpeg,.jpg,.png,.pdf,.svg,.webp',
		helperText:
			'Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.',
		span: 8
	},
	{
		itemType: 'checkbox',
		name: 'terms',
		label: 'Terms and Conditions',
		required: true,
		options: [
			{
				value: 'terms',
				label: (
					<>
						I agree to the{' '}
						<Link href="/terms/terms-and-conditions">
							Terms and Conditions
						</Link>{' '}
						and the{' '}
						<Link href="/terms/privacy-policy">Privacy Policy</Link>
						.
					</>
				)
			}
		]
	}
];
