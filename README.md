# Push (EPNS) Browser Extension

PUSH is one of its kind service that allows users (wallet addresses) to receive notifications. Any dApps / Smart Contracts / Services can now send decentralised notifications to their users.
The extension comes with improved UI/UX design and features to make your experience with the extension much more exciting and fulfilling. You can get started by connecting your wallet address to the extension and have easy access your Inbox and Spam notifications on the extension whenever you need to.
Install the PUSH Browser extension and get notified from the decentralised web - [Link](https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg?hl=en)

# Local Dev

```bash
git clone https://github.com/ethereum-push-notification-service/push-browser-ext.git
```

```bash
cd push-browser-ext
yarn install
```

To make changes locally, follow the steps below:

- After making updates/changes, you have to build the projects

```bash
yarn build
```

- Then on your chrome/brave browser,navigate to 'Settings' > 'Extensions'.
- Turn on developer mode switch to access developer options on Extensions Page.
- Click on 'Load unpacked' and select the build of the extension you want to update locally. You will then see the extension of the project you selected on the extensions page.
- So to make subsequent updates, you have to build the project and click on the reload icon on the project on the extension dashboard to update the extension to the latest build or select the build afresh using the 'Load unpacked' button.
