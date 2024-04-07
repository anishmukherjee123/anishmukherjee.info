IMAGE_TAG="latest"
# build the 'latest' tag
docker-compose build

# then build tagged version
IMAGE_TAG="0.0.3"
docker-compose build