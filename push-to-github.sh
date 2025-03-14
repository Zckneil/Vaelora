#!/bin/bash

# Load the GitHub token
source .github-token

# Configure Git to use HTTPS with credentials in the URL
git remote set-url origin https://Zckneil:${GITHUB_TOKEN}@github.com/Zckneil/Vaelora.git

# Push to GitHub
git push -u origin main

# Reset the remote URL to SSH for future use
git remote set-url origin git@github.com:Zckneil/Vaelora.git

echo "Repository successfully pushed to GitHub!" 