import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "MaCNSS",
    link: "https://www.cnss.ma/",
    logo: "https://www.maroc.ma/sites/default/files/styles/thumbnail_detail_mobile/public/image_appstore/logo_cnss.png",
  },
});

const CreateUserMail = async (email : string, username : string , refundablePrice: number) => {
  const template = {
    body: {
        name: username,
        intro: `Welcome to MaCNSS, We're very excited to have you on board.`,
        outro: `this is your refundable price : <b>${refundablePrice} DH</b>.`,
    },
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: '"MaCNSS" <no-reply@gmail.com>',
    to: email,
    subject: "Refundable things",
    text: `${refundablePrice}`,
    html: mailGenerator.generate(template),
  });
  //   return info;
};

export { CreateUserMail };