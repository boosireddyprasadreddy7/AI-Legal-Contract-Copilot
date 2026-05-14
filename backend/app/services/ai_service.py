import google.generativeai as genai

from app.core.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(
    "models/gemini-1.5-flash-latest"
)


def summarize_contract(contract_text: str):

    prompt = f"""
    You are a legal AI assistant.

    Summarize the following legal contract
    in professional and simple language.

    Contract:
    
    {contract_text}
    """

    response = model.generate_content(prompt)

    return response.text