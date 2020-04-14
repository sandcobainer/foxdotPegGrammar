const parser = require('./grammar')

// this is a naive parser with no editor exception handling like spaces,
// all params should be in the format degree=[], dur=[] etc.
let code = `b1>>bass(degree=[0,6,7],dur=4,delay=[3,5,6])`

var actions = {
  make_player: function(input, start, end, elements) {
    let player = {}
    player['pname'] = elements[0]
    player['type'] = elements[2];
    player['attributes'] = elements[4];
    return player;
  },
  make_pname: function(input, start, end, elements) {
    return elements[0].concat(elements[1])
  },
  make_param: function(input, start, end, elements) {
    let params = [elements[0]];
    elements[1].elements.forEach(function(el) {params.push(el.param)})
    // elements[2].forEach(function(el) { params.push(el.element) });

    return params
  },
  make_note: function(input, start, end, elements) {
    return elements
  },

  make_pattribute: function(input, start, end, elements) {
    let pat = {}
    pat[elements[0]] = elements[2]
    return pat
  },

  make_list: function(input, start, end, elements) {
    let list = [elements[1]];
    elements[2].forEach(function(el) { list.push(el.element) });
    return list;
  },
  
  make_string: function(input, start, end, elements) {
    let str = ''
    elements.forEach(function(el){str = str.concat(el.text) })
    return str;
  },
  make_number: function(input, start, end, elements) {
    return parseFloat(input.substring(start, end), 10);
  },

  make_bpm: function(input, start, end, elements) {
    return { 'bpm': elements[2] }
  },
  make_root: function(input, start, end, elements) {
    return { 'root': elements[2].concat(elements[3].text)}
  },
  make_scale: function(input, start, end, elements) {
    return { 'scale': elements[2] }
  },
  make_fparams: function(input, start, end, elements) {
    let fparams = {}
    fparams['function'] = elements[0]
    fparams['source'] = elements[2];
    fparams['dest'] = elements[4];
    let options = []
    elements[5].elements.forEach(function(el) {
      options.push(el.param)
    })
    fparams['options'] = options;
    return fparams;
  }
};


module.exports = function parse (code) {
  return results = parser.parse(code, {actions: actions});
} 

let results = parser.parse(code, {actions: actions});
console.log(results)