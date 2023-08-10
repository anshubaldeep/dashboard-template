import base from "./config/baseSetting";

const NodeEnv = import.meta.env.MODE;
export const BASE_URL = base(NodeEnv).baseUrl;
export const CONSUMER_BASE_URL = base(NodeEnv).consumerBaseUrl;
export const UPLOAD_MEDIA_BASE_URL = base(NodeEnv).uploadMediaBaseUrl;
