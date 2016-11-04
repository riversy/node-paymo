# Node Paymo

NodeJS wrapper for Paymo API 

## How to use

First install it to the project.

```
npm install --save node-paymo
```

After that you can use it in your code.

```
import Paymo from 'node-paymo';
let paymo = Paymo('<API KEY>');
```

Or alternatively you may use initialization via Username and Password 
but we don't recommend this way. 
 
```
let paymo = Paymo('<USERNAME>', '<PASSWORD>');
```

## Methods 

There's the list of available methods. 

...

## For developers

You need to install development dependencies in the case to make some changes.  

```
npm install 
gulp watch
```

If you want to test things, just type:

```
npm test
```

## Help us make it better

If you got an error or have an idea how to improve this module, please just submit the [issue](https://github.com/riversy/node-paymo/issues).
If you can do it yourself, please fork the repo and get this done. 

## License 

This code is under **MIT**.