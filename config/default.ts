export default {
    port: 3000,
    dbUri: "mongodb://localhost:27017/user-api-tutorial",
    logLevel: "info",
    accessTokenPrivateKey: "",
    refreshTokenPrivateKey: "",
    smtp: {
      user: "@ethereal.email",
      pass: "",
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
    },
};