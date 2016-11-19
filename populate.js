var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/band-together');
var Profile = require('./models/profile');


function addProfile(name, age, area, instruments, style, needs) {
 new Profile({
   name: name,
   age: age,
   area: area,
   instruments: instruments,
   experience: experience,
   style: style,
   needs: needs,
   updatedAt: Date.now()
 }).save( function(err, profile) {
   console.log('Saved')
 });
}

addProfile('Juan Pablo Villalobos', '102','harp','50','thrash','family')
addProfile('Jonathan Stansbury','12','Guitar','1','Classical','Drummer')
addProfile('Jorge Sanchez','24','Drums','3','Classical','Guitar')
addProfile('Greg Jeffs','30','Bass','10','Classical','Band')
addProfile('Nhi Doan','30','Triangle','15','Experimental','Band')
addProfile('Jack Reacher','23','Keys','6','Instrumental','Band')
addProfile('Janice Wong','42','Vocals','14','Soul','Band')
addProfile('Sean John','29','Guitar','12','Funk','Band')
addProfile('Andrew Dick','25','Bass','6','Rock','Band')
addProfile('Frank Sanders','21','Drums','5','Rock','Band')
addProfile('Henry Jim John Tolkien','52','Vocals','40','Folk','Band')
addProfile('Jerry Haus','27','Guitar','15','Jazz','Band')
addProfile('Danny Daze','25','DJ','12','Deep House','Band')
addProfile('Elijah Wood','25','Violin','12','shoegaze','Band')
