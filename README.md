# Eureka-widget-model-display

An Eureka widget to display a model. Usage:

    {
        BlogPost: {
            views: {
                model: {
                    index: {
                        widgets: [
                            {
                                type: 'model-display',

                                // the widget header. If "auto", display the model's title
                                header: "auto"
                            }
                        ]
                    }
                }
            }
        }
    }


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
