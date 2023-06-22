import { type TokenLiteral, type TokenValue } from '../types';

export default (tokenValue: TokenLiteral): TokenValue => ({
	value: tokenValue
});
