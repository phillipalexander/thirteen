[![Issue Stats](http://issuestats.com/github/phillipalexander/thirteen/badge/pr?style=flat)](http://issuestats.com/github/phillipalexander/thirteen)

# thirteen
#### (13, XIII, 十三, trece, tredici, 열세, तेरह, ثلاثة عشر, тринадцать, treze, dreizehn, baker's dozen, 11012, שלוש עשרה)

Take any number (or anything that _thinks_ it's a number)
and multiply by [thirteen][13].

From [Wikipedia][13]:
> 13 (thirteen /θɜrˈtiːn/) is the natural number following 12 and preceding 14.

> In spoken English, the numbers 13 and 30 are often confused. When carefully enunciated, they differ in which syllable is stressed: 13 [![Listen](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Speakerlink-new.svg/22px-Speakerlink-new.svg.png)](https://upload.wikimedia.org/wikipedia/commons/0/06/En-us-thirteen.ogg) [/θərˈtiːn/][not13] vs. 30 [/ˈθɜrti/][not13]. However, in dates such as 1300 ("thirteen hundred") or when contrasting numbers in the teens, such as 13, 14, 15, the stress shifts to the first syllable: 13 [/ˈθɜrtiːn/][not13].

Thirteen is represented in numerous ways, depending on the desired counting system. Outside of the common base-10 system, here are a few examples of other ways to understand the number 13:

```
Ndom (Base-6): 13 = (6 x 2) + 1 
(Base-12): 13 = 10 + 1 where 10 in Base-12 is equal to 12 in Base-10 
Oksapmin (Base-27) : 13 = right ear + right thumb
Alamblak (Built from 1,2,5, and 20) : 13 = (5 x 2) + 2 + 1 = tir hosfi hosfirpat
```

_Sources:_
* http://www.sf.airnet.ne.jp/ts/language/number/ndom.html 
* http://mentalfloss.com/article/31879/12-mind-blowing-number-systems-other-languages 
* http://io9.com/5977095/why-we-should-switch-to-a-base-12-counting-system 
* http://www.sf.airnet.ne.jp/ts/language/number/alamblak.html 

Further clairity on how to count implement a count to thirteen, epistemic certainty courtesy of @CountVonCount:

[![Counting to Thirteen](http://img.youtube.com/vi/XDQU0CcVKFI/0.jpg)](https://www.youtube.com/watch?v=XDQU0CcVKFI)

## Installation

This module is installed via npm:

``` bash
$ npm install thirteen
```

## Example Usage

``` js
var thirteen = require('thirteen');

var thirteenTwice = thirteen(2);
console.log(thirteenTwice) // logs 26, which is thirteen, twice
```

## Tests

``` bash
grunt test
```

## Contributing

See [CONTRIBUTING.MD](CONTRIBUTING.md)

[13]:http://en.wikipedia.org/wiki/13_(number)
[not13]:https://en.wikipedia.org/wiki/Help:IPA_for_English
