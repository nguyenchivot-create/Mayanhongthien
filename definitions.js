// ===== Định nghĩa tiếng Anh đơn giản cho trò Word Match (chế độ Hard) =====
const DEFINITIONS = {
  mAnimals: {
    Bat: "An animal that flies at night and sleeps upside down",
    Dolphin: "A clever sea animal that likes to jump and play",
    Kangaroo: "An Australian animal that jumps and carries its baby in a pocket",
    Lion: "A big wild cat; the king of the animals",
    Panda: "A black and white bear that eats bamboo",
    Parrot: "A colorful bird that can copy what people say",
    Penguin: "A black and white bird that swims but cannot fly",
    Shark: "A big sea fish with lots of sharp teeth"
  },
  mFamily: {
    Aunt: "Your mother's or father's sister",
    Cousin: "Your aunt's or uncle's child",
    Daughter: "A girl child of a mother and father",
    Granddaughter: "Your son's or daughter's girl",
    Grandson: "Your son's or daughter's boy",
    Parent: "A mother or a father",
    Son: "A boy child of a mother and father",
    Uncle: "Your mother's or father's brother"
  },
  mClothes: {
    Coat: "A long, warm thing you wear outside in winter",
    Glasses: "You wear them on your nose to see better",
    Helmet: "A hard hat you wear when you ride a bike",
    Jacket: "A short coat",
    Scarf: "You wear it around your neck to keep warm",
    Shorts: "Short trousers for hot days",
    Sweater: "A warm top made of wool",
    Trousers: "Long clothes for your legs"
  },
  mFood: {
    Cheese: "A yellow or white food made from milk",
    Milkshake: "A cold drink made with milk and ice cream",
    Noodles: "Long, thin food that you can eat in soup",
    Pancake: "A flat, round cake you cook in a pan",
    Pasta: "Italian food like spaghetti",
    Salad: "A cold dish of vegetables like lettuce and tomato",
    Sandwich: "Two pieces of bread with food between them",
    Soup: "Hot liquid food you eat with a spoon"
  },
  mHome: {
    Balcony: "A small place outside an upstairs window",
    Basement: "A room under the ground floor of a house",
    Blanket: "A warm cover for your bed",
    Roof: "The top part of a house",
    Shower: "You stand under it to wash",
    Stairs: "You walk up them to go upstairs",
    Toothbrush: "You clean your teeth with it",
    Towel: "You dry yourself with it after a bath"
  },
  mHealth: {
    Cough: "A loud noise from your throat when you are ill",
    Dentist: "A doctor who looks after your teeth",
    Earache: "A pain in your ear",
    Headache: "A pain in your head",
    Hospital: "A place where doctors and nurses help sick people",
    Medicine: "You take it to get better when you are ill",
    Temperature: "When your body is too hot because you are ill",
    Toothache: "A pain in your tooth"
  },
  mWeather: {
    Cloud: "A white or grey thing in the sky",
    Cloudy: "When the sky has lots of clouds",
    Rain: "Water that falls from the clouds",
    Rainbow: "Colors in the sky after the rain",
    Snow: "Cold white flakes that fall in winter",
    Sunny: "When the sun is shining",
    Wind: "Air that moves fast outside",
    Windy: "When there is a lot of wind"
  },
  mTown: {
    Bank: "A place where people keep their money",
    Cinema: "A place where you watch films",
    Library: "A place where you can borrow books",
    Market: "A place outside where people buy and sell food",
    Park: "A green place in town where children play",
    Station: "A place where you get on a train",
    Supermarket: "A very big shop that sells food",
    Zoo: "A place where you can see wild animals"
  },
  mNature: {
    Field: "A big area of grass on a farm",
    Forest: "A place with lots and lots of trees",
    Island: "Land with water all around it",
    Lake: "A big area of water with land all around it",
    Mountain: "A very high hill",
    River: "Water that moves across the land to the sea",
    Village: "A very small town in the countryside",
    Waterfall: "Water falling down from a high place"
  },
  days: {
    Sunday: "The day before Monday",
    Monday: "The first school day of the week",
    Tuesday: "The day after Monday",
    Wednesday: "The day in the middle of the week",
    Thursday: "The day before Friday",
    Friday: "The last school day of the week",
    Saturday: "The day after Friday"
  },
  months: {
    January: "The first month of the year",
    February: "The shortest month of the year",
    March: "The third month of the year",
    April: "The month after March",
    May: "The fifth month of the year",
    June: "The sixth month of the year",
    July: "The month after June",
    August: "The eighth month of the year",
    September: "The ninth month of the year",
    October: "The month before November",
    November: "The eleventh month of the year",
    December: "The last month of the year"
  },
  planets: {
    Mercury: "The planet closest to the Sun",
    Venus: "The hottest planet",
    Earth: "The planet where we live",
    Mars: "The red planet",
    Jupiter: "The biggest planet",
    Saturn: "The planet with big, bright rings",
    Uranus: "The planet that spins on its side",
    Neptune: "The planet farthest from the Sun"
  },
  colors: {
    Red: "The color of a strawberry",
    Orange: "The color of a carrot",
    Yellow: "The color of the sun in drawings",
    Green: "The color of grass",
    Blue: "The color of a clear sky",
    Indigo: "A color between blue and violet",
    Violet: "The last color of the rainbow"
  },
  numbers: {
    One: "The number of noses you have",
    Two: "The number of eyes you have",
    Three: "The number of sides of a triangle",
    Four: "The number of legs a cat has",
    Five: "The number of fingers on one hand",
    Six: "The number of legs an insect has",
    Seven: "The number of days in a week",
    Eight: "The number of legs a spider has",
    Nine: "The number after eight",
    Ten: "The number of toes you have"
  },
  seasons: {
    Spring: "The season when flowers start to bloom",
    Summer: "The hottest season of the year",
    Autumn: "The season when leaves fall from trees",
    Winter: "The coldest season of the year"
  },
  dayTime: {
    Morning: "The time when the sun comes up",
    Noon: "Twelve o'clock in the day",
    Afternoon: "The time after lunch",
    Evening: "The time when the sun goes down",
    Night: "The dark time when we sleep"
  },
  body: {
    Hair: "It grows on top of your head",
    Eyes: "You see with them",
    Nose: "You smell with it",
    Teeth: "You bite and chew food with them",
    Neck: "It joins your head to your body",
    Shoulders: "They are at the top of your arms",
    Stomach: "Food goes here after you eat it",
    Feet: "You stand and walk on them"
  },
  animals: {
    Ant: "A tiny insect that lives in a big group",
    Mouse: "A small animal that loves cheese",
    Cat: "A pet that says meow",
    Dog: "A pet that barks",
    Horse: "A big animal that people can ride",
    Elephant: "A big animal with a long trunk",
    Whale: "The biggest animal in the sea"
  },
  fruits: {
    Apple: "A round red or green fruit",
    Banana: "A long yellow fruit that monkeys love",
    Cherry: "A small red fruit with a stone inside",
    Grape: "A small fruit that grows in bunches",
    Lemon: "A sour yellow fruit",
    Mango: "A sweet yellow fruit with a big seed",
    Orange: "A round fruit with the same name as its color",
    Peach: "A soft fruit with fuzzy skin"
  },
  ordinals: {
    First: "Number 1 in a line",
    Second: "Number 2 in a line",
    Third: "Number 3 in a line",
    Fourth: "Number 4 in a line",
    Fifth: "Number 5 in a line",
    Sixth: "Number 6 in a line",
    Seventh: "Number 7 in a line",
    Eighth: "Number 8 in a line",
    Ninth: "Number 9 in a line",
    Tenth: "Number 10 in a line",
    Eleventh: "Number 11 in a line",
    Twelfth: "Number 12 in a line"
  },
  tens: {
    Ten: "Five plus five",
    Twenty: "Two tens",
    Thirty: "Three tens",
    Forty: "Four tens",
    Fifty: "Half of one hundred",
    Sixty: "The number of minutes in an hour",
    Seventy: "Seven tens",
    Eighty: "Eight tens",
    Ninety: "Nine tens",
    Hundred: "Ten tens"
  },
  time: {
    Second: "A very short time; sixty make a minute",
    Minute: "Sixty seconds",
    Hour: "Sixty minutes",
    Day: "Twenty-four hours",
    Week: "Seven days",
    Month: "About four weeks",
    Year: "Twelve months",
    Decade: "Ten years",
    Century: "One hundred years"
  },
  butterfly: {
    Egg: "A tiny thing a butterfly lays on a leaf",
    Caterpillar: "A small crawling animal that eats leaves",
    Chrysalis: "A hard case where a caterpillar changes",
    Butterfly: "An insect with big colorful wings"
  },
  growing: {
    Baby: "A very young child who cannot walk yet",
    Toddler: "A young child who is learning to walk",
    Child: "A young boy or girl",
    Teenager: "A person from thirteen to nineteen years old",
    Adult: "A grown-up person",
    Elderly: "Very old people, like great-grandparents"
  },
  bigNumbers: {
    Hundred: "Ten tens",
    Thousand: "Ten hundreds",
    Million: "One thousand thousands",
    Billion: "One thousand millions"
  },
  length: {
    Millimeter: "The smallest mark on a ruler",
    Centimeter: "Ten millimeters",
    Meter: "One hundred centimeters",
    Kilometer: "One thousand meters"
  },
  waterCycle: {
    Evaporation: "Water turns into vapor and rises up",
    Condensation: "Vapor cools down and makes clouds",
    Precipitation: "Water falls from clouds as rain or snow",
    Collection: "Water gathers in rivers, lakes and seas"
  },
  jobs: {
    Artist: "A person who paints or draws",
    Baker: "A person who makes bread and cakes",
    Chef: "A person who cooks in a restaurant",
    Dentist: "A doctor who looks after your teeth",
    Engineer: "A person who designs bridges and machines",
    Farmer: "A person who grows food and keeps animals",
    Nurse: "A person who looks after sick people in a hospital",
    Pilot: "A person who flies a plane",
    Teacher: "A person who helps you learn at school"
  }
};
