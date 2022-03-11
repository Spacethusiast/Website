from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template("index.html")

# @app.route("/news")
# def _page():
#     return render_template("main_page.html")

if __name__ == "__main__":
    app.run(debug=True)