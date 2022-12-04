
const buttonsData = {
  'green-s': "data:audio/mpeg;base64,//NAwAAAAAJYAUAAAP/c0Zhhsa0QV/vxJjdg1ja5Kv+X4GSASN53w1cCAGBlQP4hOJTGT/w1YHVCxcDfkf/AMBDBIORcr//5OFw0N9P//8oGgARgXKMmhr////06CDJ+9X////+z7aD/80DAWxjzEjgBnaABgaByYceMwT48EjRUAUCVl5AgOzAozDFMnD/HZTggdzDcGjAsKhIDWgKAs4q44U2Wq1q0IgNMDgCZc/Wf//RcY4BwwX25dRR//////vSD8g4Fkv/////////////zQMBSFmLmilHdmAH//WeDoxPw4CSmAgMA5dQGh+Y3VqZohyXUS/fdnCsbz87z/2SEAAqN//+iah3Aik///////eiLwiqv/////////////+ibBJgFgiIweZiIAC4wZBkw5Co3IjY3//NAwFMQ8uqMAutiudQwKBdQPZCsoUAl0ct9//CFAWlv//0SqErGeR//////95wPwDNpf/////////////9AujlAfAk4sIk2MwIQBjBDAFMAIHowsUejDOB+AIDpZRAYmuhozS1zWv3/80DAahHi7oAA7Ka42BpB2UP//qlUNTEkPf/////+qcGGFDJt//////////////qNhCoLqQBtW/MEBVCAKMTAbOF2nOVgXIiaDAMQCJtjoINix1jr1LUsEMRqX//7w6EN9b//////rf/zQMB9EprmgAD0JriqEYifl//////////////6lk0H6AH4HaAAUjgBlKwQUAXMAAB4cCLMJBSMwNQjzAKAiLVsrSYSDaHRf//0RJAjv/19/c6pJ//U3R6r///s5wRiZN////////////NAwI0SWup8AOwmuP///9RKiuAZ+SR4AFAwAd5ahCEhhQAgQXR0kEh4GA5EYgOCdDmOAEOg2p3ljhr/HUDL/7d/Ws+Sb/+rX/f//9lGRDw3hv/////////////+mKeLkAwyQhTwAED/80DAnhNy7nx482S4mkFABTApAYMBYDcwDwkjB3WaMRUJQwBQHxQAJIBLIt61af/PXveOgKyv9ktX81G////////WUxPv//////////////XIwByAF4kUWyABRCxiiMN3ABSGSZak9P/zQMCrE2rudHjsaLjpD8DZc8akMNsgi1vX9/oJAJvoz88kNMdzOaQiMMl/9jD3MZlmK6v6vV1J3IIZpf///7VMnVr9WtV///////mQjIC8bsAHBQrwwUt0YgTmeYRjTadrdnXbIJAm//NAwLgTmu50YPQmuaTSHVLRQq/jjauzUOFwAhdrJXVnub6FQVGL/+/95n//7qJgy0m/X/7f3U7da1an1vs3//////rNSQAPTFiAAJUiMLDjIPDQsw0VwJ9zJqMDA0kCzJL8aDisFqj/80DAxBSa7os+2qC68+apKRIeCtoN6v/0yVDVYXTKzf/////9riti+v////qXs1mW9/Uv//////7nwQ4QXGmsAygAQpAaZS7HQyxr4gYkgmqI4sWMHaqzkAA6ENN++fuUAmEMa39nVf/zQMDMFLLubzbZ2riqcej0QQBYTjTv/////+xNJU4fb///9FT9XRRRU/qSUl//////0x6g3gAKgskQXKzxl7QGpKWlygYcRqFVDpy5iKafDF2ovNDoiigmQPMVFUx2RUVEV2JDURgh//NAwNQUMu5YBuSiuBAIBHGhMs7P/////5UVU////////////+iqzs5QwUECOR9ChgQYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/80DA3hVi7kxG2pq4AAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIP/zQMDjFOr5yADBxLkAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//NAwOoAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAC/A+kEAAAz",
  'red-s': "data:audio/mpeg;base64,//MwwAAAAAJYAUAAAAwBQGBwOBQOBgB1A34DtDQYPAAoDTjIGnfIxb/j8RYt/4LgFg/M/8eMePz//8kMZzScKb//8RC//////bf3//////MwwEERwvZ8f5NQIP/zIDAmFykJFSHUAMBQMPhYIwQDnwaBwUBvEMsUBopNvzoyJEkv//MimHh0v/////0jApt////////////+okBQ//MwwDsOqpKlgdVoAYAOxQvEsGIPI1ZBTAfuMUlfC/3//6hNEP//zEVv/////+TCP/////////////WEEaiJVUBKRpg16HGSKXagm5jl//MwwEEMKpahQNtatI0/f//xV///WYi1//////1CiE/////////////74MDUwBX6RJRJgw+LgHax4NNRl9e5dr///9Qcf//6Hib///////MwwFEMIpqcAONUtP6DATv////////////vhOBW4AIzdgZA6CQwetzs44CAOziH6ekt0vP//oGbf//Q8l//////0iYQv/////////////MwwGEMWpqcIOKUtP+gfBnPgCBZsQDUjhqh/AaqMIjIP1JozTZ2b6BeP/+06jkwdO+3dlnf1n0//QN/////////////zlAEAAkpdIEA//MwwHANCpqcQOKatDLpGHnCeqHAYIV/XqlWtU5+v/C03//4zDr//////6ZLf///////////+rRL4Ns1A4l4dABeRlxhoPH7CeGBRk7u//MwwHwNQpaoeKqOtlJK6SVf+//BT//+gxH3//////MT3////////////2WZm4CQHABXvBlFILmwupABOACQwcKJGzov+gt/+1LOECCv//MwwIgNQpqUYOKatOxyKjdTTpV2NX/6Dw7///6/////////8aALgC5EKgERyqWRCITaCNHAManK+8quP///Ug8XW62+68KDpX//66f///MwwJQNepaQSOKatf5hRP////////////8LDjgAj04wIGBJwLAzPRwgeFvpxQE3F0985//xCMIhl//9CUVyb//////OJ///be/1fr////MwwJ8NypqoeKFKtv////7BJS6eQAhH1JQjhyB5xsbno2pY98tmpdll/758qD0Wp//6AuB0//////8SDor/////oYrf//////4RAEcA//MwwKgNapqYeslKti+pBD0YljhHqDhC1BtCLjcLGgEsssz0KEOztZ6p2/ymKFQ5Hb/////////////////ZymKCBgwNUAAAAAAAAAAA//MwwLMOQpp0GNqatAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//MwwLsOCppwOMnKtiAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAg//MwwMMOIo3UAHiEtQAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//MwwMsAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAvwMdBQAANA==",
  'yellow-s': "data:audio/mpeg;base64,/+MwwAAAAAJYAUAAAP+tETMpXTjE8/9p6ozVZHD2+Jf9rlcyxCASEjmi3Ayg4DJFABknvwN8gAejA04cLZ/+RMvjrFBi4/++CACAkwBujArQiBc//yuYE4XybK6P//6aZOIIINAcC////BtqBkwJ4wNOggg/////+m9lug3///////0000PoGBOAZMKHtBaYbpgkyGBRct8YHD2Y/+MgwI8hLBIwAZ2gAJQNmIoVGDY0n8pKHbhMmGpIGIg1RNIpgJCABftjsSs46prWX41UisI7CZcNUDnEWJ5Kk+i3/r1sZE8AuAA0KELMkSKyv////////UkkQcGosR0RySLL////////4zDAZR8T6nTJ3aAB///////////+tygQ8OKAywgOXE7mB4HAlMtlYEAYeAQLAMYAj+Z1emZPjKYHhGYRgKTApA8ItYY8/+e/rTMQHY42////qMCbFYKKaP////////9MtJAOei///////////////////6TsViaByQBoJSAAURzJnJgMBo6Bpg0DJh6Ixxh5RtuGxgaN5hsLoCD/4yDAdxYr4oQA7BrZORRadDsuq9y7z0eqiPyAHJT////3MTxocS///q/v////1nRIhtJJf//////////////////ouWSVGsGCgJkZY1TgfhHcFAUYQgiKgih8YgBocZ8Ia+FgYPhMYP/jMMB5F9vmeBjrYtnIfAoA1AKksjFjuev8wshrJMEsCbPt////UYDSaP/////////uiXBZSX//////////////////9SiiXgxuA8hBgcz55wPUoDWWggwOg0HGVxCIwUYpHZwxSmZDeadOgYJlUHAkUrn4/S1q9NfTNZY0BgQQn6f///PIC5////aum3///85iBh8L2X//+j1nsv/jIMCoF0PueADrYtinfamuh6q9tKHtZm7OtEp///////VkUSwCoiBkTKgOASAt0NAzfdztASEmZI+d7eZxkbhyCoMPvo06WKbRGlyy/E3Q41AFAeCATHV///9B4JgAQJEW/////////+MwwKYaK+Z4FuKU2/8ydL///+ip/+v99SanRSRfZF6KTotuiyn///////1ssujSEhMDYDDjAITEZgRnTFFgNHNkJNi0MZJBLEDUAU6LIs8ZsuV4IHt3K9g2RakXiRJhfLCWLpxN2qsp12/2SJpIEMYELsFaJuMgeRd7f///////NRWJGop7f/////////////////5qKxxglAtE/+MgwMwY4+ZkBtHa2gNxgkaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAgACD/4zDAwxsL7hQA007YACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAD/4yDA5QAAAlgAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAL8DGQQAADU=",
  'blue-s': "data:audio/mpeg;base64,/+MgwAAAAAJYAUAAAP/dwzLGc0Onr/lmztZgjZRFv+/YIjZAQV9DAwBgDXLgCmn+PwoAcAav/ZsM8AYEAdJMGERR//xwMxcLhp//m7s5ZGbES///AOAFF0Gqp////pvTdDoM//////T/4yDAWxo7GjgBnaAA3pm4WiCdQ5c0DH///ygYdCS8D0CgCgZy5L0xOCoxzDg47YA6GA8wVB0wEASN1oMimvx7rHHKVKTEICyHl//+uZF8P+MMAWxiX//////6RKitjxdb///////////jIMBNFgrqsv/dkAH///+vQTEdjJiUBIBpNkWAtJcKBmYw1CYvCKlJE3PfJtpfe7+vpToxQJ4tv//6zAkQVRb//////9BAkg4Si3/////////////+oeoK6NxBPOB26zTR0NGIyGd0/+MgwE8RGvKQAOtauPefLGZkQCCQDhlTARgWmqY7z+SSERYIS3+v/mmnFm//////95kVEoUm//////////////0B8BbAAQwWlDyozUCh4GCoYSFYZkdYcMgwKAGIgALuq6L2q9y7n/r/4yDAZRHC6oQA4pq5lqcHsJQ0W31/r9RMMf//////8lBklt/////////////9VIvkCApAbCGAisCAAwHDMETjLywxZNMTlDiXwxFYMhLx4IR0LjtWcbOW0vLTIcRC8BUs1P6/2IjBaP/jIMB5EprufADrZLnG///7fN67fx41v////+3+nb//////oeAkDRLJiwDgANKaqYWwHLwBpK4c/QGxlxkIU2GPu458h3zLfLxMExguZ///OEYFAnCU3//////0Hppv////U039zWdt/+MgwIkS0u53JtqOuFL2//////6D4QQAoXkoj7QFRF0TCAENIXBc4IAmIt9yZyHrtnWRQ8iNio4exyOaj9bamEgegSCwPxgbDpj//////1VjKj/////////////9WMGOMBBQQsY2QAD/4yDAmBKq7mQG2dS4AAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIP/jIMCoEtr2HADBxLkAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA/+MgwLcAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAC/AzEKAAA2"
}

function beep() {
    var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}

class App extends React.Component {

  state = {
    buttonPattern: ['green-s','yellow-s','blue-s','red-s','yellow-s'],
    moveOrder: 0,
    countNum: 0,
  }

  playSound(audioURL) {
    let sound = new Audio(audioURL)
    sound.play()
  }
  playDelayedSound(audioURL) {
    setTimeout(() => this.playSound(audioURL), 100)
  }

  toggleButtonRun = (el) => {
    el.style.opacity = '1'
  }
  playDelayedToggle(el) {
    setTimeout(() => this.toggleButtonRun(el), 100)
    el.style.opacity = '.7'
  }

  toggleButton = (evt) => {
    const el = evt.target
    el.style.opacity = '1'
  }

  runGamePattern(i) {
    const buttonPattern = (this.state.buttonPattern)
    const moveOrder = (this.state.moveOrder)
    const el = document.getElementsByClassName(buttonPattern[i])[0]
    this.playDelayedSound(buttonsData[buttonPattern[i]])
    this.playDelayedToggle(el)
  }

  runGamePatternLoop(howMany) {
    const that = this
    let i = 0
    function delayGame() {
      that.runGamePattern(i)
      i++
      if (i <= howMany) {
        setTimeout(() => delayGame(), 1000)
      }
    }
    delayGame()
    }


  startGame = () => {
    setTimeout(() => this.runGamePatternLoop(0), 800)
    this.setState({countNum: 1,moveOrder: 0})
  }

  buttonPress = (evt) => {
    const el = evt.target

    el.style.opacity = '.7'



    const currentMove = evt.target.getAttribute('value')
    const currentCorrectMove = this.state.buttonPattern[this.state.moveOrder]
    const moveIsCorrect = currentMove === currentCorrectMove
    const audioURL = buttonsData[currentMove]

    const completeCorrect = (this.state.moveOrder + 1 === this.state.countNum) && (moveIsCorrect)
    const isWin = this.state.buttonPattern.length < this.state.countNum + 1
    const incompleteCorrect = moveIsCorrect && !completeCorrect
    !moveIsCorrect && beep()

    this.playSound(audioURL)

    console.log(audioURL);


    if (isWin) {
      setTimeout(() => alert('you win!'), 1000)
      this.setState({countNum: 0, moveOrder: 0})
    }

    if (completeCorrect) {
      setTimeout(() => this.runGamePatternLoop(this.state.countNum > 1 ? this.state.countNum - 1 : this.state.countNum), 1000)
      this.setState({countNum: this.state.countNum + 1, moveOrder: 0})
      console.log('complete turn');
    }

    if (incompleteCorrect) {
      this.setState({moveOrder: this.state.moveOrder + 1})
      console.log('correct');
    }

    if (!moveIsCorrect) {
      setTimeout(() => this.runGamePatternLoop(this.state.countNum > 1 ? this.state.countNum - 1 : this.state.countNum), 1000)
      this.setState({moveOrder: 0})
      console.log('incorrect');
    }

  }

  render() {

    const buttonsElements = Object.keys(buttonsData).map((val, idx) =>
      <div
        className={'button-p ' + val}
        onMouseDown={this.buttonPress}
        onMouseUp={this.toggleButton}
        value={val}
        key={idx}
      ></div>
    )

    return (
      <div className='element-main'>
        <h2>Simon Game <i className="volume up icon"></i></h2>
        <div className='simon-grid'>
          <div className='controls-circle'>
            <div className='simon-title'>SIMON</div>
            <span>
              <div className='start-reset' onClick={this.startGame}>Start/Reset</div>
            </span>
            <div className='count'>Count: {this.state.countNum}</div>
          </div>
          {buttonsElements}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
