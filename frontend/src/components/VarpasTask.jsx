import React from "react";

const VarpasTask = () => {
  const data = [
    {
      name: "Jared Espinoza",
      dob: "2003-05-14",
      timestamp: "2024-12-03 08:32:52",
      father_name: "Travis Gomez",
      mother_name: "Kelly Reynolds",
    },
    {
      name: "Robert Herrera",
      dob: "1973-05-23",
      timestamp: "2024-12-03 08:32:32",
      father_name: "Peter Cardenas",
      mother_name: "Natalie Ramirez",
    },
    {
      name: "John Hobbs",
      dob: "1979-10-30",
      timestamp: "2024-12-03 08:32:07",
      father_name: "Robert Smith",
      mother_name: "Melinda Larson",
    },
    {
      name: "Ashlee Davis",
      dob: "1977-09-17",
      timestamp: "2024-12-03 08:32:04",
      father_name: "Bradley Williams",
      mother_name: "Theresa Harris",
    },
  ];

  const filterTimestamp = data.map((value) => {
    console.log("data", data);
    return data.sort((a, b) => {
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    console.log("filter", filtered_value);
  });

  return (
    <div>
      VarpasTask
      {data.map((value, idx) => (
        <div key={idx}>
          <p>Name: {value.name}</p>
          <p>DOB: {value.dob}</p>
          <p>Timestamp: {value.timestamp}</p>
          <p>Father's Name: {value.father_name}</p>
          <p>Mother's Name: {value.mother_name}</p>
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default VarpasTask;
