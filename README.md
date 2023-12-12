# TP_IGL: Frontend

Repo du Frontend du TP IGL

## Spécifications:

- Le Frontend est developpé avec **Next.JS**, le framework de **React**.
- Les packages installés et non-utilisés doivent etre desinstallés pour que le project ne soit pas trop lourd pour rien.

## Lancer l'application:

Executer la commande
```
npm install
```
puis
```
npm run dev
```
pour lancr l'application, puis ouvrez http://localhost:3000/ pour visualiser le resultat.

## Conventions de code:
- tous les accés au Backend doivent etre faits:
1 - en utilisant l'Api axios qui se trouve dans **src/pages/api/Api.js**
2 - les liens sauvegardés et regoupés dans le fichier **src/pages/api/Urls.js**
3 - les requetes d'accés au Backend se feront dans des fonctions dans le dossier **src/pages/data/**
- avant d'implementer une fonctionnalité, creez une nouvelle branche en executant
```
git checkout -b "prenom/fonctionnalité"
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;puis apres la fin de l'implémentation, push sur la meme branche
```
git push origin "prenom/fonctionnalité"
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pour que le main reste clean et stable.
- Avant d'ajouter des images (composantes) au projet, creez un dossier avec le nom de la fonctionnalité dans **"public/assets/"** ( **"/src/components/"** ) et mettez les images (composantes) relatifs à cette fonctionnalité dedans, pour les images (composantes) utilisés partout dans le projet, on les mets directement la-bas.


## Structure des dossiers du projet:
- **public/assets/**: pour les images, ils doivent etre regroupés dans des dossiers selon la fonctionnalité où ils sont utilisés.
- **src/components/**: pour mettres les composantes, ils doivent etre aussi regroupés selon les fonctionnalités où ils sont utilisés sauf si c'est des composantes utilisés partout dans l'application.
- **src/pages/api/**: */Api* pour l'api axios, et */Urls* pour regrouper les liens du backend.
- **src/pages/data/**: pour regrouper les fonctions pour fetch data du Backend.
- **src/pages/**: pour les pages de l'application Web, et les autres sous-dossiers pour le dynamic router du Next.JS.
