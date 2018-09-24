function getWindowsCertificatePassword () {
  if (process.env.KEY_PASSWORD) {
    return process.env.KEY_PASSWORD
  } else {
    console.log("Skipping Windows Certificate Password")
  }
}

module.exports = {
  // other config here
  make_targets: {
    win32: [
      "squirrel"
    ],
    darwin: [
      "zip"
    ],
    linux: [
      "deb",
      "rpm"
    ]
  },
  electronPackagerConfig: {
    packageManager: "npm",
    osxSign: true,
    icon: "./app/resources/icon.icns",
    protocols: [
      {
        name: "Classroom Desktop",
        schemes: [
          "x-github-classroom"
        ]
      }
    ]
  },
  electronWinstallerConfig: {
    name: "classroom-desktop",
    icon: "./app/resources/icon.ico",
    setupIcon: "./app/resources/icon.ico",
    loadingGif: "./app/resources/images/win32-installer-splash.gif",
    certificateFile: "./script/windows-certificate.pfx",
    certificatePassword: getWindowsCertificatePassword()
  },
  electronInstallerDebian: {},
  electronInstallerRedhat: {},
  github_repository: {
    owner: "education",
    name: "classroom-desktop"
  },
  prerelease: true,
  windowsStoreConfig: {
    packageName: "",
    name: "classroom-desktop"
  },
}
