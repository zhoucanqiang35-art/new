import worker from "./_server/index.js";

export default {
  fetch(request, env, context) {
    return worker.fetch(request, env, context);
  },
};
