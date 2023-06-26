To create branches 
    git checkout -b "branch-name"
    feat => feature

To view all branched 
    git branch

To switch 
    git checkout "branch-name"

git merge (will merge whatever branch you menton with your branch)


Wake up / and to reduce conflicts
1) git checkout main/master
2) git pull
3) git checkout "your branch"
4) git merged main

before logging off
1) git add .
2) git commit -m "some shit"
3) git push


git log --oneline


// shortcut
git commit -am "commit message" // only stages and commits updates 
dosen't work on untracked filed you need to manually add them


git push --set-upstream origin branch-name (only once when you create new branch)