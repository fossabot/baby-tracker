# Baby Tracker

![logo](logo.png)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmikebarkmin%2Fbaby-tracker.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmikebarkmin%2Fbaby-tracker?ref=badge_shield)

**A progressive web app to track your baby and share the data with your family in real-time.**

[![Maintainability](https://api.codeclimate.com/v1/badges/ac5730932862bc3cfa78/maintainability)](https://codeclimate.com/github/mikebarkmin/baby-tracker/maintainability)

[![Docker Pulls](https://img.shields.io/docker/pulls/mikebarkmin/baby-tracker)](https://cloud.docker.com/repository/docker/mikebarkmin/baby-tracker)


# Features

Create a new baby by entering his/her name in the designated field. Afterwards
you will receive a unique id which represents your baby. Share this id with
your husband, family and friends. All inserts, updates and deletes will be
synced to everyone in realtime, thanks to the magic of websockets.

At the moment four activities can be tracked.

## Daily Overview

![daily-overview](.github/daily.png)

## Diaper

Only pee? Or with poop? Which color did the poop have?

![diaper](.github/diaper.jpeg)

## Nursing

Left or right? Which position did I use?

![nursing](.github/nursing.jpeg)

## Food

What did we give the baby and how much?

![food](.github/food.png)

## Sleep

You will have many little entries - trust me ;)

![sleep](.github/sleep.png)

## Measurement

Big, Short, Fat, Slim. You will know it ;)

# Develop

`docker-compose up`

# Deploy

`docker-compose -f docker-compose.prod.yml up`

## License

Licensed under the MIT License, Copyright © 2019-present Mike Barkmin.

See [LICENSE](./LICENSE) for more information.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmikebarkmin%2Fbaby-tracker.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmikebarkmin%2Fbaby-tracker?ref=badge_large)