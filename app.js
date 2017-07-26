#!/usr/bin/env node

var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var _           = require('lodash');
var touch       = require('touch');
var fs          = require('fs');
var Git = require('nodegit');
var files = require('./src/lib/files');
var program = require('commander');
var clc = require('cli-color');
var Line = CLI.Line;


clear();
console.log(
  chalk.red(
    figlet.textSync('Sleigh Js', { horizontalLayout: 'full' })
  )
);
console.log();
console.log('-------------------------------------------------------');
console.log();

program
    .version('0.0.1')
    .command('new [name]')
    .description('Sleigh command line tool to prepare your next sleigh app')
    .action(function(name) {
        newApp(name);
    });

program.parse(process.argv);

function newApp(name){
    var status = new Spinner('Cloning repository...');
    status.start();

    Git.Clone("https://github.com/sleighjs/christmas", name).then(function(repository) {
        status.stop();
        console.log(chalk.green('Done!'));
        console.log('Follow next setps to be ready to run your app');
        console.log('1. cd ' + name);
        console.log('2. npm install');
        console.log('3. create a .env file based on .env.example file (cp .env.example .env)');
        console.log('4. npm run serve');
    });
}

