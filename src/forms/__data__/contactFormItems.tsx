import { Link } from '../../components/base/Link';
import { type FormItemBag } from '../FormItemGenerator';

export const contactFormItems: FormItemBag[] = [
	{
		itemType: 'input',
		inputType: 'text',
		label: 'First Name',
		name: 'first_name',
		placeholder: 'John',
		required: true
	},
	{
		itemType: 'input',
		inputType: 'text',
		label: 'Last Name',
		name: 'last_name',
		placeholder: 'Snow',
		required: true
	},
	{
		itemType: 'input',
		inputType: 'email',
		label: 'Email',
		name: 'email',
		helperText: "We'll respond to this email address.",
		placeholder: 'johnsnow@gmail.com'
	},
	{
		itemType: 'textarea',
		label: 'Message',
		name: 'message',
		placeholder:
			'Let us know how we can help you! Something like, "I would like to book an appointment, but I have a few questions first."',
		rows: 5
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
