import os
import subprocess
import time
import requests
import json
from pprint import pprint
from termcolor import colored
# following colors can be used in termcolor grey' or 'gray'
# 'red' 'green' 'yellow' 'blue' 'magenta' 'cyan' 'white'

# Get GitHub username and personal access token from environment variables
username = os.environ["GH_USERNAME"]
token = os.environ["GH_TOKEN"]
email = os.environ["GH_EMAIL"]
api_base_url = "https://api.github.com"

# installing npm packages
print("...Installing npm dependencies")
time.sleep(1)
subprocess.run(["npm", "install"])

# Remove the current origin
print("...removing the current origin")
time.sleep(1)
subprocess.run(["git", "remote", "remove", "origin"])


# -----------CREATING NEW ORIGIN

# Prompt the user for the repository name
repo_name = input("Enter the name of the repository you want to create: ")
repo_description = input(
    "Please enter the description of the repository you want to create: ")

# Define the API endpoint
# endpoint = f"https://api.github.com/user/{username}/repos"

# Set up authentication headers
headers = {
    "Authorization": f"Bearer {token}"
}

# Define the request data
data = {
    "name": repo_name,
    "description": repo_description,
    "private": False
}

# Make the API request
response = requests.post(f"{api_base_url}/user/repos",
                         headers=headers, json=data)

# Check the response status code
if response.status_code == 201:
    print(f"Successfully created repository: {repo_name}")
    repo_origin = f"https://github.com/{username}/{repo_name}"
    print(f"Repository origin address: {repo_origin}")
    time.sleep(2)
else:
    print(f"Failed to create repository: {repo_name}")
    print(f"Response status code: {response.status_code}")
    try:
        response_json = response.json()
        print(f"Response message: {response_json['message']}")
    except:
        print(f"Response: {response.text}")

# Self-destruct after 1 seconds
# -----------CREATING NEW ORIGIN END


# -----------ADD NEW ORIGIN START
# Ask for new origin
# origin_url = input("Enter the new origin URL: ")

# Add the new origin
subprocess.run(["git", "remote", "add", "origin", repo_origin])
print("new repository origin added successfully!")
time.sleep(2)

# -------adding collaborator

# Prompt the user to confirm if they have collaborators to add
add_collaborators = input(
    "Do you have any collaborators to add? (yes/no): ").lower()


# Add each collaborator
while add_collaborators in ["yes", "y"]:
    # Prompt the user for the collaborator username
    collaborator_username = input("Enter the username of the collaborator: ")

    # Define the API endpoint
    endpoint = f"{api_base_url}/repos/{username}/{repo_name}/collaborators/{collaborator_username}"

    # Make the API request to add the collaborator
    response = requests.put(endpoint, headers=headers)

    # Check the response status code
    # if response.status_code == 204:
    if response.status_code == 201:
        print(f"Successfully added collaborator: {collaborator_username}")
        time.sleep(3)
    else:
        print(f"Failed to add collaborator: {collaborator_username}")
        print(f"Response: {response.text}")
        time.sleep(2)

    # Prompt the user to confirm if they have another collaborator to add
    add_collaborators = input(
        "Do you have another collaborator to add? (yes/no): ").lower()

if add_collaborators in ["no", "n"]:
    print(f"No more collaborators added other then {collaborator_username}.")
# -------ADDING COLLABORATOR END


# -------CHANGING THE NAME PROPERTY OF Package.json and package-lock.json
# -----package.json
with open("package.json", "r") as file:
    package = json.load(file)

# Update the name field
package["name"] = "new-name"

# Write the updated contents back to the package.json file
with open("package.json", "w") as file:
    json.dump(package, file, indent=2)
# -----package-lock.json
# Load the contents of the package-lock.json file
with open("package-lock.json", "r") as file:
    package_lock = json.load(file)

# Update the name field
package_lock["name"] = "new-name"

# Write the updated contents back to the package-lock.json file
with open("package-lock.json", "w") as file:
    json.dump(package_lock, file, indent=2)
# -------CHANGING THE NAME PROPERTY OF Package.json and package-lock.json END

# -------PUSHING CHANGES
print(
    colored(f"...We're almost there {username} 🚀, hang on tightly", "green"))
time.sleep(3)
print(
    colored(f"...pushing changes to newly added repository: {repo_origin}", "cyan"))
time.sleep(2)
subprocess.run(["git", "add", "."])
subprocess.run(["git", "commit", "-m", "'initial commit'"])
subprocess.run(["git", "push", "-u", "origin", "main"])
pprint("\033[1;32m" + "...changes pushed successfully" + "\033[0m")
time.sleep(3)

# --------NEW WORKING BRANCH
# Replace <PAT> with your Personal Access Token

# Replace <OWNER> and <REPO> with your GitHub repository information
# The API endpoint to create a new branch
url = f"https://api.github.com/repos/{username}/{repo_name}/git/refs"

# Define the branch name
data = {
    "ref": "refs/heads/backup-branch"
}

# Make a POST request to create the new branch
response = requests.post(url, json=data, headers=headers)

# Check if the request was successful
if response.status_code == 201:
    print(colored("Branch created successfully", "cyan"))
else:
    print(
        colored(f"Failed to create branch: {response.json()['message']}", "red"))

# --------NEW WORKING BRANCH


# Confirm completion
pprint("initial script has been done ✅")
time.sleep(3)
print(colored("self destroying script ❌", "green"))
time.sleep(3)
# Remove the script
time.sleep(1)
# os.remove(__file__)
