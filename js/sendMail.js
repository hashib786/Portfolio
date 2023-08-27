export const sendMail = () => {
  const mailForm = document.getElementById("sendMailForm");

  mailForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const response = await fetch(
      "https://send-mail-hashib.onrender.com/sendMail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          subject: subject.value,
          name: name.value,
          message: message.value,
        }),
      }
    );

    if (response.ok) {
      const newPost = await response.json();
      name.textContent = "";
      email.textContent = "";
      subject.textContent = "";
      message.textContent = "";
    } else {
      console.error("Error creating post:", response.statusText);
    }
  });
};
