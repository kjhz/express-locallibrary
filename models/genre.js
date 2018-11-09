var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var catalog = ["小说", "文艺", "童书", "人文社科", "经管", "成功/励志", "生活", "科技", "教育"]

var genreSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 100}
});

genreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this.id;
});

module.exports = mongoose.model('Genre', genreSchema);