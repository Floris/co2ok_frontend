var fs = require('fs');

// import all language files

//homepage files
var nl_home = require('./nl_/nl_home.js');
var en_home = require('./en_/en_home.js');

//faq page files
var nl_faq = require('./nl_/nl_faq.js');
var en_faq = require('./en_/en_faq.js');

//projecten page files
var nl_projecten = require('./nl_/nl_projecten.js');
var en_projecten = require('./en_/en_projecten.js');

//zakelijk page files
var nl_zakelijk = require('./nl_/nl_zakelijk.js');
var en_zakelijk = require('./en_/en_zakelijk.js');

console.log('execute compile.js');

// name of home language kit
// add more language kit files later
var home_language_kit = "src/lang/lang_home.json";
var faq_language_kit = "src/lang/lang_faq.json";
var projecten_language_kit = "src/lang/lang_projecten.json";
var zakelijk_language_kit = "src/lang/lang_zakelijk.json"


// exmaple homepage language object
// add more language objects later
var home_language_kit_object = {
  nl: nl_home,
  en: en_home
};

var faq_language_kit_object = {
  nl: nl_faq,
  en: en_faq
};

var projecten_language_kit_object = {
  nl: nl_projecten,
  en: en_projecten
};

var zakelijk_language_kit_object = {
  nl: nl_zakelijk,
  en: en_zakelijk
};

// create New Home Language Kit
createLanguageKit(home_language_kit, home_language_kit_object);
createLanguageKit(faq_language_kit, faq_language_kit_object);
createLanguageKit(projecten_language_kit, projecten_language_kit_object);
createLanguageKit(zakelijk_language_kit, zakelijk_language_kit_object);

async function createLanguageKit(fileName, output) {
  console.log('create HomeLanguageKit');
  // console.log('create HomeLanguageKit', output); //debug

  // try to remove old file
  try {
    await fs.unlink(fileName, function () {
      console.log('reset file');
    });
  } catch (error) {
    console.log('error with reset file', error);
  }

  // try to create new file with new language object
  try {
    fs.appendFile(fileName, JSON.stringify(output), function (err) {
      if (err) throw err;
      console.log('HomeLanguageKit saved!');
    });
  } catch (error) {
    console.log('error creating file', error);
  }
}
