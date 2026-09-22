---
type: 'Page'
title: Dataview thing for Obsidian
aliases: null
description: null
icon: null
createdAt: '2026-09-19T05:02:07.993Z'
lastUpdated: '2026-09-21T05:11:18.621Z'
tags: []
coverImage: null
---
# Just OPM
```dataview
TABLE 
artist as "Artist(s)",
length(file.inlinks) as "Backlinks"
from "Songs" and #OPM
SORT length(file.inlinks) DESC
```

# All Songs
```dataview
TABLE 
artist as "Artist(s)",
length(file.inlinks) as "Backlinks"
from "Songs"
SORT length(file.inlinks) DESC
```

Import this to Obsidian, change ````text` to ````dataview` , and then enable the Dataview community plugin

