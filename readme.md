# volume-string-parser

![npm badge](https://img.shields.io/npm/v/volume-string-parse)

Turn serials issue/volume strings like 'v.1 no.3 Aut 1979' into meaningful data that could be used for sorting or other nefarious deeds.

```js
// node example
const parse = require('volume-string-parser')
const string = 'v.1 no.3 Aut 1979'
const data = parse(string)
console.log(data)
// data is
// { issue: '3',
//  original_string: 'v.1 no.3 Aut 1979',
//  volume: '1',
//  year: '1979' }
```

Ultimately, my goal is to have the module work in the browser.

# notes

Doesn't parse season/month information right now (e.g. "Aut" in example above). That seems really hairy, plus not necessary in many cases (redundant with issue number), but may be added eventually.

Returns `null` if a data field isn't present in the original string or wasn't parsed.

# license

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
