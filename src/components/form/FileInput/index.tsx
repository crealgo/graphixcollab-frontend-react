import styled from '@emotion/styled';
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

	height: 10rem;
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
		const [files, setFiles] = useState<FileList | null>();

		const hasFiles = Boolean(files);

		const resolvedDisplayText = useMemo(() => {
			if (files && files.length > 0) {
				const content = [];

				for (let i = 0; i < files.length; i++) {
					const file = files.item(i)!;

					content.push(
						<FileListItem key={i}>
							📄
							<Text>{file.name}</Text>
						</FileListItem>
					);
				}

				return (
					<FileDisplayList listTitle="Chosen Files:">
						{content}
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
		}, [files, props.accept, displayText]);

		const handleChange = (event: ChangeEvent) => {
			const el = event.target as HTMLInputElement;

			console.log(el.files);

			setFiles(el.files);
		};

		return (
			<BaseInput
				className={clsx('FileInput-root', className, {
					hasFiles
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
					onChange={handleChange}
				/>
			</BaseInput>
		);
	}
);
