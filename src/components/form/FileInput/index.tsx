import styled from '@emotion/styled';
import { AttachFileTwoTone } from '@mui/icons-material';
import clsx from 'clsx';
import {
	forwardRef,
	useMemo,
	useState,
	type ChangeEvent,
	type ReactNode
} from 'react';
import { Text } from '../../base/Text';
import { generateBaseInputStyles, type InputProps } from '../Input';
import { FileDisplayList } from './FileDisplayList';
import { FileListItem } from './FileListItem';

export type FileInputProps = InputProps & {
	displayText?: ReactNode;
};

const BaseInput = styled('div')<InputProps>`
	${generateBaseInputStyles};
	cursor: pointer;
	display: inline-grid;
	background-color: var(--color-gray-100);

	&:hover {
		background-color: var(--color-gray-200);
	}

	&:active {
		background-color: var(--color-gray-300);
	}

	min-height: 10rem;
	height: auto;
	padding-block: 1.75rem;
	border-style: dashed;
	place-content: center;
	place-items: center;

	font-size: 1rem;
	font-weight: normal;

	[type='file'] {
		display: none;
	}

	&.hasFiles {
		border-style: solid;
		background-color: var(--color-gray-200);
	}
`;

const DefaultFileInputDisplay = styled('div')`
	display: grid;
	gap: 0.5rem;
	place-content: center;
	place-items: center;

	.accepts {
		color: var(--color-gray-500);
	}
`;

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	(
		{
			displayText = '🌅 Upload a file',
			inputSize = 'medium',
			className,
			...props
		},
		ref
	) => {
		const [files, setFiles] = useState<FileList | null>(null);

		const resolvedDisplayText = useMemo(() => {
			if (files) {
				console.log(files);

				return (
					<FileDisplayList listTitle="Chosen Files:">
						{[...files].map((file, index) => (
							<FileListItem key={index}>
								<AttachFileTwoTone
									fontSize="small"
									sx={{
										color: 'var(--color-brand-magenta-main)'
									}}
								/>
								<Text>{file.name}</Text>
							</FileListItem>
						))}
					</FileDisplayList>
				);
			}

			return (
				<DefaultFileInputDisplay>
					{displayText}
					<small className="accepts">
						Supported file types:{' '}
						{props.accept?.replaceAll(',', ', ')}
					</small>
				</DefaultFileInputDisplay>
			);
		}, [displayText, files, props.accept]);

		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			if (event.currentTarget.files?.length) {
				setFiles(event.currentTarget.files);
			}
		};

		return (
			<BaseInput
				className={clsx('FileInput-root', className, {
					hasFiles: Boolean(files)
				})}
				inputSize={inputSize}
				role="combobox"
				tabIndex={0}
			>
				{resolvedDisplayText}
				<input
					{...props}
					ref={ref}
					type="file"
					onClick={event => {
						event.currentTarget.value = '';
					}}
					onChange={handleChange}
				/>
			</BaseInput>
		);
	}
);
