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
```pug
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

## donate/index.pug 
```pug
extends ../layouts/primary.pug

block main
  .Section
    include ./hero.pug
  .Section.Section--pt-lg.Section--pb-lg
    include ./excerpt.pug
  .Section.Section--pb-lg
    include ./videos.pug
  .Section
    .js-articles-container
  .Section.Section--pt-lg
    include ./photo-gallery.pug
  .Section.Section--pb-lg
    include ./downloads-donors.pug

block extra-scripts
```

## hall-of-fame/index.pug 
```pug
extends ../layouts/primary.pug

block main
  .Section.Section--marginExtra
    .js-hall-of-fame-grid
  .Search-loading
  include ../partials/modal-card.pug

block extra-scripts
```

## magazine/magazine.pug 
```pug
extends ../layouts/primary.pug

block main

  .Section.Section--pb-lg
    include ./magazine-filter.pug
    .js-magazine-container

block extra-scripts
```

##  media-and-sponsors/media-and-sponsors.pug 
```pug
extends ../layouts/primary.pug

block main
  .Section.Competitions-Banner
    include ../media-and-sponsors/media-and-sponsors-hero.pug

  Section.Section--pt-lg.Section--pb-lg.Section--bgLight
    .Container.Container--wide
      include ../media-and-sponsors/media-and-sponsors-about.pug

  Section.Section--pt-lg.Section--pb-lg
    .Container.Container--wide
      include ../media-and-sponsors/media-and-sponsors-social.pug

  Section.Section--pt-lg.Section--pb-lg.Section--bgLight
    .Container.Container--wide
      include ../media-and-sponsors/media-and-sponsors-athletes.pug

  Section.Section--pt-lg.Section--pb-lg
    .Container.Container--wide
      include ../media-and-sponsors/media-and-sponsors-competitions.pug

  Section
    include ../media-and-sponsors/media-and-sponsors-contact.pug
```

## photo-gallery/index.pug 
```pug
extends ../layouts/primary.pug

block main
  .Section.Section--marginExtra
    h1.TitleSection.TitleSection--smaller.TitleSection--mb.TitleSection--border.TitleSection--dark=album.title
    .js-photo-albums

  include ./modal-image.pug

block extra-scripts
```
