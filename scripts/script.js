const getStarted = [
  {
  image: 'public/images/solucao-1-teste-programador.png',
  title: 'Create your <br> account',
  description: "Complete your account <br> with some basic information <br> inlcuding your home <br> your work location and <br> your working hours."
  },
  {
    image: 'public/images/solucao-2-teste-programador.png',
    title: 'Plan your <br> journeys',
    description: "Open the app, <br> click the agenda tab <br> and enter your working hours <br> for the coming week. <br> Then you'll be presented <br> with a list of our drivers."
  },
  {
    image: 'public/images/solucao-3-teste-programador.png',
    title: 'Meet your <br> driver',
    description: "Use our chat to get to know <br> your met with our driver. <br> You'll be picked up at <br> your regular location, <br> or agree on an alternative <br> pick-up location."
  },
  {
    image: 'public/images/solucao-4-teste-programador.png',
    title: 'Enjoy your <br> journey',
    description: "Get in, sit back <br> and enjoy your journey <br> that takes you directly <br> to your destination <br> with some free <br> cup of coffee from us."
  },
];

const getStartedPage = document.getElementById('get-started-cards');

getStarted.forEach(item => {
  const div = document.createElement('div')
  const img = document.createElement('img');
  const title = document.createElement('h3');
  const description = document.createElement('p');

  img.src = item.image;
  img.draggable = false;
  title.innerHTML = item.title;
  description.innerHTML = item.description;

  div.append(img, title, description)
  getStartedPage.append(div);
});
