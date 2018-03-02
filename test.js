casper.start();

casper.open('http://bestwatch.in.ua/');

casper.then(function(){
  this.test.assertExists('#coucou');
  this.click('#coucou');
  this.wait(100, function() {
    this.test.assert(this.evaluate(function () {
      return document.getElementById('coucou').checked;
    }));
  });
});


casper.run(function(){
  this.test.done();

});
/*
var casper = require("casper").create()

casper.start('https://www.google.com/', function() {
  this.echo('Page url is ' + this.getCurrentUrl());
  this.echo('Page title is ' + this.getTitle());
//  this.fill('form[action="/search"]', { 'q': 'casperjs' }, true);
});

/*
casper.then(function() {
    this.echo('Page url is ' + this.getCurrentUrl());
    this.echo('Page title is ' + this.getTitle());
});
*/
/*
casper.run();

/*
var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http://google.fr/', function() {
   // Wait for the page to be loaded
   this.waitForSelector('form[action="/search"]');
});


casper.then(function() {
   // search for 'casperjs' from google form
   this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
    // now search for 'phantomjs' by filling the form again
    this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});

casper.then(function() {
    // aggregate results for the 'phantomjs' search
    links = links.concat(this.evaluate(getLinks));
});


casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});


/*
var casper = require("casper").create()

casper.start('https://test-front.ex-crypto.me/', function() {

});
casper.then(function() {
    this.echo('Page url: ' + this.getCurrentUrl());
    this.echo('Page title: ' + this.getTitle());
});

casper.run();
*/
/*
var casper = require("casper").create();

casper.start('http://mobilka.net.ua/admin/', function() {
  this.fill('form[action="http://mobilka.net.ua/admin/index.php?route=common/login"]', { 'username': 'DimaOk', 'password': '1983DimaOk5'}, true);
  this.captureSelector('capture.png', '.navbar-brand');

});
casper.thenClick('.fa-key');

casper.then(function() {
    this.echo('Page url is ' + this.getCurrentUrl());
    this.echo('Page title is ' + this.getTitle());
});


casper.thenClick('.fa-folder-open');
// casper.thenClick('.fa-folder-open');

casper.run();
*/
