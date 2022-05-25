const nodemailer = require('nodemailer')


async function main() {
// Test account for testing
let testAccount = await nodemailer.createTestAccount();


let transporter = nodemailer.createTransport({
    host: "stm.mail.yahoo.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
    tls:{
        rejectUnauthorized: false
    }
  });


let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "dark_best_08@yahoo.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);