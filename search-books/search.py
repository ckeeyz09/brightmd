import json
import re

book_file = open('data_file.json', 'r')
book_list = json.load(book_file)
b = book_list.keys()
search_list = []
x = 0
y = 0

for key in b:
    title = book_list[key].get("title").lower()
    c_title = re.sub(r'[^\w\s]', '', title).split(" ")
    desc = book_list[key].get("description").lower()
    c_desc = re.sub(r'[^\w\s]', '', desc).split(" ")
    search_list.append(c_title + c_desc)


def search_func(word):
    word = word.lower()
    global x
    s = b[x]
    theSet = set([word])
    r = theSet.issubset(search_list[x])
    if r is True:
        print("Match found! ID: {} and Title:  {}".format(s, book_list[s].get("title")))
    else:
        print("No Matches")
        pass
    x += 1


def find_word(word):

    # map(search_func(word), sub) for sub in search_list
    # map(lambda b : map(float, b), a)
    map(lambda sub : map(search_func(word), sub), search_list)


find_word("sandwich")
