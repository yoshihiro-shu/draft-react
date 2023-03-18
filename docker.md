# docker push

## Dockerfile login

```zsh
docker login -u ${username} -p ${password}
```

## Docker Image build at m1 mac

```zsh
docker build  --platform amd64 --tag=yoshi429/draft-backend:v-0.0.1 .
```

## Docker Image push

```zsh
docker push yoshi429/draft-backend:v-0.0.1
```
