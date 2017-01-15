## Syncano CLI plugin example

# Instalation

From the root folder of plugin type":

```sh
npm install -g
```

# Adding plugin to your project

Plugins has to be configured in you project config file `syncano.yml`, e.g:

```yaml
plugins:
    hello: syncano-cli-plugin-hello
```

# Usage

Type:
```sh
syncano-cli
```

You should see plugin in plugins section:
```sh
Usage: cli [options] [command]

  Current Instance: cold-pond-6063

  Commands:

    init [options]     Start a Syncano project in the current directory.
    socket             Manage sockets. Search and install from the Syncano Sockets Registry
    hosting            Manage your static web assets and host them on Syncano
    sync               Synchronize your local configuration with the connected Instance
    login              Login
    logout             Logout from your current Instance
    help [cmd]         display help for [cmd]

  Plugins:

    hello     hello

  Options:

    -h, --help  output usage information
```
