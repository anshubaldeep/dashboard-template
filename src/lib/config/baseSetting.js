const production = {
  baseUrl: "https://.ispinnyworks.in",
  chatbotUrl: "https://.ispinnyworks.in",
};

const development = {
  baseUrl: "https://.dev.ispinnyworks.in",
  chatbotUrl: "https://.dev.ispinnyworks.in",
};

const base = (APP_ENV) => (APP_ENV === "production" ? production : development);

export default base;
