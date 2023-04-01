import React, { useState, useEffect } from "react";
const PAGE_SIZE = 20;
function Data() {
  // Define three state variables: "items", "currentPage", and "totalPages"
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  // Use the useEffect hook to fetch data from an API
  useEffect(() => {
    // Define an async function named "fetchData" that uses the fetch API to retrieve data from an API endpoint
    async function fetchData() {const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${PAGE_SIZE}`
      );
      const data = await response.json();
      const totalCount = response.headers.get('X-Total-Count');
      const totalPages = Math.ceil(totalCount / PAGE_SIZE);
      setItems(data);
      setTotalPages(totalPages);
    }
    fetchData();
  }, [currentPage]);
  // Define a function named "handlePageClick" that sets the current page
  function handlePageClick(pageNumber) {setCurrentPage(pageNumber);}
  // Check if there are any items in the "items" state variable
  if (!items.length) {
    // Return a "Loading" message if there are no items
    return <div>Loading...</div>;}
  // If there are items, render them in an unordered list
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}--<img src={item.url} alt="horse" /></li>
          
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageClick(pageNumber)}
            disabled={pageNumber === currentPage}>{pageNumber}</button>
        ))}
      </div>
    </div>
  );
}

export default Data;




// import React, { useState, useEffect } from "react";

// const PAGE_SIZE = 10;

// function Data() {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   async function fetchData() {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${PAGE_SIZE}`
//     );
//     const data = await response.json();
//     const totalCount = response.headers.get('X-Total-Count');
//     const totalPages = Math.ceil(totalCount / PAGE_SIZE);
//     setItems(data);
//     setTotalPages(totalPages);
//   }

//   function handlePageClick(pageNumber) {
//     setCurrentPage(pageNumber);
//   }

//   if (!items.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//       <div>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
//           <button key={pageNumber} onClick={() => handlePageClick(pageNumber)}
//             disabled={pageNumber === currentPage}>{pageNumber}</button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Data;



// import React, { useState, useEffect } from "react";

// const PAGE_SIZE = 10;

// function MyComponent() {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   async function fetchData() {
//     const response = await fetch(
//       `https://example.com/api/items?page=${currentPage}&pageSize=${PAGE_SIZE}`
//     );
//     const { data, totalPages } = await response.json();
//     setItems(data);
//     setTotalPages(totalPages);
//   }

//   function handlePageClick(pageNumber) {
//     setCurrentPage(pageNumber);
//   }

//   if (!items.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
//           <button
//             key={pageNumber}
//             onClick={() => handlePageClick(pageNumber)}
//             disabled={pageNumber === currentPage}
//           >
//             {pageNumber}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyComponent;
