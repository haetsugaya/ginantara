module.exports = {
  apps: [
    {
      name: "ginantara-fe",
      script: "npm",
      args: "run start",
      interpreter: "none",
      env: {
        PORT: 666,
        GTM_CONTAINER_ID: "gtm-id-here",
      },
    },
  ],
};
