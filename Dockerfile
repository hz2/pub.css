FROM scratch
ARG build_mode=dev
RUN mkdir -p /app
COPY ./ /app
WORKDIR /app

EXPOSE 80