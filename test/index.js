/**
 * Imports
 */

var isSameDay = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var d1 = new Date()
  var d2 = new Date(+d1 - (24*60*60*1000+1))

  t.notOk(isSameDay(d1, d2))
  t.ok(d1, new Date(+d1))

  t.end()
})
