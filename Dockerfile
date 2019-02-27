### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-stretch as builder

LABEL maintainer="ivan.subotic@unibas.ch"

# The qq is for silent output in the console
# You are welcome to modify this part as it
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# Sets the path where the app is going to be installed
ENV NODE_ROOT /usr/app/

# Creates the directory and all the parents (if they don’t exist)
RUN mkdir -p $NODE_ROOT

# Sets the /usr/app as the active directory
WORKDIR $NODE_ROOT

# Copies all the content
COPY . .

# Install all the packages
RUN npm install -g @angular/cli
RUN yarn install

## Build the angular app in production mode and store the artifacts in dist folder
## should be: $(npm bin)/ng build --prod --env=prod --build-optimizer
RUN yarn build-prod

### STAGE 2: Setup ###

FROM nginx:1.15-alpine

LABEL maintainer="ivan.subotic@unibas.ch"

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /usr/app/dist/beol /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
