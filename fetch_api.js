const qna = [];
async function getResponseFromLLM() {
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCX_v0BgR9I1lJw5eIdhhtrvtABRmBrAOo",
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

   
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const responseText = data.candidates[0].content.parts[0].text;

    const container = document.querySelector(".llm");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p>${responseText}</p>`;
    container.appendChild(newDiv);
    console.log(responseText);
  } catch (err) {
    console.log("Error:", err);
  }
}

getResponseFromLLM();
