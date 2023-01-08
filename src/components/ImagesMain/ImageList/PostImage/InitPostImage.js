const initPostImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjhiNjExNzA1LWMxZGYtNDc3OC04NDM2LTBjYmRmNGMyYzViYTwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjgyOTFmMjczLWI4Y2YtNDk2OS04YjBkLTI1MTc1NzhhY2RmNjwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/8AACwgA8ADwAQERAP/EAB4AAQACAgMBAQEAAAAAAAAAAAAICQEHAwQGBQIK/8QAQBAAAQMDAgMFBAgEBAcBAAAAAQACAwQFBgcRCBIhEzFBUWEJMkKSFRgiV2JxgdMUM3KhFhcjUiSCg5GiscFD/9oACAEBAAA/ALU0RERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERY3WURERERERERERERERF+JZWQRvkkc1jGAuc5x2AA7yT4KOOq/H/pFpdLPRx3qTLLtES11HjzBUBrvJ0xIiHzEjyUXc09q9ldbJIzFMJtVphPRst3qZKuT8+VnZtH5blapuXtGNda97jFktvtzT8FJaINh+rw8/3XSpvaD680z+b/G0c34ZbTSOH9owva4v7ULVuzPaLrQ45kEXxdrSSU0h/J0b9h8qkFpv7VHCL7JFTZljlzxWV2wNXSuFfTA+JPKGyAf8jlLjAtTcU1RszbrieQUF/oDtvLQzh/IfJ7feYfRwBXp0RERERERERERERaX4jOK3C+G+0NdeZzcsgqGF9FYaJwNRMO4Pdv0jj3+N3rsHHoqsteuLzUTiAqZobxdHWrHXO/07BbHujpgPDtD70x9X9PJoWkx0AA6AdwC/TGullbEwF8rvdjaN3O/IDqV7mxaDalZNE2W1afZPXxO6iSK0T8p/UtAX06rhg1fo4jJNpjlTWDqS21yP2+UFeDvuNXfFp+xvVpr7NNvtyXGlkpz/AObQvnL7WH5rf9P77DesavFbYrrF7tXQzGN+3k7bo5v4XAg+SsM4ZfaWUt9npMc1ZbBa615EcOS07OSlkPcP4hg/lE/72/Y8wwKe1PURVcEc0MjZYZGh7JGODmuaRuCCO8EeK5ERERERERERERRk4y+MSg4drCLNZewuWe3GIupaWT7UdFGdx/ETDy335WfER5AlVG5Nk12zO/117vtwqLrd66Qy1NZVP5pJXep8AO4AbADYAALmw/DL7qBkNJYsbtVVerxVHaGjo4+d7h4uPg1o8XOIA8SFP7Qz2W1MyCnumql4fPOQH/QFll5I2fhlqNuZx8xGGj8RU09PtFcE0rpWQYnidqsYaNu1paZvbO/qlO73fmSV7XZNgupdLPQ3yiko7jR09fSSDZ8FVE2WNw9WuBBUa9XfZ36T6lxT1FptrsHvL93Nq7GAyEu/HTn/AEyP6eU+qrv4hOD/AD7h3mfV3akZeMZL+WO/21rnQDfuEzT9qFx/F9knucVo/uUuuC3jertFK+jxDMqqWuwCZ4jhnkJfJZyT7zPEwb+8z4feb4tNr9FW09xo4KulnjqaWdjZYpoXh7JGOG7XNcOhBBBB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bjeH/iPxDiKxRt0x6r7G4QtaLhZ6hwFTRPPg4fE0n3Xj7LvQ7gbVRERF1rhcaW00NRW1tTDR0lPGZZqieQMjjYBuXOcegAHeSqv+Nrjp/wA04qvBNP6mSLESTHcLs3dj7nt/+cfiIPMnq/0b70KO8qwL2bXC1JW10OrmTUhbSw8zceppmfzXndr6sg+AG7WeZLneDSrHVlERERERERERRk4y+Dug4ibELzZewtue26ItpaqT7MdbGNz/AA8x8t9+V/wknvBIVRuTYzdsMv8AXWS+2+otV3oZDFU0dUzlkid6jxB7wRuCNiCQubD8zvun+Q0l9xu61VlvFKd4ayjk5HtHi0+Dmnxa4EHxBU/tDPak0z4Ke16qWd8E4AZ9P2WLnjf+KWn35mnzMZcPwhTT0+1qwTVSlZPieWWq+Bw37KlqW9s3+qI7Pb+RAXtd03C6l1vNBY6KSsuVbT2+kjG756qVsUbR6ucQAo06ve0R0o01inp7RcX5xeWbtbSWMh0AcP8AfUn/AEwP6ec+irv4g+L3PuImZ9LeKttpxoP5orBbXObT9O4yuP2pnDzd9kHuaFpHvUuuC3ghrta6+jy/MqWWhwCF4khgkBZJeCD7rPEQb+8/4vdb4uFr9FRU9uo4KSlgjpqWBjYooYWBjI2NGzWtaOgAAAAC50RERERERERERaX4jOFHC+JC0NbeYDbcgp2FlFfqJoFRCO8Mdv0kj3+B3rsWnqqsteuEPUTh/qZprxa3XXHWu/07/bGOkpiPDtB70J9H9PJxWkx1AI6g9xC/THOilbKwlkrfdkadnN/IjqF7mxa86lYzE2K1ag5PQRN6COK7z8o/QuIX06rif1frYjHNqdlTmHoQ26SM3+UheDvuSXfKJ+3vV2r7xN389xqpKg/+bivnL7WH4Vf9QL7DZcas9bfbrL7tJQwmR+3m7bo1v4nEAeasM4ZfZp0tinpMj1ZdT3StYRJDjVO/npYz3j+IeP5pH+xv2PMvCntT08VJBHDDG2KGNoYyNjQ1rWgbAADuAHguRERERERERERERF+JYmTxvjka17Hgtc1w3BB7wR4qOOrHABpFqjLPWR2WTE7tKS51ZjzxThzvN0JBiPygnzUXc09lDldFJI/FM2tV2hHVsV3ppKST8uZnaNP57BapuXs59daB7hFjVvuLR8dJd4Nj+jyw/wBl0qb2fGvNS/l/wVHD+KW7UjR/aQr2uL+y91bvL2m612OY/F8Xa1clTIPybGzY/MpBab+yuwixSRVOZZHc8qlbsTSUrRQUxPiDyl0hH/O1S4wLTLFNLrM21Ynj9BYKAbbxUMAZznze7vefVxJXp0REREREREREREREREWNllERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//9k=';

export default initPostImage;