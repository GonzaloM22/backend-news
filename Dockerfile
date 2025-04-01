FROM node:20.0.0-alpine as server
WORKDIR /server
COPY ./ /server
RUN npm install 

CMD ["npm", "start"]
EXPOSE 5000