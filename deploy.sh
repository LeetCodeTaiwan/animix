echo '😱 😱 😱 Build Start 😱 😱 😱'
npm run build
echo '😱 😱 😱 Deployment Start 😱 😱 😱'
git add docs && git commit -m "build gh-page"
git push origin master
echo '😱 😱 😱 Deployment Done 😱 😱 😱'
