# meu-projeto

git init
- iniciar novo projeto com git

git add <nome-arquivo>/.
- add os arquivos estão prontos para serem commitados

git commit -m "mensagem commit"
- commit os arquivos no historico

git log
- mostra os ultimos commit, log de alterações

git status
- como está o estado da nossa ramificações

git diff
- que mostra o que foi alterado
- o que tem de alteração na ramificação

git merge
- merge de ramificações, mescla ramificações

git branch
- mostra a branch atual

git branch -b <nome-da-branch>
- cria uma nova branch a partir do historico da branch atual que estamos,

git checkout <nome-da-branch>
- muda para essa branch

git remote add <nome> <url>
- add um novo repositorio remoto

git push <nome> <nome-da-branch>
- manda nossas alterações locais para o repositório remoto, para cada branch

git pull <nome> <nome-da-branch>
- pega as informações do repositório remoto e joga para nossa máquina

git fetch
- atualiza o novo historico local de acordo com o historico salvo no repositório
- sincronização do local com o remoto
