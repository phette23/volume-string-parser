module.exports = parser

function parser (str) {
    // no. 1, no 1, no.1
    // "no" followed by optional period, optional space, some number of digits
    var issue_match = str.match(/no\.?\s?(\d+)/i)
    var issue = issue_match && issue_match[1]

    // v. 1, v 1, vo.1, vol. 1, vol.1
    var volume_match = str.match(/v(ol)?\.?\s?(\d+)/i)
    var volume = volume_match && volume_match[2]

    // year is four digits padded by non-digit characters (or start/end of string)
    var year_match = str.match(/(^|\D)(\d{4})(\D|$)/)
    var year = year_match && year_match[2]

    return {
        'issue': issue,
        'original_string': str,
        'volume': volume,
        'year': year
    }
}
