# Telr Services Extension for General Bytes BATM Crypto Application Server (CAS)

> A quick and easy way for BATM operators to extend the entire suite of Telr services to their currently running BATM CAS.


## Ubuntu 14.x/16.x/18.x Installation

#### Automatic Installation

```
# 1. Create a new Telr directory in user source directory.
mkdir -p /usr/src/telr

# 2. Change to Telr directory.
cd /usr/src/telr

# 3. Download the installation script.
curl https://modenero.com/downloads/telr-cas-extension.tar.gz

# 4. Make the installation executable.
chmod +x install-ubuntu.sh

# 5. Run the installation.
./install-ubuntu.sh
```

#### Manual Installation

```
# 1. Create a new Telr directory in user source directory.
mkdir -p /usr/src/telr

# 2. Change to Telr directory.
cd /usr/src/telr

# 3. Clone the Telr extension repo.
git clone https://github.com/modenero.com/telr-cas-extension.git

# 4. Make the installation executable.
cd telr-cas-extension

# 5. Build the extension.
./gradlew build

# 6. Install the extension.
cp server_extensions_extra/build/libs/batm_server_extensions_extra.jar /batm/app/master/extensions/
```

#### NOTE: If you are using a CAS with custom extensions, please contact support@modenero.com for help with installation.


## Connect via Mobile with Telr.App

You will need to register your CAS to your preferred DAPP browser.

Sign in with your CAS username and password.

> __Pro Tip:__ Initial username:password is `admin:admin`.


## Benefits for BATM Operators

Support the entire Modenero suite of Telr services, while still using your familiar Crypto Application Server (CAS).

- [x] 100% Mobile-friendly Dashboards
- [x] Community Chest (Daily Rewards)


## Future Development Roadmap

- [ ] Telr.App support _(native and webapp)_
- [ ] Accounting
