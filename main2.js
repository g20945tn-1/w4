const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外はとても寒かったので:insertx:は散歩に出かけました。彼らが:inserty:にたどり着いた時、彼らはしばらく恐怖で見つめ、それから:insertz:を見つめました。Bobは全部見ましたが、驚きませんでした。:insertx:体重は300ポンドでした。';
const insertX = ['ウィリー', 'お父さん', 'サンタクロース'];
const insertY = ['ユニバーサルスタジオ', 'ディズニーランド', '東京タワー'];
const insertZ = ['自然発火', '歩道の水たまりに入った', '忘れ物をして探し回った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}