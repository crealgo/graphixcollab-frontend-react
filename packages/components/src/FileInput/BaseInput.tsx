import styled from '@emotion/styled';
import {_e} from '@graphixcollab/utils/excludePropsFromForwarding.tsx';

export const BaseInput = styled('input', _e('isInvalid', 'isValid', 'isTouched'))`
	position: absolute;
	inset: 0 0 0 0;
	opacity: 0;
`;
