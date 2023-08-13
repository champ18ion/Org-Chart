const data = [
  {
    "fullName":"company",
    "designation":"",
    "email":"",
    "manager":"",
    "employees":[
      {
        "fullName": "Bob Barker",
        "designation": "Founder",
        "email": "bob.barker@example.com",
        "manager": null,
        "employees": []
      },
      {
        "fullName": "Alice Anderson",
        "designation": "Founder",
        "email": "alice.anderson@example.com",
        "manager": null,
        "employees": [
          {
            "fullName": "David HR",
            "designation": "CHRO",
            "email": "david.hr@example.com",
            "manager": "Alice Anderson",
            "employees": []
          },
          {
            "fullName": "Eric CFO",
            "designation": "CFO",
            "email": "eric.cfo@example.com",
            "manager": "Alice Anderson",
            "employees": []
          },
          {
              "fullName": "Carol CEO",
              "designation": "CEO",
              "email": "carol.ceo@example.com",
              "manager": null,
              "employees": [
                {
                  "fullName": "Frank Sales Mgr",
                  "designation": "Sales Manager",
                  "email": "frank.sales@example.com",
                  "manager": "Carol CEO",
                  "employees": [
                    {
                      "fullName": "Jack Sales TL",
                      "designation": "Sales Team Leader",
                      "email": "jack.sales@example.com",
                      "manager": "Frank Sales Mgr",
                      "employees": [
                        {
                          "fullName": "Rachel Sales Rep",
                          "designation": "Sales Representative",
                          "email": "rachel.sales@example.com",
                          "manager": "Jack Sales TL"
                        },
                        {
                          "fullName": "Sam Sales Rep",
                          "designation": "Sales Representative",
                          "email": "sam.sales@example.com",
                          "manager": "Jack Sales TL"
                        }
                        // ... other sales representatives
                      ]
                    },
                    {
                      "fullName": "Kelly Sales TL",
                      "designation": "Sales Team Leader",
                      "email": "kelly.sales@example.com",
                      "manager": "Frank Sales Mgr",
                      "employees": [
                        {
                          "fullName": "Tina Sales Rep",
                          "designation": "Sales Representative",
                          "email": "tina.sales@example.com",
                          "manager": "Kelly Sales TL"
                        },
                        {
                          "fullName": "Victor Sales Rep",
                          "designation": "Sales Representative",
                          "email": "victor.sales@example.com",
                          "manager": "Kelly Sales TL"
                        }
                        // ... other sales representatives
                      ]
                    }
                    // ... other sales managers and team leaders
                  ]
                },
                {
                  "fullName": "Grace Marketing Mgr",
                  "designation": "Marketing Manager",
                  "email": "grace.marketing@example.com",
                  "manager": "Carol CEO",
                  "employees": [
                    {
                      "fullName": "Leo Mktg TL",
                      "designation": "Marketing Team Leader",
                      "email": "leo.marketing@example.com",
                      "manager": "Grace Marketing Mgr",
                      "employees": [
                        {
                          "fullName": "Wendy Mktg Rep",
                          "designation": "Marketer",
                          "email": "wendy.marketing@example.com",
                          "manager": "Leo Mktg TL"
                        },
                        {
                          "fullName": "Xavier Mktg Rep",
                          "designation": "Marketer",
                          "email": "xavier.marketing@example.com",
                          "manager": "Leo Mktg TL"
                        }
                        // ... other marketers
                      ]
                    }
                    // ... other marketing team leaders
                  ]
                },
                {
                  "fullName": "Henry Ops Mgr",
                  "designation": "Operations Manager",
                  "email": "henry.ops@example.com",
                  "manager": "Carol CEO",
                  "employees": [
                    {
                      "fullName": "Nathan Ops TL",
                      "designation": "Operations Team Leader",
                      "email": "nathan.ops@example.com",
                      "manager": "Henry Ops Mgr",
                      "employees": [
                        {
                          "fullName": "Yara Ops Staff",
                          "designation": "Operations Staff",
                          "email": "yara.ops@example.com",
                          "manager": "Nathan Ops TL"
                        },
                        {
                          "fullName": "Zach Ops Staff",
                          "designation": "Operations Staff",
                          "email": "zach.ops@example.com",
                          "manager": "Nathan Ops TL"
                        }
                        // ... other operations staff
                      ]
                    },
                    {
                      "fullName": "Olivia Ops TL",
                      "designation": "Operations Team Leader",
                      "email": "olivia.ops@example.com",
                      "manager": "Henry Ops Mgr",
                      "employees": [
                        // ... other operations team members
                      ]
                    }
                    // ... other operations team leaders
                  ]
                },
                {
                  "fullName": "Irene Tech Mgr",
                  "designation": "Technology Manager",
                  "email": "irene.tech@example.com",
                  "manager": "Carol CEO",
                  "employees": [
                    {
                      "fullName": "Paul Tech TL",
                      "designation": "Technology Team Leader",
                      "email": "paul.tech@example.com",
                      "manager": "Irene Tech Mgr",
                      "employees": [
                        {
                          "fullName": "Alex Tech Staff",
                          "designation": "Technology Staff",
                          "email": "alex.tech@example.com",
                          "manager": "Paul Tech TL"
                        },
                        {
                          "fullName": "Bella Tech Staff",
                          "designation": "Technology Staff",
                          "email": "bella.tech@example.com",
                          "manager": "Paul Tech TL"
                        },
                        {
                          "fullName": "Chris Tech Staff",
                          "designation": "Technology Staff",
                          "email": "chris.tech@example.com",
                          "manager": "Paul Tech TL"
                        },
                        {
                          "fullName": "Dana Tech Staff",
                          "designation": "Technology Staff",
                          "email": "dana.tech@example.com",
                          "manager": "Paul Tech TL"
                        }
                        // ... other technology staff
                      ]
                    }
                    // ... other technology team leaders
                  ]
                }
                // ... other employees under Carol CEO
              ]
            }
        ]
      },
    ]
  },

    
    // ... other employees and managers
  ];
  
  export default data;
  