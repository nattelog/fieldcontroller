/*
 * FormController. A very awesome way of handling form-fields
 * in HTML.
 *
 * Author: Natanael Log, October 2015.
 */

function FormController(_label, _altLabel){

    /* Fields. */

    var model = null;
    var label = _label || null;
    var altLabel = _altLabel || null;

    /* A lot of getters! */

    this.getModel = function(){
        return model;
    };

    this.getLabel = function(){
        return label;
    };

    this.getAltLabel = function(){
        return altLabel;
    };

    /* This function will make the labels a little more
     * HTML-id-friendly. No non-english letters or spaces.
     * Oh, and it will turn the label into camelCase. */
    this.getId = function(){
        var _label = label;
        var space = _label.indexOf(" ");

        while(space != -1) {

        }

        return label.toLowerCase();
    };
};