# Telr Concierge Server (TCS)

![Telr Concierge — HODL Your Own](https://i.imgur.com/KxnTzAB.png)

__— Telr__ is a decentralized finance (DeFi) community created by __[Modenero](https://modenero.com)__ to enable and accelerate business development for professional __Crypto Service Providers (CSPs).__

__— Telr Concierge__ is an all-inclusive suite of crypto products and services, the framework for assembling them into customized business solutions, and a place for enthusiasts and professionals alike to experiment and exchange ideas.

__— Telr Concierge Server (TCS)__ is the self-hosted, __virtual software appliance__ necessary to empower crypto service providers with the means to take control of their __OWN__ assets and streamline their business enterprise.

> TCS will typically run on the same machine(s) that are responsible for managing your current crypto network. TCS consumes only minimal system resources, so __NO ADDITIONAL HARDWARE__ is required. TCS strictly enforces __SECURITY-FIRST__ practices, specifically designed for __SAFE USE__ on shared, virtual or cloud-based servers.

# Table of Contents

- [TCS benefits for your business](#tcs-benefits-for-your-business)
- [TCS is all-inclusive](#tcs-is-all-inclusive)
    - [Cash Wallet](#cash-wallet)
    - [Gatekeeper](#gatekeeper)
    - [Keymaster](#keymaster)
    - [Vin](#vin)
- [Getting started](#getting-started)
    - [Install with Vin.py](#install-with-vinpy)
    - [Install with Docker](#install-with-docker)
    - [Install manually (from source)](#install-manually-from-source)
- [Documentation](#documenation)
    - [For Operators and Providers](#for-operators-and-providers)
    - [For System Administrators](#for-system-administrators)
- [Our community](#our-community)
    - [Slack](#slack)
    - [Reddit](#reddit)
- [Contributing](#contributing)
- [License](#license)


## TCS benefits for your business

* __Account (Private Key) Management__ - At the heart of TCS is the Telr Cash Wallet. __The last "hot" wallet you will EVER need. GUARNATEED!__ Support for over 100+ of the TOP cryptocurrencies is ONLY the beginning. 3rd-party integrations, two-factor authetication and 24x7 fraud detection make this a MUST-have for both small and enterprise-level crypto businesses.

* __Peace Of Mind__ - The safety and security of your most valuable assets should be the top priority for every organization. Rest easier in knowing the most highly recognized team of security professionals are at your service 24 hours a day. From stopping hackers at your firewall, to stopping fraudsters at your terminals; TCS protections are sure to lower the stress and anxiety of the most demanding operations.

* __24/7 Support You'll Love__ - We believe in providing help when it’s needed, not when it’s too late. With a __2m 55s__ average median response time and a __95%__ satisfaction rate, we pride ourselves in providing probably the best support in the industry.

<center>
<img src="https://i.imgur.com/0IduHsv.png" alt="Security Key">
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://i.imgur.com/Vh1j4i7.png" alt="PCI-DSS Compliant">
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://i.imgur.com/rNtisHv.png" alt="24x7 Customer Support">
</center>


## TCS is all-inclusive

> We'd love for you to take a few minutes and read about our entire suite of enterprise-class business services. However, if you're ready to go, then jump ahead to __"Getting Started!"__

### Cash Wallet

<img src="https://i.imgur.com/3sNg1RJ.png" align="right" alt="Cash Wallet">

A mult-crypto "hot" wallet designed for use in crypto merchant services.

Send over 100+ of the world's most popular cryptos from your automated terminals directly into your customers hands. Experience improved engagement with customers, increased transaction margins and greater peace of mind for your crypto business.

### Gatekeeper

<img src="https://i.imgur.com/MekB56Q.png" align="right" alt="Security Gate">

Allow secure, 3rd-party integrations with your Cash Wallet. The procedure is very similar to the Application Program Interface (API) of your average crypto exchange. Using a shared-secret, with specific permissions (defined by the operator), 3rd-parties can safely execute transactions from the Cash Wallet.

* __Auditing__ - Access and configuration modifications are audited. The auditing engine is pluggable through an audit adapter. The Level of audit is controlled through policies. This feature is often required for compliance purposes.

* __PCI Compliance__ - Although its NOT yet strictly required in the crypto industry; we recommend keeping all of your internal systems 100% PCI compliant.

  _A service provider which has been audited and certified according to these standards has proven it has the technical capacity and procedures in place to provide robust enough security to protect the most sensitive business information._

* __RESTful API__ - Its documentation is generated and browsable through integration with Swagger.

* __Privacy & Data Security__ - Telr is vigilant about your privacy, and the privacy of your customers.

### Keymaster

<img src="https://i.imgur.com/lK2KEUJ.png" align="right" alt="Bitcoin Key">

A secret is either handed off to the system to be kept securely, or is generated by the system (and kept securely) based on a client request. A secret can be read and used, updated if needed, auto-rotate in some cases and eventually destroyed – either automatically due to expiration or revoked based on a client request.

Different secrets can reside in different namespaces, where each namespace might be managed and/or accessible by different parts of your organization. Namespaces are hierarchical for easy management and quick revocation. Authorization is controlled through policies.

* __Auto-rotating secrets__ - A secret can be created dynamically based on a client request. An example is a short-lived AWS access token, that is automatically being refreshed periodically. This relieves the client from generating and refreshing such a secret while maximizing security through short-lived tokens and centralized auditing. Multiple types of secrets, like certificates and cloud access keys, are supported.

Each secret is encrypted using a generated encryption key which is not persisted anywhere. Instead, the encryption key is broken into pieces and each piece is kept in a different location potentially owned by a different person. An attacker has to penetrate into enough locations in order to reconstruct an encryption key. Furthermore, the attacker would have to break into enough locations simultaneously due to continuous share rotation.

### Vin

<img src="https://i.imgur.com/UOwcfv4.png" align="right" alt="Bitcoin Key">

Nevermind the little things.Vin _(Vires in numeris)_ is Telr's resident AI assistant, offering a full stack of __Safer, Faster, Simpler__ administrative controls that can be deployed automatically. We've engineered Vin to tirelessly oversee the __more advanced installations/configurations, scheduled updates, and day-to-day responsibilities__ of your business enterprise:

 - [x] Firewall installation and monitoring
 - [x] Host intrusion and exploit prevention
 - [x] Adaptive threat protection with machine learning
 - [x] Vulnerability and penetration testing
 - [x] Daily data backups to offsite storage
 - [x] Daily data integrity scans
 - [x] Daily intrusion detection scans
 - [x] Scheduled reporting (daily, weekly, monthly)

__We don't wish to alarm you, but...__

_How many of the above items do YOU have checked off?_  
_How often do you BACKUP your customers' data? And where to?_  
_How much time/money would a TOTAL DATA LOSS cost your business?_

<center>
<img src="https://i.imgur.com/tj7iJVq.png?1" alt="Let's Get Started">
</center>


## Getting started

For your convenience, we provide operators (and system administrators) with __3 options for installing the TCS.__ Please read each section to understand the benefits and trade-offs of each approach.

### Install with Vin.py

Vin (vin.py) is a Python application offering a user-friendly console to not only install the TCS, but also to manage the health of your system/host. This is our __highly recommended__ option, as it provides the __most security__ and offers the __greatest value__ for your business.

__Pros:__

 - security: firewall, intrusion detection, etc
 - updates: stay up-to-date with the latest patches

__To install:__

1. __Copy and paste__ the following line onto your Ubuntu (or preferred Linux distro) command prompt and __press enter:__

 ```
 python3 <(curl -s https://telr.io/vin.py)
 ```
OR if you prefer to use an "immutable" IPFS link:

 ```
 python3 <(curl -s https://ipfs.io/ipfs/QmQdSzRr1LVjsELdUTTknruQu6VRn1hERyAhB5MpdQ7G1d/vin.py)
 ```

 `QmQdSzRr1LVjsELdUTTknruQu6VRn1hERyAhB5MpdQ7G1d` _v20.1.8 is latest stable_

2. After the software is downloaded & started, select option:  
__1) Manage Telr remote services__

3. On-screen instructions will guide you from there.

### Install with Docker

* To run: none
* To build: Golang 1.7+ (https://golang.org/doc/install)
* To generate RESTful API docs: go-swagger (https://github.com/go-swagger/go-swagger)

### Install manually (from source)

> This options is ONLY suggested for advanced operators or system administrators. You MUST have experience with installing ...

Under your Go workspace (__$GOPATH__) create a __src/github.com/vmware__ directory:
Then cd into __src/github.com/vmware__ and clone your forked repo.\:

```
git clone https://github.com/modenero/telr-concierge-server.git
```

### First Build

cd into __virtual-security-module__.
Before your first build fetch dependencies by running:
```
make install-deps
```

### Build

```
make
```

### Test

```
make test
```

From here, just follow the [HOWTO](doc/HOWTO.md).


## Documentation

The [HOWTO](doc/HOWTO.md) describes how to accomplish some common tasks.


## Our community

__Slack:__ Join Telr's community here: [Modenero {code}](https://telr.io), Channel: #telr.  


## Contributing

The __telr-concierge-server__ project team welcomes contributions from the community.
Before you start working with telr-concierge-server, please read our
[Developer Certificate of Origin](https://telr.io). All contributions to
this repository must be signed as described on that page. Your signature certifies that
you wrote the patch or have the right to pass it on as an open-source patch. For more
detailed information, refer to [CONTRIBUTING.md](CONTRIBUTING.md).


## License

Telr Concierge Server is licensed under the [MIT](LICENSE).
