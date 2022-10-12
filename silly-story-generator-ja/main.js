const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏４２度でとても寒い日でした。:insertx:は出かけました。:inserty:に到着しました。:insertz:Bobはびっくりしていましたが、体重１００ポンドの:insertx:はいたって冷静でした。:inserty:では日常茶飯事だったからです。';
const insertX = ['アンパンマン', 'ハローキティ', '津田梅子'];
const insertY = ['新宿', 'ディズニーシー', '小平キャンパス'];
const insertZ = ['とても混んでいました。', '雪が降っていました。', '強い風が吹いていました。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} キロ`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏４２度', temperature);
    newStory = newStory.replace('100ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
