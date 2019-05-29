var fs = require('fs');

console.log('execute compile.js');

// import all language files

//home files
var nl_home = require('./nl_/nl_home.js');
var en_home = require('./en_/en_home.js');

//ninja files
var nl_ninja = require('./nl_/nl_ninja.js');
var en_ninja = require('./en_/en_ninja.js');

//faq page files
var nl_faq = require('./nl_/nl_faq.js');
var en_faq = require('./en_/en_faq.js');

//projecten page files
var nl_projecten = require('./nl_/nl_projecten.js');
var en_projecten = require('./en_/en_projecten.js');

//projecten page files
var nl_navigation = require('./nl_/nl_navigation.js');
var en_navigation = require('./en_/en_navigation.js');

//about page files
var nl_about = require('./nl_/nl_about.js');
var en_about = require('./en_/en_about.js');

//zakelijk page files
var nl_zakelijk = require('./nl_/nl_zakelijk.js');
var en_zakelijk = require('./en_/en_zakelijk.js');

//login page files
var nl_login = require('./nl_/nl_login.js');
var en_login = require('./en_/en_login.js');

//installatie page files
var nl_installatie = require('./nl_/nl_installatie.js');
var en_installatie = require('./en_/en_installatie.js');

//causemarketing page files
var nl_causemarketing = require('./nl_/nl_causemarketing.js');
var en_causemarketing = require('./en_/en_causemarketing.js');

//privacystatement page files
var nl_privacy = require('./nl_/nl_privacy.js');
var en_privacy = require('./en_/en_privacy.js');

// add more language objects later
var home_language_kit_object = {
  nl: nl_home,
  en: en_home
};

var ninja_language_kit_object = {
  nl: nl_ninja,
  en: en_ninja
};

var faq_language_kit_object = {
  nl: nl_faq,
  en: en_faq
};


var projecten_language_kit_object = {
  nl: nl_projecten,
  en: en_projecten
};


var navigation_language_kit_object = {
  nl: nl_navigation,
  en: en_navigation
};

var zakelijk_language_kit_object = {
  nl: nl_zakelijk,
  en: en_zakelijk
};

var about_language_kit_object = {
  nl: nl_about,
  en: en_about
};

var login_language_kit_object = {
  nl: nl_login,
  en: en_login
}

var installatie_language_kit_object = {
  nl: nl_installatie,
  en: en_installatie
}

var causemarketing_language_kit_object = {
  nl: nl_causemarketing,
  en: en_causemarketing
};

var privacy_language_kit_object = {
  nl: nl_privacy,
  en: en_privacy
};

// create New Language Kit
createLanguageKit("src/lang/lang_home.json", home_language_kit_object);
createLanguageKit("src/lang/lang_ninja.json", ninja_language_kit_object);
createLanguageKit("src/lang/lang_faq.json", faq_language_kit_object);
createLanguageKit("src/lang/lang_projecten.json", projecten_language_kit_object);
createLanguageKit("src/lang/lang_navigation.json", navigation_language_kit_object);
createLanguageKit("src/lang/lang_about.json", about_language_kit_object);
createLanguageKit("src/lang/lang_zakelijk.json", zakelijk_language_kit_object);
createLanguageKit("src/lang/lang_login.json", login_language_kit_object);
createLanguageKit("src/lang/lang_installatie.json", installatie_language_kit_object);
createLanguageKit("src/lang/lang_causemarketing.json", causemarketing_language_kit_object);
createLanguageKit("src/lang/lang_privacy.json", privacy_language_kit_object)


async function createLanguageKit(fileName, output) {
  console.log('create LanguageKit');
  // console.log('create LanguageKit', output); //debug

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
      console.log('Languagekit saved!');
    });
  } catch (error) {
    console.log('error creating file', error);
  }
}
