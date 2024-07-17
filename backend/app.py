import os
import logging
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_caching import Cache
from dotenv import load_dotenv
import openai

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configure rate limiting
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"]
)

# Configure caching
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Set OpenAI API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/generate-guide", methods=["POST"])
@limiter.limit("10 per minute")
@cache.cached(timeout=300, query_string=True)
def generate_guide():
    user_input = request.json.get("user_input")
    logger.info(f"Received user input: {user_input}")

    messages = [
        {
            "role": "user",
            "content": f"Generate a step-by-step guide using best Onshape practices, using only Onshape's pre-built tools. Ensure the design is created in the part studio with sketches as the base of the design. Create the following design in Onshape: {user_input}"
        }
    ]

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=450,
            temperature=0.7,
        )

        guide_raw = response.choices[0]["message"]["content"].strip()
        guide = guide_raw.replace(". ", ".\n\n")

        return jsonify({"guide": guide})
    except openai.error.RateLimitError:
        logger.error("OpenAI API rate limit exceeded")
        return jsonify({"error": "You have exceeded your OpenAI API quota. Please check your plan and billing details."}), 429
    except Exception as e:
        logger.error(f"Error generating guide: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
