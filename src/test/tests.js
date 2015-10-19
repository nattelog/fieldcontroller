/**
 * Created by nattelog on 2015-10-19.
 */

QUnit.test("Constructor test #1", function(assert){
    var fc = new FormController("Label");
    assert.equal(fc.getLabel(), "Label", "Label should be 'Label'");
    assert.notOk(fc.getAltLabel(), "There should not be an altLabel defined.");
});

QUnit.test("Constructor test #2", function(assert){
    var fc = new FormController("Label", "AltLabel");
    assert.equal(fc.getLabel(), "Label", "Label should be 'Label'");
    assert.equal(fc.getAltLabel(), "AltLabel", "AltLabel should be 'AltLabel'.");
});

QUnit.test("ID test #1", function(assert){
    var fc = new FormController("Label");
    assert.equal(fc.getId(), "label", "The ID should be 'label'.");
});

QUnit.test("ID test #2", function(assert){
    var fc = new FormController("Label With Space");
    assert.equal(fc.getId(), "labelWithSpace", "The ID should be in camelCase.");
});

/*
QUnit.test("ID test", function(assert){
    var fc = new FormController("")
});*/
