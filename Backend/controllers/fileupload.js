const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async(req,res) => {
    try {
        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log(path);

        file.mv(path,(err) => {
            console.log(err);
        })

        res.json({
            success:true,
            message:"Local File Uploaded Successfully"
        })

    } catch (error) {
        console.log(error);
    }
}

function isFileTypeSupported(type,supportedType){
    return supportedType.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){
    const option = {folder};
    option.resource_type = "auto";
    if(quality){
        option.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath,option);
}

exports.imageUpload = async(req,res) => {
    try {
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.Imagefile;
        console.log(file);

        const supportedType = ["jpg","jpeg","png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFileToCloudinary(file,"Prince");
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })


        res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"File upload successfully"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

exports.videoUpload = async(req,res) => {
    try {
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;

        const supportedType = ["mp4","mov"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFileToCloudinary(file,"Prince");
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })


        res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"Video upload successfully"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}



exports.imageReduceUpload = async(req,res) => {
    try {
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.Imagefile;
        console.log(file);

        const supportedType = ["jpg","jpeg","png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFileToCloudinary(file,"Prince",30);
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })


        res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"File upload successfully"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}