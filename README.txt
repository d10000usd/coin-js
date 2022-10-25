
깃 사용법
GIT
echo " BLOG_" >> README.md
git init
git add README.md
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/d10000usd/BLOG_.git
git push -u origin main
브랜치 생성
git branch
브랜치 삭제
git branch -d main-one
깃 브랜치후 체크아웃
git checkout main
git checkout issue3
git status
git remote -v  
git pull origin main
git config --list
git config core.filemode false 파일권한



도커파일 런
docker run -it --name test test:18
docker run -it --name u-zsh test:18
docker run -it --name <container> <image:Tag>
실행방법
docker start test <<<  이미지 실행
docker exec -it test /bin/zsh << 컨테이너 실행
docker exec -it teu-zshst /bin/zsh << 컨테이너 실행
docker run -it --name test test:18
docker start ubuntu-zsh
도커 실행 docker exec -it ubuntu-zsh /bin/zsh

sudo vi /usr/local/bin/git-build
sudo chmod +x /usr/local/bin/git-build
git build
code . /usr/local/bin/git-build 
sudo chmod +x /usr/local/bin/git-build
git build
rm -rf .git
find . -name ".git*" -type fd | wc -l 현재 폴더 안에서
find / -name ".git*" -type fd | wc -l 현재 루트하위 전체에서 검색
