# Personal Website

### TODO
- Build out blog page (template?)
- Gallery Component + Page
- Fix EC2 deployment
    - Switch to certbot + nginx
- Set up Github Actions to use Docker Compose 
    - This means I can move from setting the env in the build script to just having two stages in the pipeline build, one defaulting to latest and one with a tag parameter

### Build Process
Set `IMAGE_TAG` in a `build.sh` and run it. You should get both a `latest` and `IMAGE_TAG` version of the container:
```bash
$ docker images | grep anishmukherjee.info
anishmukherjee.info     0.0.3         f784fee3bd00   36 minutes ago      48.9MB
anishmukherjee.info     latest        f784fee3bd00   36 minutes ago      48.9MB
```

Then push to Docker Hub using:
```bash
docker-compose push
```
