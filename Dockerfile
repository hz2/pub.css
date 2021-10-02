FROM nginx
RUN mkdir -p /app
COPY ./ /app
WORKDIR /app

EXPOSE 80