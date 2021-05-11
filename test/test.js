var parse = require('../src/index')

// tests use actual issue strings from library holdings

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=7978
test('"Archetype."', () => {
    expect(parse('v.1 no.3 Aut 1979')).toEqual(
        {'issue': '3', 'original_string': 'v.1 no.3 Aut 1979', 'volume': '1', 'year': '1979'}
    )
    expect(parse('v.2 no.2 Spr 1981')).toEqual(
        {'issue': '2', 'original_string': 'v.2 no.2 Spr 1981', 'volume': '2', 'year': '1981'}
    )
    expect(parse('v.3 no.1 Spr 1982')).toEqual(
        {'issue': '1', 'original_string': 'v.3 no.1 Spr 1982', 'volume': '3', 'year': '1982'}
    )
})

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=9530
test('"Octavo"', () => {
    expect(parse('v.88.5')).toEqual(
        // faced with this string, I think not assuming the ".5" is an issue is correct behavior
        {'issue': null, 'original_string': 'v.88.5', 'volume': '88', 'year': null}
    )
    expect(parse('v.90.7')).toEqual(
        {'issue': null, 'original_string': 'v.90.7', 'volume': '90', 'year': null}
    )
})

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=34565
test('"Grey room."', () => {
    expect(parse('no.63 Spr 2016')).toEqual(
        {'issue': '63', 'original_string': 'no.63 Spr 2016', 'volume': null, 'year': '2016'}
    )
    expect(parse('no.10-13 2003')).toEqual(
        // @TODO brings up a question: how to handle issue ranges?
        {'issue': '10', 'original_string': 'no.10-13 2003', 'volume': null, 'year': '2003'}
    )
    expect(parse('no.5-9 2002')).toEqual(
        {'issue': '5', 'original_string': 'no.5-9 2002', 'volume': null, 'year': '2002'}
    )
})
