# dent [![Dependency Status][david-badge]][david] [![DevDependency Status][david-dev-badge]][david-dev]

[![npm](https://nodei.co/npm/dent.png)](https://nodei.co/npm/dent/)

[david-badge]: https://david-dm.org/eush77/dent.png
[david]: https://david-dm.org/eush77/dent
[david-dev-badge]: https://david-dm.org/eush77/dent/dev-status.png
[david-dev]: https://david-dm.org/eush77/dent#info=devDependencies

The closest equivalent to destructuring assignment in pure ES5.

## Example

```js
> var tuple = function () {
    return ['first', 'second', 'third'];
  }
> var a = dent(tuple())
> var b = dent()
> var c = dent()
> [a, b, c]
[ 'first', 'second', 'third' ]
```

## API

### dent(array)

Accept the array and return its first element.

### dent()

Return the next element, or `undefined` if no elements left.

### dent.array

The array passed to `dent` last time (unmodified).

## Install

```shell
npm install dent
```

## License

MIT