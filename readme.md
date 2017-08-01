# Sleigh CLI

Sleigh command line tool to prepare your next sleigh app

## Getting Started

To get a copy of the project and run it on your local machine for development and testing purposes, clone the project and install all dependencies.

### Installing

To install sleigh command line tool globaly, you should run the following command

```
npm install -g sleigh-cli
```

Now you can use the sleigh command from your terminal. To scaffold a new sleigh app run the following command

```
sleigh new <name-of-the-app>
```

Next you should go into the app folder and follow the next steps

**install the dependencies**
```
npm install
```
**create a .env file based on .env.example file**
```
.env.example .env
```

### Run

To run your app just enter

```
npm run serve
```

__This command runs the app and also starts a demon that restarts your server whenever you change the code__


## Built With

* [Commander](https://github.com/tj/commander.js) - CLI Commands
* [NodeGit](https://github.com/nodegit/nodegit) - Clone repo

## Contributing

All pull requests are welcome. Please do not hesitate to ask anything and create a pull request for anything.

## Authors

* **Apostolos Siokas** - *Initial work* - [Sleigh](https://github.com/siokas)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details