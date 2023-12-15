# devops-mini-proj-tdd-greetings

authors : CAYLANADIA Vanya, GÖNEN Melda
group : 17

# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 17
- Membres du groupe : CAYLANADIA Vanya, GÖNEN Melda
https://github.com/melda-gonen-vinci/devops-mini-proj-tdd-greetings


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
<le fichier YAML décrit un workflow d intégration continu qui est déclenché lorsqu une pull request est ouverte. elle inclut plusieurs étapes telles que la vérification du code, installation des dépendances, la correction du code selon prettier et eslint, l execution des tests avec jest, affichage du début et fin pipeline par le biais d un message.>
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<le "on" précise les évenements qui déclencheront l'exécution du workflow. la différence entre le "on push" et "on pull request" est que le premier se fait à chaque push des developpeurs tandis que le second se fait lors de l ouverture d'une pull request.>
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<"run" c'est pour les commandes à executer telles que npm i, npm run code:fix. "run_on" c'est pour définir l'environement de travail (ubuntu pour notre cas)>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<"run" c'est pour les commandes à executer telles que npm i, npm run code:fix. "uses" c'est pour spécifier une action GitHub telle que checkout>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<oui tant que cela reste logique du point de vue du worflow. il faut faire attention à maintenir une séquence logique afin qu'il n y ai pas de soucis comme executer les tests aprés l'installation des dépendances.>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<on doit vérifier si secure_app est compatible avec l'environnement de notre pipeline. il faut se demander s'i faut ajouter des étapes pour la gestion des erreurs (dans le cas ou il y en a)>
```

