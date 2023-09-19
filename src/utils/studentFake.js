const Student = require('../models/student'); // Import your Student model
const connect = require('../config/database');

async function dothis (){
  await connect()
  // Add 60 different Indian names to this array
  const indianNames = [
    'Aarav',
    'Aaradhya',
    'Aryan',
    'Ishaan',
    'Aditi',
    'Akshay',
    'Neha',
    'Raj',
    'Sara',
    'Vikram',
    'Anika',
    'Arjun',
    'Kavya',
    'Rahul',
    'Sonia',
    'Yash',
    'Anjali',
    'Ishika',
    'Rohan',
    'Tanvi',
    'Deepak',
    'Juhi',
    'Ria',
    'Tarun',
    'Zara',
    'Esha',
    'Kabir',
    'Meera',
    'Rishabh',
    'Tanya',
    'Avani',
    'Gaurav',
    'Mira',
    'Rohan',
    'Tara',
    'Vani',
    'Ishan',
    'Kiara',
    'Nikhil',
    'Sahana',
    'Veer',
    'Ishita',
    'Krish',
    'Nisha',
    'Sanjay',
    'Vidya',
    'Amit',
    'Kiran',
    'Ritu',
    'Shyam',
    'Vijay',
    'Ayesha',
    'Lakshmi',
    'Riya',
    'Shreya',
    'Vishal',
  ];

  const emails = [
    "john.doe@example.com",
    "jane.smith@example.com",
    "michael.johnson@example.com",
    "susan.wilson@example.com",
    "robert.brown@example.com",
    "lisa.jones@example.com",
    "david.anderson@example.com",
    "mary.davis@example.com",
    "james.martin@example.com",
    "sarah.white@example.com",
    "william.moore@example.com",
    "emily.harris@example.com",
    "charles.thompson@example.com",
    "linda.lee@example.com",
    "joseph.clark@example.com",
    "karen.miller@example.com",
    "richard.young@example.com",
    "patricia.walker@example.com",
    "thomas.hall@example.com",
    "jennifer.hernandez@example.com",
    "daniel.martinez@example.com",
    "nancy.gonzalez@example.com",
    "matthew.rodriguez@example.com",
    "susan.martin@example.com",
    "robert.davis@example.com",
    "laura.moore@example.com",
    "william.johnson@example.com",
    "sarah.smith@example.com",
    "james.anderson@example.com",
    "linda.white@example.com",
    "michael.thomas@example.com",
    "emily.harris@example.com",
    "joseph.clark@example.com",
    "karen.miller@example.com",
    "richard.young@example.com",
    "patricia.walker@example.com",
    "thomas.hall@example.com",
    "jennifer.hernandez@example.com",
    "daniel.martinez@example.com",
    "nancy.gonzalez@example.com",
    "matthew.rodriguez@example.com",
    "susan.martin@example.com",
    "robert.davis@example.com",
    "laura.moore@example.com",
    "william.johnson@example.com",
    "sarah.smith@example.com",
    "james.anderson@example.com",
    "linda.white@example.com",
    "michael.thomas@example.com",
    "olivia.brown@example.com",
    "jacob.wilson@example.com",
    "elizabeth.miller@example.com",
    "ethan.davis@example.com",
    "ava.hall@example.com",
    "noah.clark@example.com",
    "mia.martinez@example.com",
    "liam.johnson@example.com",
    "sofia.anderson@example.com",
    "logan.moore@example.com",
    "amelia.thompson@example.com",
    "lucas.gonzalez@example.com",
    "olivia.smith@example.com",
    "mason.martin@example.com"
  ];
  
  

const counselorIds = [
    '650a21eb51c3b278879c04b9',
    '650a21e851c3b278879c04b5',
    '650a20d3527d09f8fef18890',
  ];
  const registrationIDs = [];

  for (let i = 1; i <= 60; i++) {
    const formattedNumber = String(i).padStart(3, '0');
    const registrationID = `23MCA${formattedNumber}`;
    registrationIDs.push(registrationID);
  }
// Function to create a random student
async function createRandomStudentWithCounselor(counselorId,index)   {
      await Student.create({
      name: indianNames[index],
      registration_id: registrationIDs[index],
      avatar: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png',
      password: '12345',
      email: emails[index],
      cousellor_id: counselorId,
    });
  }

async function generateStudentsWithCounselors() {
    try {
      for (let i = 0; i < 1; i++) {
        const counselorId = counselorIds[i];
        for (let j = 0; j < 20; j++) {
          await createRandomStudentWithCounselor(counselorId,i+j);
        }
      }
      console.log('Generated 60 students with different counselor IDs successfully.');
    } catch (error) {
      console.error('Error generating students:', error);
    }
  }

//   module.exports = generateStudentsWithCounselors;
}
dothis();
generateStudentsWithCounselors();