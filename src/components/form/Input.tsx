import styled from '@emotion/styled';
import { type ComponentPropsWithRef } from 'react';
import { type BaseInputProps } from '../../types/base';
import { getInputStyles } from '../../utils/getInputStyles';

export type InputProps = BaseInputProps & ComponentPropsWithRef<'input'>;

export const Input = styled.input<InputProps>(getInputStyles);
