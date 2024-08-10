const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }
})

fileSchema.post("save",async function(doc){
    try {
        console.log("DOC",doc);

        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from:`Prince`,
            to:doc.email,
            subject:"New File Uploaded on Cloudinary",
            html:`<h2>Hello Jee</h2> <p>file Uploaded view here:<a href="${doc.imageUrl}"> ${doc.imageUrl}</a></p>`
        })
        console.log(info);
    } catch (error) {
        console.error(error);
    }
})


const file = mongoose.model("File",fileSchema);
module.exports = file;