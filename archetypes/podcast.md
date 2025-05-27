---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
type: "podcast"
audio: "/audio/{{ .Name }}.mp3"
draft: true
summary: ""
---
Show-notes go here. Upload the .mp3 into /static/audio/ and adjust the path.
