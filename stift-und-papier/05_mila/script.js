const person = {
    id: 42,
    name: {
        first: "Mila",
        last: "Schneider",
        nick: "Mimi"
    },
    contact: {
        email: "mila@example.com",
        phone: [
            "+41 44 123 45 67",
            "+41 76 987 65 43"
        ],
        address: {
            street: "Bäckergasse 12",
            city: "Zürich",
            zip: "8001",
            country: "CH",
            geo: {
                lat: 47.3769,
                lng: 8.5417
            }
        }
    },
    preferences: {
        theme: "dark",
        languages: [
            "de-CH",
            "en",
            "fr"
        ],
        favorites: {
            animals: [
                "Katze",
                "Eule"
            ],
            foods: [
                {
                    name: "Pizza",
                    toppings: [
                        "Oliven",
                        "Mozzarella"
                    ]
                },
                {
                    name: "Suppe",
                    vegan: true
                }
            ]
        }
    },
    education: [
        {
            type: "Bachelor",
            institute: "ZHAW",
            year: 2020,
            courses: [
                { id: "JS101", title: "Intro JS" },
                { id: "JS201", title: "DOM" }
            ]
        },
        {
            type: "Master",
            institute: "ETH",
            year: 2023,
            courses: [
                { id: "AI301", title: "ML" }
            ]
        }
    ],
    employment: {
        current: {
            company: "Tech AG",
            title: "Frontend Dev",
            start: "2023-04-01",
            projects: [
                {
                    name: "Site Redesign",
                    stack: ["HTML","CSS","JS"]
                }
            ]
        },
        history: [
            {
                company: "Design GmbH",
                title: "Intern",
                start: "2019-06-01",
                end: "2019-12-31"
            },
            {
                company: "StartUp",
                title: "Junior Dev",
                start: "2020-01-01",
                end: "2023-03-31"
            }
        ]
    },
    social: {
        github: "mila",
        twitter: null,
        websites: [
            {
                label: "Portfolio",
                url: "https://mila.dev"
            },
            {
                label: "Blog",
                url: "https://blog.mila.dev"
            }
        ]
    }
};
console.log(person);
