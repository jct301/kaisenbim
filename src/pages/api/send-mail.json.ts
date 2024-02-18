import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_MAIL, SMTP_PASSWORD, SMTP_PORT } from "../../constants";



export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const formData = await request.json();
    const email = formData.email;
    const message = formData.message;
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
      /[\r\n]/g,
      "<br>"
    )}</div>`;
    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASSWORD,
      },
    });

    console.log({ email, message });
    let mailDetails = {
      from: email,
      to: SMTP_MAIL,
      text: message,
      html: html,
    };

    let mailresult;
    try {
      mailresult = await mailTransporter.sendMail(mailDetails);
    } catch (error) {
      console.log("******* Error: ", error);
    }
    console.log("Message sent: %s", mailresult?.messageId);

    // return endpoint response
    return new Response(JSON.stringify(mailDetails), {
      status: 200,
    });
  }

  return new Response(null, { status: 400 }); // if not a json request
};
