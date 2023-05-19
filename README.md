# HeadHunter
This is the main repository of HeadHunter **backend**.

## Launching
```bash
#!/usr/bin/bash

# Clone the repository with submodules
git clone --recurse-submodules https://github.com/GigachadSoftware/head-hunter
cd head-hunter

# Init the modules
git submodule init
pip install -r requirements.txt
```

## Syncing frontend
⚠️ Do not make changes to the submodule, only do it in the actual repo!
```bash
#!/usr/bin/bash
 
cd headhunter/frontend
git pull origin main
yarn install # or npm install
yarn build # or npm run build
```
