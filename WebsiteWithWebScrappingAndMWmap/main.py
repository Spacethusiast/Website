from flask import Flask, redirect, url_for, render_template, request
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

url = "https://spacenews.com/"
result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")
allHeadlines = doc.find_all(["div"], class_="article-content", limit=6)
# print(doc.body.h1.a.string)

newsTitles = []
newsContent = []
newsImages = []

l = 0

for i in allHeadlines:
    newsTitles.append(i.h1.a.string)

    newsPage = requests.get(i.h1.a['href'])
    newsDoc = BeautifulSoup(newsPage.text, "html.parser")
    newsContent.append([])

    for k in newsDoc.find_all("p", limit=3):
        newsContent[l].append(k.get_text())
        # print(k.get_text())

    for k in newsDoc.find_all("figure", class_="featured wp-caption"):  # ("img"):
        newsImages.append(k.img['src'])
        # print(k.img['src'])

    l = l + 1


@app.route("/", methods=["POST", "GET"])
def main_page():
    if request.method == "POST":
        return redirect(url_for("/news"))
    else:
        return render_template("index.html",
                           newsTitle1=newsTitles[0], newsContent1=''.join(newsContent[0]), imgSource1=newsImages[0],
                           newsTitle2=newsTitles[1], newsContent2=''.join(newsContent[1]), imgSource2=newsImages[1],
                           newsTitle3=newsTitles[2], newsContent3=''.join(newsContent[2]), imgSource3=newsImages[2])


@app.route("/news", methods=["POST", "GET"])
def news_page():
    if request.method == "POST":
        return redirect(url_for("/"))
    else:
        return render_template("news.html",
                           newsTitle1=newsTitles[0], newsContent1=''.join(newsContent[0]), imgSource1=newsImages[0],
                           newsTitle2=newsTitles[1], newsContent2=''.join(newsContent[1]), imgSource2=newsImages[1],
                           newsTitle3=newsTitles[2], newsContent3=''.join(newsContent[2]), imgSource3=newsImages[2],
                           newsTitle4=newsTitles[3], newsContent4=''.join(newsContent[3]), imgSource4=newsImages[3],
                           newsTitle5=newsTitles[4], newsContent5=''.join(newsContent[4]), imgSource5=newsImages[4],
                           newsTitle6=newsTitles[5], newsContent6=''.join(newsContent[5]), imgSource6=newsImages[5])

@app.route("/milky_map")
def milky_map_page():
    return render_template("galaxyMap.html")

@app.route("/sky_map")
def sky_page_page():
    return render_template("news.html")


if __name__ == "__main__":
    app.run(debug=False)
