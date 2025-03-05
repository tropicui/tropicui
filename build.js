import fs from 'node:fs'

function build() {
  fs.cpSync('./components', './components', { recursive: true, force: true });
//   fs.copyFileSync('./base.css', './base.css');
//   fs.copyFileSync('./theme.css', './theme.css');
//   fs.copyFileSync('./utilities.css', './utilities.css');
  fs.copyFileSync('./index.css', './index.css');
}