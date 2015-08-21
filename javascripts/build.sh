#!/bin/sh

# Compile templates
handlebars -a -h "vendor/" template/*.handlebars -f templates.js

# Build require.js
node r.js -o build.js

# Hack: undefined 'define.amd' for working datepicker
echo "\ndefine.amd = undefined;" >> theme.js

rm templates.js