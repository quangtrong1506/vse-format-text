export type TextPart = {
    value: string;
    type: "string" | "merge";
};
/**
 * Split a string into parts based on the presence
 * of merge tags (`{ ... }`).
 *
 * Each string component has `type: 'string'` while
 * the merge tag components has `type: 'merge'`. The
 * merge tags are preserved in the string.
 *
 * If there are no merge tags, the string is returned
 * single element array of `type: 'string'`.
 *
 * When the input text is the empty string, a zero-length
 * array is returned.
 *
 * @param str the string to split up
 * @returns an array of string parts, classed as `string` or `merge`
 */
export declare function splitMergeTags(str: string): TextPart[];
