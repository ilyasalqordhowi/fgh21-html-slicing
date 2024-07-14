const eventData = [
  {
    date: "Wed, 15 Nov, 4:00 PM",
    title: "Sights & Sounds Exhibition",
    image: "./assets/image/film1.png",
    people: [
      "./assets/image/people1.png",
      "./assets/image/people2.png",
      "./assets/image/people3.png",
      "./assets/image/people4.png",
    ],
  },
  {
    date: "Thu, 16 Nov, 7:00 PM",
    title: "See it in Gold Class",
    image: "./assets/image/film2.png",
    people: [
      "./assets/image/people1.png",
      "./assets/image/people2.png",
      "./assets/image/people3.png",
      "./assets/image/people4.png",
    ],
  },
  {
    date: "Wed, 15 Nov, 4:00 PM",
    title: "Sights & Sounds Exhibition",
    image: "./assets/image/film1.png",
    people: [
      "./assets/image/people1.png",
      "./assets/image/people2.png",
      "./assets/image/people3.png",
      "./assets/image/people4.png",
    ],
  },
  {
    date: "Thu, 16 Nov, 7:00 PM",
    title: "See it in Gold Class",
    image: "./assets/image/film2.png",
    people: [
      "./assets/image/people1.png",
      "./assets/image/people2.png",
      "./assets/image/people3.png",
      "./assets/image/people4.png",
    ],
  },
  {
    date: "Wed, 15 Nov, 4:00 PM",
    title: "Sights & Sounds Exhibition",
    image: "./assets/image/film1.png",
    people: [
      "./assets/image/people1.png",
      "./assets/image/people2.png",
      "./assets/image/people3.png",
      "./assets/image/people4.png",
    ],
  },
  {
    date: "Thu, 16 Nov, 7:00 PM",
    title: "See it in Gold Class",
    image: "./assets/image/film2.png",
    people: [
      "./assets/image/people1.png",
      "./assets/image/people2.png",
      "./assets/image/people3.png",
      "./assets/image/people4.png",
    ],
  },
];

const eventList = document.getElementById("event-list");

eventData.forEach((event) => {
  const eventBox = document.createElement("div");
  eventBox.className = "event-box";

  const eventImage = document.createElement("img");
  eventImage.src = event.image;
  eventImage.alt = event.title;
  eventBox.appendChild(eventImage);
  eventBox.onclick = () => {
    window.location = "/event.html";
  };

  const eventText = document.createElement("div");
  eventText.className = "event-text";

  const eventTeks = document.createElement("div");
  eventTeks.className = "event-teks";
  const eventDate = document.createElement("div");
  eventDate.textContent = event.date;
  const eventTitle = document.createElement("div");
  eventTitle.textContent = event.title;
  eventTeks.appendChild(eventDate);
  eventTeks.appendChild(eventTitle);
  eventText.appendChild(eventTeks);

  const peopleDiv = document.createElement("div");
  peopleDiv.className = "people";
  event.people.forEach((person) => {
    const personImg = document.createElement("img");
    personImg.src = person;
    personImg.alt = "person";
    peopleDiv.appendChild(personImg);
  });
  eventText.appendChild(peopleDiv);

  eventBox.appendChild(eventText);
  eventList.appendChild(eventBox);
});
