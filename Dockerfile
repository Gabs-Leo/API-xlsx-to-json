# Build stage
FROM node:16 AS build

ENV NODE_MODULES_CACHE true
ENV NODE_VERBOSE false

COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

# Runtime stage
FROM node:16

ENV NODE_ENV production
ENV NODE_MODULES_CACHE true
ENV NODE_VERBOSE false

COPY --from=build ./dist ./
COPY --from=build ./package.json ./

RUN yarn install --production
EXPOSE 4000

CMD [ "node", "./index.js" ]