echo '😱 😱 😱 Build Start 😱 😱 😱'
npm run build
echo '😱 😱 😱 Deployment Start 😱 😱 😱'
mkdir docs/statics
cp -rf app/images docs/
cp -rf app/statics docs/
git add docs && git commit -m "build gh-page"
git push origin master
echo '😱 😱 😱 Deployment Done 😱 😱 😱'
