# Aurora
Aurora is a JavaScript library that can bundle packages in the browser using Browserify and POST requests.

# Usage
First, put this at the beginning of the `<body>` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/Unzor/Aurora/dist/aurora.js"></script>
```

This is how to bundle with packages:
```javascript
var Bundler = new Aurora();
Bundler.bundleWithPackage('uniq', `var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));`, function(BundledCode){
console.log(BundledCode)
});
```

This will return the bundled code after the machine is done installing the packages and bundling the code.
You can bundle without NPM packages by using ```Bundler.bundle(CODE, CALLBACK)```.
