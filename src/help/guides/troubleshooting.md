---
title: Troubleshooting
description: Encountered an issue with a source or the app? Here are resources to help you troubleshoot it.
lang: en-US
---

# Troubleshooting

:::: el-collapse
::: el-collapse-item title="I messed up my configuration file"
- The reference configuration file can be found [here](https://github.com/Suwayomi/Tachidesk-Server/blob/master/server/src/main/resources/server-reference.conf) replace your whole configuration or erroneous keys referring to it.
- Tachidesk will create a default configuration file when one doesn't exist, you can delete `server.conf` to get a copy of the reference configuration file after a restart.
:::
::: el-collapse-item title="I am running tachidesk in a headless environment (docker, NAS, VPS, etc.)"
- Set `server.systemTrayEnabled` to false, it will prevent Tachidesk to attempt to create a System Tray icon.
- Set `server.initialOpenInBrowserEnabled`to false, it will prevent Tachidesk to attempt to open a browser on startup.
:::
::: el-collapse-item title="My Tachidesk data directory/downloads size is getting to big"
- Set `server.downloadsPath` to the desired path, if you only need to change where downloads are stored. You have to move/remove the existing downloads manually.
- Set the special `server.rootDir` key if you need tachidesk to use a custom data directory path, refer to [this section](#overriding-tachidesk-servers-data-directory-path).
:::
::::

# General Troubleshooting

This guide will try to fix Tachidesk by reseting it to a clean install state.

- Make sure you have a recent backup of your library or create one in the app (if possible) because we **are going to wipe all Tachidesk data**.
- Make sure Tachidesk is not running (right click on tray icon and quit or kill it through the way your Operating System provides)
- Clear all browsing data on your browser if you use Tachidesk from a browser.
- Delete the Tachidesk data directory located below and re-run the app.

Note: Replace `<Account>` with the currently logged in account/user name on your pc.

On Mac OS X : `/Users/<Account>/Library/Application Support/Tachidesk`

On Windows XP : `C:\Documents and Settings\<Account>\Application Data\Local Settings\Tachidesk`

On Windows 7 and later : `C:\Users\<Account>\AppData\Local\Tachidesk`

On Unix/Linux : `/home/<account>/.local/share/Tachidesk`

- In the case that you have to periodically perform this fix or the problem persists or the method failed to fix it, open an issue or Join the [Suwayomi discord server](https://discord.gg/DDZdqZWaHA) to hang out with the community and to receive support and help.