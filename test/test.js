var parse = require('../src/index')

// tests use actual issue strings from library holdings

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=7978
exports['"Archetype."'] = function (test) {
    test.deepEqual(
        parse('v.1 no.3 Aut 1979'),
        {'issue': 3, 'original_string': 'v.1 no.3 Aut 1979', 'volume': 1, 'year': 1979}
    )
    test.deepEqual(
        parse('v.2 no.2 Spr 1981'),
        {'issue': 2, 'original_string': 'v.2 no.2 Spr 1981', 'volume': 2, 'year': 1981}
    )
    test.deepEqual(
        parse('v.3 no.1 Spr 1982'),
        {'issue': 1, 'original_string': 'v.3 no.1 Spr 1982', 'volume': 3, 'year': 1982}
    )
    test.done()
}

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=9530
exports['"Octavo"'] = function (test) {
    test.deepEqual(
        parse('v.88.5'),
        // faced with this string, I think not assuming the ".5" is an issue is correct behavior
        {'issue': null, 'original_string': 'v.88.5', 'volume': 88, 'year': null}
    )
    test.deepEqual(
        parse('v.90.7'),
        {'issue': null, 'original_string': 'v.90.7', 'volume': 90, 'year': null}
    )
    test.done()
}

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=34565
exports['"Grey room."'] = function (test) {
    test.deepEqual(
        parse('no.63 Spr 2016'),
        {'issue': 63, 'original_string': 'no.63 Spr 2016', 'volume': null, 'year': 2016}
    )
    test.deepEqual(
        parse('no.10-13 2003'),
        // @TODO brings up a question: how to handle issue ranges?
        {'issue': 10, 'original_string': 'no.10-13 2003', 'volume': null, 'year': 2003}
    )
    test.deepEqual(
        parse('no.5-9 2002'),
        {'issue': 5, 'original_string': 'no.5-9 2002', 'volume': null, 'year': 2002}
    )
    test.done()
}
