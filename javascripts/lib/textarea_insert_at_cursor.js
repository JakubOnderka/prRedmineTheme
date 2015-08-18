define(function() {
  return function (myField, toAdd) {
    // IE support
    if (document.selection) {
      myField.focus();
      var sel = document.selection.createRange();
      sel.text = toAdd;

    } else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart,
        endPos = myField.selectionEnd,
        value = myField.value;

      if (startPos > 1 && value.substring(startPos - 1, startPos) != "\n") {
        toAdd = "\n" + toAdd;
      }

      myField.value = value.substring(0, startPos)
        + toAdd
        + value.substring(endPos, value.length);

      myField.selectionStart = myField.selectionEnd = startPos + toAdd.length;

    } else {
      myField.value += toAdd;
    }
  }
});