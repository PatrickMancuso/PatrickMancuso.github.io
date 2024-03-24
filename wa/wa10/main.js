const customName = document.getElementById('customName');
const randomize = document.querySelector('#randomize');
const story = document.querySelector('#story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// Updated raw text strings with a complete story
const storyText = "It was a typical Saturday afternoon in :inserty:, and :insertx: was feeling a bit adventurous. 'I could go for something different today,' thought :insertx: to themselves. Just then, a curious incident involving :insertz: happened right in front of them. Most people would be shocked, but :insertx:, being no ordinary person and weighing a cool 300 pounds, took it in stride. In fact, :insertx: decided to join in, making it an afternoon to remember. Everyone who saw the event, including Bob, couldn't stop talking about it for weeks.";

// Modified insert arrays for a more unique and complete story
const insertX = ['Alex the Unlikely Hero', 'Jordan the Space Explorer', 'Charlie the Time Traveler'];
const insertY = ['the local museum', 'a distant galaxy', 'the depths of the ocean'];
const insertZ = ['a group of aliens landed', 'a time portal opened up', 'a giant octopus appeared'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429) + ' stone';
    const temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
