
all: test-bundle.js

test-bundle.js: test.js
	browserify -o test-bundle.js test.js -t [ babelify --presets [ react ] ]
