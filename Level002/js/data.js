//Data
var dataColor = ["red", "yellow", "gold", "green", "grey", "blue"];
var dataPeople = [{
  "name": "Drew Prescott",
  "age": 27
}, {
  "name": "Jeremy Prescott",
  "age": 26},
{
  "name": "Landon Prescott",
  "age": 1.4
}, {
  "name": "Mallory Prescott",
  "age": 26
}];
var dataContent = [{
  "heading": "This is the first story.",
  "by": "Michael",
  "story": "Bacon ipsum dolor sit amet ea voluptate incididunt nostrud short loin, porchetta culpa aliquip. Sirloin drumstick ground round t-bone, spare ribs ea meatloaf pork loin ball tip tempor tenderloin aliquip. Labore irure nisi sunt occaecat chuck. Aliquip beef ham, mollit aute tempor pig tongue flank cillum. Ut pancetta in ball tip adipisicing dolor. Excepteur brisket corned beef laborum occaecat, andouille labore t-bone ea cupidatat bacon capicola pig anim sed. Mollit short loin do tempor magna prosciutto"
}, {
  "heading": "This is the second story.",
  "by": "Nichole",
  "story": "Officia culpa sunt rump ribeye laboris. Velit cillum leberkas, aliquip doner in pork chop dolore meatloaf reprehenderit filet mignon. Consequat chuck ullamco consectetur pastrami eu ribeye labore pork. Spare ribs jowl frankfurter cillum in."
}, {
  "heading": "This is the third story.",
  "by": "Oliver",
  "story": "In ea dolor occaecat non aliquip culpa ullamco pastrami frankfurter consectetur prosciutto duis brisket jerky. Sint swine beef turkey. Doner salami pork turducken consectetur spare ribs. Turducken quis leberkas, duis nulla strip steak pork belly eiusmod irure adipisicing boudin meatloaf. In veniam shoulder frankfurter magna sint velit venison et."
}, {
  "heading": "This is the fourth story.",
  "by": "Peter",
  "story": "Non consectetur reprehenderit ut, deserunt ribeye laborum nostrud andouille sirloin hamburger magna proident labore. Irure ball tip kielbasa sunt. In brisket swine, pig andouille proident shoulder cow ut aliquip laboris salami kevin. Non qui capicola, pastrami laboris aute spare ribs irure ham beef chuck hamburger ground round. Swine labore short loin spare ribs ullamco sirloin commodo pig nisi culpa biltong andouille tail in. Pork ut eu bacon cillum incididunt consequat pig, sed biltong. Frankfurter pork chop ut, jerky strip steak exercitation occaecat turducken ut."
}, {
  "heading": "This is the fourth story.",
  "by": "Peter",
  "story": "Non consectetur reprehenderit ut, deserunt ribeye laborum nostrud andouille sirloin hamburger magna proident labore. Irure ball tip kielbasa sunt. In brisket swine, pig andouille proident shoulder cow ut aliquip laboris salami kevin. Non qui capicola, pastrami laboris aute spare ribs irure ham beef chuck hamburger ground round. Swine labore short loin spare ribs ullamco sirloin commodo pig nisi culpa biltong andouille tail in. Pork ut eu bacon cillum incididunt consequat pig, sed biltong. Frankfurter pork chop ut, jerky strip steak exercitation occaecat turducken ut."
}];

//Random data provided by http://www.mockaroo.com/ ;)

var randData = [{
    "id": 1,
    "first_name": "Raymond",
    "last_name": "Palmer",
    "email": "rpalmer0@flickr.com",
    "isUser": false
}, {
    "id": 2,
    "first_name": "Maria",
    "last_name": "Anderson",
    "email": "manderson1@rediff.com",
    "isUser": true
}, {
    "id": 3,
    "first_name": "Daniel",
    "last_name": "Cruz",
    "email": "dcruz2@webmd.com",
    "isUser": false
}, {
    "id": 4,
    "first_name": "Melissa",
    "last_name": "Robertson",
    "email": "mrobertson3@sciencedaily.com",
    "isUser": true
}, {
    "id": 5,
    "first_name": "Ruby",
    "last_name": "Scott",
    "email": "rscott4@disqus.com",
    "isUser": false
}, {
    "id": 6,
    "first_name": "Bobby",
    "last_name": "Garza",
    "email": "bgarza5@archive.org",
    "isUser": true
}, {
    "id": 7,
    "first_name": "Ryan",
    "last_name": "Shaw",
    "email": "rshaw6@walmart.com",
    "isUser": true
}, {
    "id": 8,
    "first_name": "Anthony",
    "last_name": "Ward",
    "email": "award7@posterous.com",
    "isUser": false
}, {
    "id": 9,
    "first_name": "Tina",
    "last_name": "Stevens",
    "email": "tstevens8@intel.com",
    "isUser": false
}, {
    "id": 10,
    "first_name": "Brenda",
    "last_name": "Cruz",
    "email": "bcruz9@nba.com",
    "isUser": true
}, {
    "id": 11,
    "first_name": "Jean",
    "last_name": "Perez",
    "email": "jpereza@newyorker.com",
    "isUser": true
}, {
    "id": 12,
    "first_name": "Sean",
    "last_name": "Perry",
    "email": "sperryb@is.gd",
    "isUser": false
}, {
    "id": 13,
    "first_name": "Ronald",
    "last_name": "Foster",
    "email": "rfosterc@hibu.com",
    "isUser": true
}, {
    "id": 14,
    "first_name": "Betty",
    "last_name": "Jones",
    "email": "bjonesd@scientificamerican.com",
    "isUser": true
}, {
    "id": 15,
    "first_name": "Beverly",
    "last_name": "Garcia",
    "email": "bgarciae@mail.ru",
    "isUser": false
}, {
    "id": 16,
    "first_name": "Eric",
    "last_name": "Chapman",
    "email": "echapmanf@vinaora.com",
    "isUser": false
}, {
    "id": 17,
    "first_name": "Patricia",
    "last_name": "Smith",
    "email": "psmithg@domainmarket.com",
    "isUser": true
}, {
    "id": 18,
    "first_name": "Henry",
    "last_name": "Welch",
    "email": "hwelchh@tripod.com",
    "isUser": true
}, {
    "id": 19,
    "first_name": "Jessica",
    "last_name": "Gray",
    "email": "jgrayi@live.com",
    "isUser": true
}, {
    "id": 20,
    "first_name": "Stephanie",
    "last_name": "Lynch",
    "email": "slynchj@artisteer.com",
    "isUser": false
}];
