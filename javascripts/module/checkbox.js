"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      if (ppp.getTopProjectName() !== 'baufinder') {
        return;
      }

      var checkboxId = 1,
        $description = $('#issue_description'),
        hasDescription = $description.size() > 0,
        $wiki = $('#content').find('.issue .wiki');

      function createInputNode(id, checked) {
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'todo';
        input.checked = checked;
        input.value = id;
        input.disabled = !hasDescription;
        return input;
      }

      function replaceWithCheckboxes(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
          var child = element.childNodes[i];
          if (child.nodeType === 3) {
            var content = child.textContent;

            if (content.indexOf('[ ]') === 0) {
              child.textContent = content.substring(3);
              element.insertBefore(createInputNode(checkboxId++), child);

            } else if (content.indexOf('[]') === 0) {
              child.textContent = content.substring(2);
              element.insertBefore(createInputNode(checkboxId++), child);

            } else if (content.indexOf('[X]') === 0 || content.indexOf('[x]') === 0) {
              child.textContent = content.substring(3);
              element.insertBefore(createInputNode(checkboxId++, true), child);

            } else if ( // Skip IDs for characters, which are not converted to checkbox
              content.indexOf('[ ]') > 0 ||
              content.indexOf('[]') > 0 ||
              content.indexOf('[X]') > 0 ||
              content.indexOf('[x]') > 0
            ) {
              checkboxId++;
            }
          } else {
            replaceWithCheckboxes(child);
          }
        }
      }

      function changeDescription(id, checked) {
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

      replaceWithCheckboxes($wiki[0]);

      $wiki.on('change', '[name="todo"]', function (e) {
        var id = e.target.value,
          checked = e.target.checked;

        changeDescription(id, checked);

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
  }
});