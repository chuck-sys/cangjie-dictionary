#!/usr/bin/env python
import sys
import json

if len(sys.argv) != 2:
    print('invalid number of arguments')
    print('python collect.py <filename>')
    sys.exit(-1)

def process_line(d, line):
    letters, char, _ = line.split('\t')
    if char in d:
        d[char].append(letters)
    else:
        d[char] = [letters]

char_dict = {}

with open(sys.argv[1]) as f:
    for i, line in enumerate(f.readlines()):
        if i % 1e3 == 0:
            print('Processing line %d' % i)

        process_line(char_dict, line)

print(json.dumps(char_dict, ensure_ascii=False))
