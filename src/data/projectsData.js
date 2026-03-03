// projectsData.js

// ================= ONGOING IMAGES =================
import ongoing1 from "../assets/images/projects/ongoing/project1.jpg";
import ongoing2 from "../assets/images/projects/ongoing/project2.jpg";
import ongoing3 from "../assets/images/projects/ongoing/project3.jpg";
import ongoing4 from "../assets/images/projects/ongoing/project4.jpg";
import ongoing5 from "../assets/images/projects/ongoing/project5.jpg";
import ongoing6 from "../assets/images/projects/ongoing/project6.jpg";

// ================= UPCOMING IMAGES =================
import upcoming1 from "../assets/images/projects/upcoming/project1.jpg";
import upcoming2 from "../assets/images/projects/upcoming/project2.jpg";
import upcoming3 from "../assets/images/projects/upcoming/project3.jpg";
import upcoming4 from "../assets/images/projects/upcoming/project4.jpg";
import upcoming5 from "../assets/images/projects/upcoming/project5.jpg";
import upcoming6 from "../assets/images/projects/upcoming/project6.jpg";

// ================= COMPLETED IMAGES =================
import completed1 from "../assets/images/projects/completed/project1.jpg";
import completed2 from "../assets/images/projects/completed/project2.jpg";
import completed3 from "../assets/images/projects/completed/project3.jpg";
import completed4 from "../assets/images/projects/completed/project4.jpg";
import completed5 from "../assets/images/projects/completed/project5.jpg";
import completed6 from "../assets/images/projects/completed/project6.jpg";

const projects = [

  // ================= ONGOING =================
  {
    id: 1,
    title: "Green Valley Residency",
    status: "ongoing",
    city: "Hyderabad",
    location: "Miyapur",
    type: ["2 BHK", "3 BHK"],
    facing: "North",
    price: 6400,
    floors: 5,
    units: 286,
    image: ongoing1
  },
  {
    id: 2,
    title: "Skyline Heights",
    status: "ongoing",
    city: "Hyderabad",
    location: "Kukatpally",
    type: ["2 BHK", "3 BHK"],
    facing: "East",
    price: 5800,
    floors: 4,
    units: 180,
    image: ongoing2
  },
  {
    id: 3,
    title: "Urban Nest",
    status: "ongoing",
    city: "Hyderabad",
    location: "Gachibowli",
    type: ["2 BHK", "3 BHK"],
    facing: "West",
    price: 7200,
    floors: 6,
    units: 320,
    image: ongoing3
  },
  {
    id: 4,
    title: "Lake View Homes",
    status: "ongoing",
    city: "Hyderabad",
    location: "Tellapur",
    type: ["2 BHK", "3 BHK"],
    facing: "South",
    price: 6900,
    floors: 5,
    units: 240,
    image: ongoing4
  },
  {
    id: 5,
    title: "Elite Towers",
    status: "ongoing",
    city: "Hyderabad",
    location: "Kondapur",
    type: ["2 BHK", "3 BHK"],
    facing: "North-East",
    price: 7500,
    floors: 8,
    units: 420,
    image: ongoing5
  },
  {
    id: 6,
    title: "Harmony Residency",
    status: "ongoing",
    city: "Hyderabad",
    location: "Bachupally",
    type: ["2 BHK", "3 BHK"],
    facing: "North-West",
    price: 5600,
    floors: 4,
    units: 160,
    image: ongoing6
  },

  // ================= UPCOMING =================
  {
    id: 7,
    title: "Royal Enclave",
    status: "upcoming",
    city: "Visakhapatnam",
    location: "Madhurawada",
    type: ["2 BHK", "3 BHK"],
    facing: "North",
    launch: "December 2026",
    image: upcoming1
  },
  {
    id: 8,
    title: "Ocean Breeze",
    status: "upcoming",
    city: "Visakhapatnam",
    location: "Rushikonda",
    type: ["2 BHK", "3 BHK"],
    facing: "East",
    launch: "January 2027",
    image: upcoming2
  },
  {
    id: 9,
    title: "Golden City",
    status: "upcoming",
    city: "Bangalore",
    location: "Whitefield",
    type: ["2 BHK", "3 BHK"],
    facing: "South",
    launch: "March 2027",
    image: upcoming3
  },
  {
    id: 10,
    title: "Hill View Villas",
    status: "upcoming",
    city: "Coorg",
    location: "Madikeri",
    type: ["Villas"],
    facing: "West",
    launch: "April 2027",
    image: upcoming4
  },
  {
    id: 11,
    title: "Central Park Homes",
    status: "upcoming",
    city: "Pune",
    location: "Hinjewadi",
    type: ["2 BHK", "3 BHK"],
    facing: "North-East",
    launch: "February 2027",
    image: upcoming5
  },
  {
    id: 12,
    title: "Sunrise County",
    status: "upcoming",
    city: "Chennai",
    location: "OMR",
    type: ["2 BHK", "3 BHK"],
    facing: "South",
    launch: "May 2027",
    image: upcoming6
  },

  // ================= COMPLETED =================
  {
    id: 13,
    title: "Lakewood Residency",
    status: "completed",
    city: "Hyderabad",
    location: "Madhapur",
    type: ["2 BHK", "3 BHK"],
    facing: "North",
    completedYear: 2024,
    image: completed1
  },
  {
    id: 14,
    title: "Emerald Homes",
    status: "completed",
    city: "Visakhapatnam",
    location: "Lawsons Bay",
    type: ["2 BHK", "3 BHK"],
    facing: "South",
    completedYear: 2023,
    image: completed2
  },
  {
    id: 15,
    title: "Silver Crest",
    status: "completed",
    city: "Bangalore",
    location: "Electronic City",
    type: ["2 BHK", "3 BHK"],
    facing: "East",
    completedYear: 2024,
    image: completed3
  },
  {
    id: 16,
    title: "Green Meadows",
    status: "completed",
    city: "Pune",
    location: "Wakad",
    type: ["2 BHK", "3 BHK"],
    facing: "West",
    completedYear: 2022,
    image: completed4
  },
  {
    id: 17,
    title: "City View Towers",
    status: "completed",
    city: "Chennai",
    location: "Anna Nagar",
    type: ["2 BHK", "3 BHK"],
    facing: "North-West",
    completedYear: 2023,
    image: completed5
  },
  {
    id: 18,
    title: "Parkside Homes",
    status: "completed",
    city: "Kochi",
    location: "Edappally",
    type: ["2 BHK", "3 BHK"],
    facing: "South-East",
    completedYear: 2021,
    image: completed6
  }

];

export default projects;