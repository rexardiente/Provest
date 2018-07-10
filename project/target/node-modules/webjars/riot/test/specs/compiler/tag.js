var fs = require('fs'),
    path = require('path')

describe('Compile tags', function() {

  // adding some custom riot parsers
  // css
  riot.parsers.css.myparser = function(tag, css) {
    return css.replace(/@tag/, tag)
  }
  // js
  riot.parsers.js.myparser = function(js) {
    return js.replace(/@version/, '1.0.0')
  }

  function render(str) {
    return compiler.compile(str, {})
  }

  function cat(dir, filename) {
    return fs.readFileSync(path.join(__dirname, dir, filename)).toString()
  }

  function testFile(name, debug) {
    var src = cat('fixtures', name + '.tag'),
        js = render(src)

    if (debug) console.info(js)
    expect(js).to.equal(cat('expect', name + '.js'))
  }

  it('Timetable tag', function() {
    testFile('timetable')
  })

  it('Mixed JS and Tags', function() {
    testFile('mixed-js')
  })

  it('Tag definition and usage on same file', function() {
    testFile('same')
  })

  it('Css scoped', function() {
    testFile('scoped')
  })

  it('Quotes before ending HTML bracket', function() {
    testFile('input-last')
  })

  it('Preserves the object inside the tags', function() {
    testFile('box')
  })

})