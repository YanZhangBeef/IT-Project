# 5 Head eportfolio

## Run locally
`npm install -g firebase-tools`
cd to eportfolio
`npm install`
`npm start`

And now run in the root directory:
`firebase emulators:start`
to start the local database

## Pull requests

From now, all pull requests must be reviewed and approved by at least 1 other team member.

Please ensure PRs don't break anything and adhere to the style guide below before merging.

## Style guide

We have been having issues with quality control so please follow the following guidelines carefully:

### File Structure
- Follow the folder structure that has been setup, refrain from adding new folders unless absolutely necessary
- Pages go in the pages folder. Helper components for the pages go in their respective components folder.
- All react js files should be uppercase.
- use js instead of jsx

### CSS
- we will use css modules https://programmingwithmosh.com/react/css-modules-react/ to resolve the css conflicts issue
- use flexbox for layout. avoid % or using floats.
- use bootstrap components where humanly possible (buttons, textfields, dropdowns, containers etc.)
- use bootstrap utils where possible for padding. if you must use css, do not use px. use % or rem instead.
- do not apply css directly to elements e.g. (button, textfield). Create a class instead: `<button class="xyz">` and apply the styles to that class
