export default {
  name: {
    first: 'Michael',
    last: 'Henning'
  },
  objective:
    'Full stack software engineer with specialty in web development looking to join an organization where quick learning, strong attention to detail, and keen desire to improve development practices will be useful in the delivery of products that meet user needs.',
  links: [
    {
      icon_name: 'linkedin',
      text: '/in/myklhenn',
      url: 'https://www.linkedin.com/in/myklhenn'
    },
    {
      icon_name: 'github',
      text: 'myklhenn',
      url: 'https://www.github.com/myklhenn'
    }
  ],
  experience_list: [
    {
      job_title: 'Full Stack Software Engineering Intern',
      company: 'Dealer Information Systems (DIS) Corporation',
      time_range: 'January 2018 - September 2018',
      location: 'Bellingham, WA',
      image_name: 'dis-logo',
      details: [
        {
          data:
            'Developed and deployed new components of the web interface of our business software',
          sub_details: [
            'AngularJS front end, Java back end (Spring Framework), SQL database'
          ]
        },
        'Used webhooks to integrate an email analytics service with existing email distribution and bookkeeping systems',
        'Implemented an event-triggered webhook system for contacting third-party APIs when our database is updated',
        'Built 56 Java unit tests for the integrations mentioned above',
        'Created a file watching and copying script for team to speed up testing',
        'Onboarded five new teammates and mentored them on key components of their new roles'
      ]
    },
    {
      job_title: 'Teaching Assistant',
      company: 'Western Washington University MIS Department',
      time_range: 'September 2017 - December 2017',
      location: 'Bellingham, WA',
      image_name: 'wwu-logo',
      details: [
        'Course title: "Fundamentals of Website Development and Management"',
        'An introduction to HTML/CSS, server-side PHP programming, and SQL queries',
        'Led open computer lab sessions and provided personal mentorship'
      ]
    }
  ],
  project_list: [
    {
      name: 'RoomDisplay',
      time_range: 'March 2017 - March 2018',
      video_id: '',
      video_source: '',
      image_name: 'rd-logo',
      details: [
        {
          data:
            'Web-based software for scheduling use of university conference rooms and faculty office spaces',
          sub_details: [
            'TypeScript-based, with a React front end and a Node.js back end'
          ]
        },
        {
          data:
            'Assembled device containing a Raspberry Pi and a touch screen to run the software in a full-screen web browser',
          sub_details: [
            'Intended for installation near the entrances of conference rooms and faculty offices'
          ]
        }
      ]
    },
    {
      name: 'Near Field Playlist',
      time_range: 'October 2017 – December 2017',
      video_id: 'p-5bATu72us',
      video_source: 'youtube',
      image_name: 'nfp-logo',
      details: [
        'Android application for inter-device music playlist collaboration',
        "Music/playlists managed and retrieved via Spotify's Web API",
        'Song identifiers exchanged between devices via Near Field Communications (NFC) radios',
        '"Host" device plays music and waits for "guest" devices to provide song requests'
      ]
    },
    {
      name: 'LapseAnalyzer',
      time_range: 'July 2017 – March 2018',
      video_id: '3rE6XZAVCKY',
      video_source: 'youtube',
      image_name: 'la-screenshot',
      details: [
        'Web-based visualization generator and analytics tool for smoking cessation studies',
        'Developed a UI for selecting graph parameters and created an event-aligned “stream graph” visualization',
        'Accepted into Grace Hopper Conference 2018 Student Research Competition'
      ]
    }
  ],
  education_list: [
    {
      school: 'Western Washington University',
      details: [
        'Computer Science, BS',
        'Web Programmer Certificate, Internet Studies Center'
      ],
      image_name: 'wwu-logo'
    }
  ]
};
