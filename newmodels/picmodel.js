const mongoose = require('mongoose');
const PicSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    picname : {type:String}
}
);
module.exports = mongoose.model('Pic',PicSchema);