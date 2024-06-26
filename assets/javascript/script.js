// navigasi home

const menuBtn = document.getElementById('menu-button')
const nav = document.getElementById('nav')
const navCenter = nav.getElementsByClassName('list-link').item(0)
const navRight = nav.getElementsByClassName('nav-button').item(0)
menuBtn.onclick = () => {
    if (navCenter.getAttribute('style')) {
        navCenter.removeAttribute('style')
    } else {
        navCenter.setAttribute('style', 'display:none;')
    }
    if (navRight.getAttribute('style')) {
        navRight.removeAttribute('style')
    } else {
        navRight.setAttribute('style', 'display:none;')
    }

}  
// button singup
const  btnToSingUp = document.getElementById("to-singup")
btnToSingUp.onclick = () => {
    window.location = "/sing-up.html"
}
// event home

const eventData = [
{
date: 'Wed, 15 Nov, 4:00 PM',
title: 'Sights & Sounds Exhibition',
image: './assets/image/film1.png',
people: [
'./assets/image/people1.png',
'./assets/image/people2.png',
'./assets/image/people3.png',
'./assets/image/people4.png'
]
},
{
date: 'Thu, 16 Nov, 7:00 PM',
title: 'See it in Gold Class',
image: './assets/image/film2.png',
people: [
'./assets/image/people1.png',
'./assets/image/people2.png',
'./assets/image/people3.png',
'./assets/image/people4.png'
]
},
{
date: 'Wed, 15 Nov, 4:00 PM',
title: 'Sights & Sounds Exhibition',
image: './assets/image/film1.png',
people: [
'./assets/image/people1.png',
'./assets/image/people2.png',
'./assets/image/people3.png',
'./assets/image/people4.png'
]
},
{
date: 'Thu, 16 Nov, 7:00 PM',
title: 'See it in Gold Class',
image: './assets/image/film2.png',
people: [
'./assets/image/people1.png',
'./assets/image/people2.png',
'./assets/image/people3.png',
'./assets/image/people4.png'
]
},
{
date: 'Wed, 15 Nov, 4:00 PM',
title: 'Sights & Sounds Exhibition',
image: './assets/image/film1.png',
people: [
'./assets/image/people1.png',
'./assets/image/people2.png',
'./assets/image/people3.png',
'./assets/image/people4.png'
]
},
{
date: 'Thu, 16 Nov, 7:00 PM',
title: 'See it in Gold Class',
image: './assets/image/film2.png',
people: [
'./assets/image/people1.png',
'./assets/image/people2.png',
'./assets/image/people3.png',
'./assets/image/people4.png'
]
},

];

const eventList = document.getElementById('event-list');

eventData.forEach(event => {
const eventBox = document.createElement('div');
eventBox.className = 'event-box';

const eventImage = document.createElement('img');
eventImage.src = event.image;
eventImage.alt = event.title;
eventBox.appendChild(eventImage);

const eventText = document.createElement('div');
eventText.className = 'event-text';

const eventTeks = document.createElement('div');
eventTeks.className = 'event-teks';
const eventDate = document.createElement('div');
eventDate.textContent = event.date;
const eventTitle = document.createElement('div');
eventTitle.textContent = event.title;
eventTeks.appendChild(eventDate);
eventTeks.appendChild(eventTitle);
eventText.appendChild(eventTeks);

const peopleDiv = document.createElement('div');
peopleDiv.className = 'people';
event.people.forEach(person => {
const personImg = document.createElement('img');
personImg.src = person;
personImg.alt = 'person';
peopleDiv.appendChild(personImg);
});
eventText.appendChild(peopleDiv);

eventBox.appendChild(eventText);
eventList.appendChild(eventBox);
});
// footer home 
const footerData = [
    {
        title: 'Wetick',
        items:
            ['About us',
                'Features',
                'Blog',
                'Payments',
                'Mobile App'
            ]
    },
    {
        title: 'Features',
        items: ['Booking',
                'Create Event',
                'Discover',
                'Register'
            ]
    },
    {
        title: 'Company',
        items: ['Partnership',
                'Help',
                'Terms Of Service',
                'Privacy Policy',
                'Sitemap'
            ]
    }
];

const footer = document.getElementById('footer');

footerData.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'footer-section';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'footer-text-title';
    titleDiv.textContent = section.title;
    sectionDiv.appendChild(titleDiv);

    section.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'footer-text';
        itemDiv.textContent = item;
        sectionDiv.appendChild(itemDiv);
    });

    footer.appendChild(sectionDiv);
});
// sing up
 const form = document.getElementById("auth-login")
 form.onsubmit = (e) => {
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    window.location = "/index.html#footer"
 }