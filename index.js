const qna = [];
async function getResponseFromLLM() {
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCNp6f5EalKjLAa5fMjU4DGLpd8yE7JIfY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [{ parts: [{ text: "Explain how AI works" }] }],
        }),
      }
    );
    const data = await res.json();
    const responseText = data["candidates"][0]["content"]["parts"][0]["text"];

    const container = document.querySelector(".llm");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
   <p> ${responseText}</p>
    `;

    container.appendChild(newDiv);
    console.log(responseText);
  } catch (err) {
    console.log(err);
  }
}
getResponseFromLLM();

