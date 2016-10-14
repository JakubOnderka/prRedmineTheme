"use strict";

define(['lib/page_property_miner'], function (ppp) {
  function createInputNode(id, checked, isDisabled) {
    isDisabled = isDisabled || false;
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'todo';
    input.checked = checked;
    input.value = id;
    input.disabled = isDisabled;
    return input;
  }

  function replaceHtmlWithCheckboxes(element, checkboxId, disabledCheckboxes) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      if (child.nodeType === 3) {
        var content = child.textContent;

        if (content.indexOf('[ ]') === 0) {
          child.textContent = content.substring(3);
          element.insertBefore(createInputNode(checkboxId++, disabledCheckboxes), child);

        } else if (content.indexOf('[]') === 0) {
          child.textContent = content.substring(2);
          element.insertBefore(createInputNode(checkboxId++, disabledCheckboxes), child);

        } else if (content.indexOf('[X]') === 0 || content.indexOf('[x]') === 0) {
          child.textContent = content.substring(3);
          element.insertBefore(createInputNode(checkboxId++, true, disabledCheckboxes), child);

        // TODO: Not works very well, when multiple [] in one element
        } else if ( // Skip IDs for characters, which are not converted to checkbox
          content.indexOf('[ ]') > 0 ||
          content.indexOf('[]') > 0 ||
          content.indexOf('[X]') > 0 ||
          content.indexOf('[x]') > 0
        ) {
          checkboxId++;
        }
      } else {
        replaceHtmlWithCheckboxes(child, checkboxId, disabledCheckboxes);
      }
    }
  }

  function changeDescription($description, id, checked) {
    var text = $description.text(),
      i = 1;

    text = text.replace(/\[[ Xx]?]/g, function (match) {
      if (id == i++) {
        if (checked) {
          return '[x]';
        } else {
          return '[ ]';
        }
      } else {
        return match;
      }
    });

    $description.text(text);

    // Show warning when leaving page with changed and not saved description
    $description.data('changed', 'changed');
  }

  return {
    init: function () {
      if (ppp.matchPage('issues', 'show')) {
        var $wiki = $('#content').find('.issue .wiki');

        if ($wiki.size()) {
          var $description = $('#issue_description'),
            hasDescription = $description.size() > 0;

          replaceHtmlWithCheckboxes($wiki[0], 1, !hasDescription);

          $wiki.on('change', '[name="todo"]', function (e) {
            var id = e.target.value,
              checked = e.target.checked;

            changeDescription($description, id, checked);

            $('#issue_description_and_toolbar').show().prev().hide();

            if ($wiki.find('#saveCheckbox').length == 0) {
              $wiki.css('position', 'relative');
              $wiki.append('<input type="submit" value="Uložit" id="saveCheckbox" style="position: absolute; right: 10px; bottom: 10px;">');
            }
          });

          $wiki.on('click', '#saveCheckbox', function () {
            $('#issue-form').submit();
            return false;
          });
        }

      } else if (ppp.matchPage('issues', 'new')) {
        var target = document.getElementById('preview');
        var observer = new MutationObserver(function () {
          replaceHtmlWithCheckboxes(target, 1, true);
        });
        var config = { attributes: true, childList: true, characterData: true };
        observer.observe(target, config);
      }
    }
  }
});