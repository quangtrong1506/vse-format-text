export declare const renamedAttributes: Map<string, string>;
export declare const coerceToBooleanAttributes: string[];
export declare const svgCoerceToBooleanAttributes: string[];
export declare const numberAttributes: string[];
export declare const svgCamelizedAttributes: (string | boolean)[][];
export declare const eventHandlerAttributes: string[];
export declare const lowercasedAttributes: string[];
/**
 * Don't strip the px suffix from these style attributes
 * because they can contain both length (e.g. `13px`) and
 * unitless values (e.g. `3`), which have different
 * meanings.
 *
 * (Background: React automatically adds a `px` to unitless
 * numbers specified in style attributes, so these attributes
 * should not be included in `px` stripping).
 */
export declare const styleDontStripPx: string[];
