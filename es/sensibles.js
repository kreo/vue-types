var typeDefaults = function typeDefaults() {
  return {
    func: function func() {},
    bool: true,
    string: '',
    number: 0,
    array: function array() {
      return [];
    },
    object: function object() {
      return {};
    },
    integer: 0
  };
};

export var setDefaults = function setDefaults(root) {
  var currentDefaults = typeDefaults();
  return Object.defineProperty(root, 'sensibleDefaults', {
    enumerable: false,
    set: function set(value) {
      if (value === false) {
        currentDefaults = {};
      } else if (value === true) {
        currentDefaults = typeDefaults();
      } else {
        currentDefaults = value;
      }
    },
    get: function get() {
      return currentDefaults;
    }
  });
};