import requests
import sys
import json

URL = 'http://www.easports.com/madden-nfl/ultimate-team/web-app/data/1/cards/player/'
PARAMS = {'sort': 'ovr', 'asc': 0, 'state': 'all'}
HEADERS = {'Accept': 'application/json'}

def getStats(page):
    url = '%s/%d' % (URL, page)
    r = requests.get(url, params=PARAMS, headers=HEADERS)
    return r.json()['items']
    
def writeToFile(data):
    with open('playerstats.txt', 'a') as f:
        f.write(str(data))
    
def download():
    page = 1
    hasMore = True
    while hasMore:
        players = getStats(page)
        for player in players:
            writeToFile(str(player) + '\n')
            print(str(page) + ' has been downloaded')
        count = len(players)
        hasMore = count > 0
        page = page + 1
    
if __name__ == '__main__':
    download()
