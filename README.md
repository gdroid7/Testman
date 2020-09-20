# Testman
A service for api and unit testing using typescript

# Requirements
## Node.js and yarn

## Install using Ubuntu
```sh
### Node.js

Open up a terminal window and enter following commands:

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs


### yarn

Open up a terminal window and enter following commands:

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn

```

## Install using Windows
```sh

### Node.js

goto: https://nodejs.org/en/download/ 
download and install windows installer for node and follow instructions

### yarn

goto: https://classic.yarnpkg.com/en/docs/install/#windows-stable
download and install yarn installer and follow instructions

```

## Install using MacOS
```sh

### Node.js

goto: https://nodejs.org/en/download/ 
download and install MacOS installer for node and follow instructions

# yarn

brew install yarn

```

# Installation

After you've installed nodejs and yarn on your machine
clone this repository on your local machine

Open up a terminal window and enter following commands:
```sh
git clone https://github.com/gdroid7/Testman.git && cd Testman
```
## Install dependencies 
While being in the same directory that we cloned (Testman)
```sh
yarn install
```

## Usage

### Create a test file / folder containing test files under **test** direcotry 

Make sure you create filename with the format 
```file_name.spec.ts```
for ex
```login_api_test.spec.ts```

Now you can run the test case file / folder by using below command

```sh
npm test test/your_file_or_folder_path
```

### Creating a npm command
You can also create a command as a shortcut to run all of the test cases for a specific directory 
Open up package.json file and add a new script inside the **scripts** object
```json
"scripts":{
"your_command_name":"mocha -r ts-node/register test/your_folder_path/**/*.ts"
}
```

### Running test cases with npm command
After you create your new command
open up terminal in the root directory of this project and run 
```sh
npm run your_command_name
```
