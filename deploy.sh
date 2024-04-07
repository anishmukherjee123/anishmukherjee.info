#! /bin/bash

# TODO: Convert this into a Github Actions Pipeline

set -e
date=$(date +"%m-%d-%Y")
time=$(date +"%T")

if [ -d "./build" ]
then
    # Move to old builds
    mkdir -p ./old_builds/$date/$time && mv ./build $_
    # Clean builds older than a week
    find ./old_builds/* -mtime +7 -prune -exec rm -rf {} \;
fi

# Create new build
npm run build
# Clean up old build on EC2 instance
ssh -i "~/.ssh/anish_mukherjee.pem" ec2-user@3.133.147.183 "sudo rm -rf /var/www/html/*"
# Copy to EC2 instance
scp -r -i "~/.ssh/anish_mukherjee.pem" ./build/* ec2-user@3.133.147.183:/var/www/html
# Restart apache on EC2
ssh -i "~/.ssh/anish_mukherjee.pem" ec2-user@3.133.147.183 "sudo service httpd restart"