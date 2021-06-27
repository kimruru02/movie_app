import React from 'react';

const foodIlike = [
  {
    name: "kimchi",
    image: "https://t1.daumcdn.net/cfile/tistory/99D9CE4C5D310D5323"
  },
  {
    name: "gogi",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201909/09/425b739d-f09e-49b5-8791-61209c868280.jpg"
  },
  {
    name: "ramen",
    image: "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg"
  }
]

function Food({ name, picture }) {
  console.log(name, picture);
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  )
}

function App() {
  return (
    <div>hello!!
      {foodIlike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
