# Node REST API template using Express

![](https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667)

## Features

This template set a many things you need configure all the time manually. Following features:

* Base template for a MVC.
* Base of a model.
* Base of a controller (Complete CRUD).
* Base of a  routes using the controller model.
* Server pré-configured to use DotEnv config.
* Pré-configured cors.
* Eslint configured to use the template of the `airbnb-base`.
* Package.json configured with all the required dependencies to run aproject and the DEV/PROD scripts.

## Usage

To use this template you need follow the following steps:

1. Modify content of the `ModelName.js` (present in the folder `models`) to fit the schema name you need.

2. Modify the the name of the file `ModelName.js` (present in the folder `models`) to your model name.

3. Modify content of the `ModelNameController.js`(present in the folder `controllers`) to fit the model name you need.

4. Modify the the name of the file `ModelNameController.js` (present in the folder `controllers`) to your controller name.

5. Modify content of the `routes.js` to configure your endpoints and the controllers used.

## Future features

* Create a script to auto generate the project layout using only the `ModelName` passed by the developer.