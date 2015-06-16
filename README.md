## Webpack test

Testing sourcemaps + uglifyjs.

```
$ grunt
$ npm start
```

### The issue

Sourcemaps seem too work fine if I don't require lodash (comment the first lines in index.js).

![](https://www.dropbox.com/s/ep7r5vboxltjflu/Screenshot%202015-06-16%2011.43.56.png?dl=1)

But this is the result when I use lodash:

![](https://www.dropbox.com/s/hlnmt0lo9jk9d1h/Screenshot%202015-06-16%2011.47.29.png?dl=1)

I don't think it's a lodash specific problem, It's just the best way I found to reproduce the issue.
