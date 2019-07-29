const glob = require('glob');
const path = require('path');

const config = require('./config');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'layouts/layout'));

// Attach reveal dirs
const revealPath = path.dirname(require.resolve('reveal.js/package.json'));
['css', 'js', 'lib', 'plugin'].forEach((dir) => {
  app.use(`/${dir}`, express.static(path.join(revealPath, dir)));
});

// Enable white/black theme switch
app.get('/', (req, res) => res.render('content', {
  white: 'white' in req.query,
  title: config.title
}));

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'assets')));

app.listen(config.port, () => {
  console.log(`App listening http://localhost:${config.port} port`)
});
