#!/bin/sh

# Compile templates
handlebars -a -h "vendor/" template/*.handlebars -f templates.js

# Build require.js
node r.js -o build.js

rm theme.js
cat vendor/require.js > theme.js
cat tmp.js >> theme.js

# Hack: undefined 'define.amd' for working datepicker
echo "\ndefine.amd = undefined;" >> theme.js

rm tmp.js
rm templates.js