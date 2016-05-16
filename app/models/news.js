/**
 * Created by wangdawei on 16-5-16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * Creating user schema.
 * @type {*|Schema}
 */
var NewsSchema = new Schema({
    id: {type: Number , index: {unique: true}},
    web:String,
    title:String,
    newscontent:String,
    time:Number
});

NewsSchema.methods.find = function(callback) {
    return this.model('mongoose').find(callback);
}

module.exports = mongoose.model('news', NewsSchema);

