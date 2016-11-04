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

It may be useful to check out the PaymoApp API [documentation](https://github.com/paymoapp/api) before use the module.  
There's the list of available methods. 

### List

```javascript
paymo.list('users')
    .then(function(data) {
       
       ///TODO: Do something...
       
    }).catch(function(error){
        console.error(error);
    });
```

### List with filters

```javascript
paymo.list('projects', ['active=false'])
    .then(function(data) {
        
        ///TODO: Do something...
        
    }).catch(function(error){
    console.error(error);
});
```

There's the [documentation](https://github.com/paymoapp/api/blob/master/sections/filtering.md) about filters you can use. 

### List with filters and include

You can use second parameters as extended options. This object can include *where* or 
*include* or both of these keys to set necessary parameters for **list** request.


```javascript
var options = {
    where: ['complete=false', 'project_id=1350950'],
    include: ['user.name', 'project'],
};

paymo.list('tasks', options)
    .then(function(data) {

        ///TODO: Do something...

    }).catch(function(error){
        console.error(error);
    });

```

There's more [documentation](https://github.com/paymoapp/api/blob/master/sections/includes.md) about **include** parameter.

### Get item

If you know **id** of some item you can just **get** it from [Paymo](https://app.paymoapp.com) directly. 

```javascript
paymo.get('tasks', id)
    .then(function(item) {

        ///TODO: Do something...

    }).catch(function(error){
        console.error(error);
    });
```

### Create item

You can **create** new item without a hassle. 
 
```javascript
var task = {
   "name": "Flat rate task",
   "billable": true,
   "flat_billing": true,
   "estimated_price": 100.00,
   "tasklist_id": 1234,
   "project_id": 110066
};

paymo.create('tasks', task)
    .then(function(item) {

        ///TODO: Do something...

    }).catch(function(error){
        console.error(error);
    });
``` 
 
### Update item
 
If you already have **id** of the element, you can **update** it. 
 
```javascript

paymo.update('tasks', 112233, { "name": "Flat rate task" })
    .then(function(item) {

        ///TODO: Do something...

    }).catch(function(error){
        console.error(error);
    });
```
 
### Remove item 

You can also **remove** any object.

```javascript
paymo.remove('tasks')
    .then(function(response) {

        ///TODO: Do something...

    }).catch(function(error){
        console.error(error);
    });
```

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