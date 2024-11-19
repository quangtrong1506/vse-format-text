"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitMergeTags = void 0;
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
function splitMergeTags(str) {
    let bal = 0;
    const parts = [];
    let part = "";
    const pushStringPart = (part) => part.length > 0 && parts.push({ type: "string", value: part });
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c === "{" && str[i - 1] !== "\\") {
            if (bal === 0) {
                pushStringPart(part);
                part = "";
            }
            part += c;
            bal += 1;
        }
        else if (c === "}" && str[i - 1] !== "\\") {
            bal -= 1;
            part += c;
            if (bal === 0) {
                parts.push({ type: "merge", value: part });
                part = "";
            }
        }
        else {
            part += c;
        }
    }
    pushStringPart(part);
    return parts;
}
exports.splitMergeTags = splitMergeTags;
