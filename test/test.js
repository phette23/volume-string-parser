var parse = require('../src/index')

// tests use actual issue strings from library holdings

// https://library.cca.edu/cgi-bin/koha/opac-detail.pl?biblionumber=7978
exports['"Archetype." string'] = function (test) {
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
