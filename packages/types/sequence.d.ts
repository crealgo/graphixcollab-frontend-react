type SequencePropertyType = 'color' | 'background-color' | 'border-color' | 'fill' | 'stroke';
type SequenceIndex = number;
type SequenceShade = Exclude<ColorShades, 'main'>;

// Declare namespace React {
// 	type DOMAttributes<T> = {
// 		'data-sequence-index'?: SequenceIndex;
// 		'data-sequence-property'?: SequencePropertyType;
// 		'data-sequence-shade'?: SequenceShade;
// 	};
// }

declare global {
	// eslint-disable-next-line
	interface Element {
		testThangs?: number;
	}
}
