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

## competitions/competitions.pug 
```
extends ../layouts/primary.pug

block main
  .Section.Competitions-Banner
    include ../partials/cta-grand-prix.pug

  .Section.Competitions-Filters
    include ./competitions-filters.pug

  .Section
    include ./competitions-search.pug

  .Section.Section--pb-lg.Search-container
    .js-competitions-grid
    .Search-loading

block extra-scripts
```

## country/index.pug

## development/development.pug
```pug
extends ../layouts/primary.pug

block main
  .Section.Competitions-Banner
    include ../partials/cta-donate.pug

  .Section.Section--pb-lg.Competitions-Filters
    include ./development-filter.pug
    .js-development-container
  .Search-loading

  .Section
    include ../partials/cta-help-in-equipment.pug

block extra-scripts
```

## discover/discover.pug 
```pug
extends ../layouts/primary.pug

block main
  .Section.Section--marginExtra
    .js-discover-grid

  .Search-loading

  .Section
    include ../partials/cta-world-fencing-day

  .Section.Section--marginExtra
    .js-photo-albums.Discover-contentGrid

  .Section.Section--marginExtra
    include ../magazine/magazine-filter.pug
    .js-magazine-container


  .Section
    include ../partials/cta-magazine.pug

block extra-scripts
```
