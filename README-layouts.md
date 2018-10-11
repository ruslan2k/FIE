# Layouts

## athletes/athlete.pug

```pug
extends ../layouts/primary.pug

block main
  .Section
    include ./athlete-hero.pug
  .Section
    include ./athlete-profile-info.pug
  .Section
    include ./athlete-bio.pug

  //- Modal Head to Head
  include ./modal-head-to-head.pug

  include ../partials/modal-notifications.pug

block extra-scripts
```

## athletes/athletes.pug
```pug
extends ../layouts/primary.pug

block main

  .Section
    +submenuAthlete(showing)
    .Container.Container--wider
      if showing === 'rankings'
        +searchRankings(season)
      else if showing === 'search'
        +searchAll()

  .Search-container
    .js-athletes-container
    .Search-loading

  .Section
    include ../partials/cta-hall-of-fame.pug

block extra-scripts
```

## competition/competition.pug
```pug
extends ../layouts/primary.pug

block main

  .Search-loading

  .Section.Section--pt-lg
    include ./competition-hero.pug

  .Section.Section--pt-lg.Section--pb-lg
    include ./competition-tabs.pug
  .Search-loading
  include ../partials/modal-notifications.pug

block extra-scripts
```
