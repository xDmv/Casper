
var SELECTOR = [{
  email : '#LoginForm_email',
  password : '#LoginForm_password',
  button: '#login-btn',
  h1 : 'h1',
}];

var casper = require("casper").create();

// регистрация проверка селекторов и ид
casper.start('https://test-front.ex-crypto.me/registration', function() {
  this.echo('Url: ' + this.getCurrentUrl());
  this.echo('Title: ' + this.getTitle());
  this.echo('H1: ' + this.exists("h1.text-center.modal-title"));
  this.echo('h1: ' + this.fetchText('h1'));
  this.echo('Label: ' + this.exists("label.col-sm-3.control-label.required"));
  this.echo('Label: ' + this.fetchText('label.col-sm-3.control-label.required'));
  this.echo('button: ' + this.exists('#yw0'));
  this.echo('button: ' + this.fetchText('#yw0'));
  casper.capture('registration1.png');
  console.log('Сохранен скриншот: registration1.png');
// регестрация делаем регистрацию email: avtospam1@gmail.com password: DimaOk5#!

this.echo('checked: ' + this.fetchText('div.float-form.form-group.login-cont.agreement-group.col-sm-12.has-error'));

  casper.then(function(){
    this.test.assertExists('#RegistrationForm_offerta');
    this.click('#RegistrationForm_offerta');
    this.wait(100, function() {
      this.test.assert(this.evaluate(function () {
        return document.getElementById('RegistrationForm_offerta').checked;
      }));
    });
  });
  
/*
  this.test.assertExists('input#RegistrationForm_offerta');
  this.click('input#RegistrationForm_offerta');
  this.wait(100, function() {
    this.test.assert(this.evaluate(function () {
      return document.getElementById('RegistrationForm_offerta').checked;
    }));
  });
*/
  this.fill('form[action="/registration"]', { 'RegistrationForm[email]': 'avtospam1@gmail.com', 'RegistrationForm[password]': 'DimaOk5#!'}, true);
  casper.capture('registration2.png');
  console.log('Сохранен скриншот: registration2.png');
});



/*
casper.start('https://test-front.ex-crypto.me/registration', function() {
  this.echo('Url: ' + this.getCurrentUrl());
  this.echo('Title: ' + this.getTitle());
  this.fill('form[action="/registration"]', { 'RegistrationForm[email]': 'avtospam1@gmail.com', 'RegistrationForm[password]': 'DimaOk5#!'}, true);
  casper.capture('registration2.png');
});

/*
casper.start('http://mobilka.net.ua/admin/', function() {
  this.fill('form[action="http://mobilka.net.ua/admin/index.php?route=common/login"]', { '#input-username': 'DimaOk', '#input-password': '1983DimaOk5'}, true);
  this.captureSelector('capture.png');
});
*/

casper.run();
