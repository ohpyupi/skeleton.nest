# ---- Build ----
FROM gcr.io/google_appengine/nodejs AS build
RUN /usr/local/bin/install_node '>=6.9.0'
ENV NODE_ENV=development
WORKDIR /repo/
COPY ./package.json .
RUN npm install --ignore-engines --unsafe-perm || \
  ((if [ -f npm-debug.log ]; then \
      cat npm-debug.log; \
    fi) && false)
COPY ./ .
RUN npm run test
RUN npm run build

# ---- Release ----
FROM gcr.io/google_appengine/nodejs
RUN /usr/local/bin/install_node '>=6.9.0'
COPY . /app/
COPY --from=build /repo/node_modules /app/node_modules
COPY --from=build /repo/build/server.js /app/build/server.js
EXPOSE 8080
CMD npm start
