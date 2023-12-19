git config --global user.email "hello.crealgo@gmail.com"
git config --global user.name "Crealgo, LLC"

rm -rf node_modules
npm ci
npx playwright install --with-deps
