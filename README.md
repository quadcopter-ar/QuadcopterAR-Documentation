# Quadcopter AR Documentation

Most of our current documentation lives here. However, there is still some documentation that may prove useful.
All of these 'Legacy Documents' can be found [here](https://drive.google.com/drive/folders/0B0w1SmLuHjCyclI0cU93Zk5Zems?resourcekey=0-yg10cH9jdec0t11C-6r2JA&usp=sharing)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
Building will be done by Github Actions. However, please make sure there are no broken links error by building locally before pushing final release
```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
As long as you make a PR to the master branch it should be autodeployed.
