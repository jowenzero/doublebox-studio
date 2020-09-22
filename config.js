const env = process.env.ENV || "development";

const configs = {
  development: {
    GRAPHQL: "https://doubleboxstudio1600710770161.microgen.mejik.id/graphql",
    API: "https://doubleboxstudio1600710770161.microgen.mejik.id",
    STAGING: "development",
    URL: "https://staging.diasporapeduli.id",
  },
  production: {
    GRAPHQL: "https://doubleboxstudio1600710770161.microgen.mejik.id/graphql",
    API: "https://doubleboxstudio1600710770161.microgen.mejik.id",
    STAGING: "production",
    URL: "https://diasporapeduli.id",
  }
}[env];

module.exports = configs;