import {type StyledOptions} from '@emotion/styled';

type ExcludePropsFromForwardingProps = (
	...propNames: string[]
) => StyledOptions;

export const excludePropsFromForwarding: ExcludePropsFromForwardingProps = (
	...propNames
) => ({
	shouldForwardProp(propName) {
		return !propNames.includes(propName);
	}
});

/**
 * @alias excludePropsFromForwarding
 */
export const _e = excludePropsFromForwarding.bind({});
