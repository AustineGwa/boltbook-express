# BoltBook - Express

This is a clone of Facebook written in Express.

### Getting Started

**If you are contributing, make sure to fork the repo and clone your fork.**

```bash
git clone https://github.com/boltstack/boltbook-express.git
```

```bash
cd boltbook-express
```

```bash
yarn # or yarn install / npm install 
```

```
gc local up
```

This starts Docker. Side note: `gc` is short for `graphcool`. You should have the Graphcool CLI globally installed. `yarn gloabl graphcool`

```
gc deploy
```

This will set you through some options. Don't deploy to a production environment. One already exists that has existing data. Just utilize that endpoint. Otherwise, deploy locally.

**If you need/want to stop Docker, just run**

```
gc local stop
```


### Contributing

To learn more about contributing, please take a look <a href='https://github.com/boltstack/boltstack/blob/master/CONTRIBUTING.md'>here.</a>

### Code of Conduct

To learn more about our code of conduct, please take a look <a href='https://github.com/boltstack/boltstack/blob/master/CODE_OF_CONDUCT.md'>here.</a>

### License

To learn more about our license, please take a look <a href='https://github.com/boltstack/boltstack/blob/master/License'>here.</a>