var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/band-together');
var Profile = require('./models/profile');


function addProfile(name, email, age, area, instruments, experience, style, needs) {
 new Profile({
   name: name,
   email: email,
   age: age,
   area: area,
   instruments: instruments,
   experience: experience,
   style: style,
   needs: needs,
   updatedAt: Date.now()
 }).save( function(err, profile) {
   console.log(profile);
   console.log(err)
 });
}

addProfile('Juan Pablo Villalobos','', 102, 'SLC', 'harp',50,'thrash','family')
addProfile('Jonathan Stansbury','',12,'SLC','Guitar',1, 'Classical','Drummer')
addProfile('Jorge Sanchez','', 24,'SLC','Drums',3, 'Classical','Guitar')
addProfile('Greg Jeffs','',30,'SLC','Bass',10, 'Classical','Band')
addProfile('Nhi Doan','',30,'SLC','Triangle',15, 'Experimental','Band')
addProfile('Jack Reacher','',23,'SLC','Keys',6,'Instrumental','Band')
addProfile('Janice Wong','',42,'SLC','Vocals',14,'Soul','Band')
addProfile('Sean John','',29,'SLC','Guitar',12,'Funk','Band')
addProfile('Andrew Dick','',25,'SLC','Bass',6,'Rock','Band')
addProfile('Frank Sanders','',21,'SLC','Drums',5,'Rock','Band')
addProfile('Henry Jim John Tolkien','',52,'SLC','Vocals',40,'Folk','Band')
addProfile('Jerry Haus','',27,'SLC','Guitar',15,'Jazz','Band')
addProfile('Danny Daze','',25,'SLC','DJ',12,'Deep House','Band')
addProfile('Elijah Wood','',25,'SLC','Violin',12,'shoegaze','Band')
