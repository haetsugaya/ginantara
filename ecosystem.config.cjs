module.exports = {
  apps: [
    {
      name: "ginantara-fe",
      script: "npm",
      args: "run start", // Assuming 'start' is the script to start your Remix app
      interpreter: "none",
      env: {
        PORT: 3102,
      },
    },
  ],
};
