---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
# Optional: a banner image. Put the file in assets/images/news/ and name it here.
# image: "my-image.png"
# Optional: a "read more" link (e.g. a conference website).
# link: "https://example.org/"
description: ""
---

Write your news post here in Markdown. The first paragraph is used as the
summary on the home page and news archive.
