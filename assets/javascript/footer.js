
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