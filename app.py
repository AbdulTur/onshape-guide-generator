import openai
import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/generate-guide", methods=["POST"])
def generate_guide():
    user_input = request.json["user_input"]

    message = {
        "role": "system",
        "content": f"Generate a step-by-step guide using best Onshape practices, using only Onshape's pre-built tools, ensure the design is created in the part studio with sketches as the base of the design, create the following design in Onshape: {user_input}"
    }

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[message],
        max_tokens=450,
        temperature=0.7,
    )

    guide_raw = response.choices[0].message["content"].strip()
    guide = guide_raw.replace(". ", ".\n\n")

    return jsonify({"guide": guide})

if __name__ == "__main__":
    app.run()
