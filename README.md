# Eureka-widget-model-display

An Eureka widget that display a model. Usage:

    {
        BlogPost: {
            views: {
                model: {
                    index: {
                        widgets: [
                            {
                                type: 'model-display',

                                // the widget label. If "auto", display the model's title
                                label: "auto",

                                // display only the specified fields
                                fields: ['title', 'body', 'tags'],

                                // the text to display if no all the fields has no value
                                // (works only if `displayEmptyValue is not `true`)
                                emptyPlaceholderLabel: 'no informations found',

                                // if `true` display the field label even if there is no value
                                displayEmptyValue: true

                                // if `true` hide the labels
                                hideLabels: false
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
