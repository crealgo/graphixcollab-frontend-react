import {AttachFileTwoTone} from '@mui/icons-material';
import clsx from 'clsx';
import {forwardRef, useState, type ChangeEvent, type ReactNode} from 'react';
import {Text} from '../../base/Text';
import {type InputProps} from '../Input';
import {FileDisplayList} from './FileDisplayList';
import {FileInputDisplay} from './FileInputDisplay';
import {FileListItem} from './FileListItem';
import {BaseWrapper} from './BaseWrapper';
import {BaseInput} from './BaseInput';

export type FileInputProps = Omit<InputProps, 'isInvalid' | 'isValid' | 'isTouched'> & {
	readonly displayText?: ReactNode;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({
	displayText = '🌅 Upload a file', inputSize = 'medium',
	className, ...props
}, ref) => {
	const [files, setFiles] = useState<FileList | null>(null);
	const [isActive, setIsActive] = useState(false);

	const resolvedDisplayText = files ? (
		<FileDisplayList listTitle='Chosen Files:'>
			{[...files].map((file, index) => (
				<FileListItem key={index}>
					<AttachFileTwoTone
						fontSize='small'
						sx={{
							color: 'var(--color-brand-magenta-main)',
						}}
					/>
					<Text>{file.name}</Text>
				</FileListItem>
			))}
		</FileDisplayList>
	) : (
		<>
			{displayText}
			<small className='accepts'>
				Supported file types:{' '}
				{props.accept?.replaceAll(',', ', ')}
			</small>
		</>
	);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files?.length) {
			setFiles(event.currentTarget.files);
		}

		props.onChange?.(event);
	};

	return (
		<BaseWrapper
			className={clsx('FileInput-root', className, {
				'has-files': Boolean(files),
				'is-drag-active': isActive,
			})}
			inputSize={inputSize}
			role='combobox'
			tabIndex={0}
		>
			<FileInputDisplay>
				{resolvedDisplayText}
			</FileInputDisplay>
			<BaseInput
				{...props}
				ref={ref}
				className='FileInput-input'
				type='file'
				onChange={handleChange}
				onDragStart={() => {
					setIsActive(true);
				}}
				onDragEnter={() => {
					setIsActive(true);
				}}
				onDragLeave={() => {
					setIsActive(false);
				}}
				onDragEnd={event => {
					event.preventDefault();
					setIsActive(false);
				}}
				onDrop={event => {
					setIsActive(false);
					setFiles(event.dataTransfer.files);
				}}
			/>
		</BaseWrapper>
	);
},
);
