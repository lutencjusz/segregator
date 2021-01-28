# pull official base image
FROM node:15.2.1-alpine

# set working directory
WORKDIR /app

EXPOSE 5000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# RUN npx browserslist@latest --update-db

# add app
COPY . ./

RUN npm run build
RUN npm install -g serve

# start app
CMD [ "serve", "-s","build" ]
