export const removeVietnameseCharacters: (text: string, delete_special_characters?: boolean) => string = (
    str,
    delete_special_characters = false
) => {
    // remove accents
    var from =
            'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÙÚỦŨỤƯỪỨỬỮỰÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÌÍỈĨỊÄËÏÎÖÜÛÑÇÝỲỸỴỶ',
        to =
            'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDUUUUUUUUUUUOOOOOOOOOOOOOOOOOIIIIIAEIIOUUNCYYYYY';
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(RegExp(from[i], 'gi'), to[i]);
    }
    if (delete_special_characters)
        str = str
            .trim()
            .replace(/[^A-Za-z0-9\s]/g, '-')
            .replace(/-+/g, '-');
    return str;
};

/**
 * Chuyển biến về dạng text
 * @example convertText =-> convert text
 */
export const variableToString = (text: string) => {
    text = text.replace(/[A-Z_]/g, (x) => {
        return ' ' + x.toUpperCase();
    });
    return text;
};
// Xoá lỗi 2 hoặc nhiều dấu cách
export const cleanWhiteSpace = (text: string) => {
    let textCopy = text;
    while (textCopy.match(/  /)) {
        textCopy = textCopy.replaceAll('  ', ' ').trim();
    }
    return text;
};
