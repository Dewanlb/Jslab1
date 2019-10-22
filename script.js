let name = "Dewan";
let age = `23`;
let birthday = `April 9th`;
detroitGC = true;

if ((detroitGC = true)) {
  console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan
  I am currently ${age} years old and my birthday is on ${birthday}`);
} else {
  console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan
I am currently ${age} years old and my birthday is on ${birthday}`);
}
let lifeEvents = [
  "I was born in Detroit, Michigan",
  `I graduated from East Detroit High School`,
  `I've worked a few jobs`,
  "I decided to go to Grand Circus"
];
for (let i = 0; i <= 4; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);

  if (randomNumber !== 5) {
    console.log(`${randomNumber} !==5`);
    counter++;
  } else {
    counter++;
    console.log(
      `It took ${counter} iterations  to randomly generate the number 5`
    );
    break;
  }
}
