// const categories = [
//   {
//     id: 1,
//     name: "Electronics",
//     img:"electronics.png",
//     subcategories: [
//       {
//         id: 101,
//         name: "Mobiles",
//         subSubcategories: [
//           { id: 1001, name: "Android" },
//           { id: 1002, name: "iOS" },
//           { id: 1003, name: "Feature Phones" },
//         ],
//       },
//       {
//         id: 102,
//         name: "Laptops",
//         subSubcategories: [
//           { id: 1004, name: "Gaming Laptops" },
//           { id: 1005, name: "Business Laptops" },
//           { id: 1006, name: "2-in-1 Laptops" },
//         ],
//       },
//       {
//         id: 103,
//         name: "Cameras",
//         subSubcategories: [
//           { id: 1007, name: "DSLR" },
//           { id: 1008, name: "Mirrorless" },
//           { id: 1009, name: "Action Cameras" },
//         ],
//       },
//       {
//         id: 104,
//         name: "Audio",
//         subSubcategories: [
//           { id: 1010, name: "Headphones" },
//           { id: 1011, name: "Speakers" },
//           { id: 1012, name: "Soundbars" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Fashion",
//     img:"fashion.png",
//     subcategories: [
//       {
//         id: 201,
//         name: "Men",
//         subSubcategories: [
//           { id: 2001, name: "Clothing" },
//           { id: 2002, name: "Shoes" },
//           { id: 2003, name: "Accessories" },
//         ],
//       },
//       {
//         id: 202,
//         name: "Women",
//         subSubcategories: [
//           { id: 2004, name: "Clothing" },
//           { id: 2005, name: "Shoes" },
//           { id: 2006, name: "Accessories" },
//         ],
//       },
//       {
//         id: 203,
//         name: "Kids",
//         subSubcategories: [
//           { id: 2007, name: "Clothing" },
//           { id: 2008, name: "Toys" },
//           { id: 2009, name: "School Supplies" },
//         ],
//       },
//       {
//         id: 204,
//         name: "Jewelry",
//         subSubcategories: [
//           { id: 2010, name: "Rings" },
//           { id: 2011, name: "Necklaces" },
//           { id: 2012, name: "Earrings" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Home & Living",
//     img:"sofa.png",
//     subcategories: [
//       {
//         id: 301,
//         name: "Decoration",
//         subSubcategories: [
//           { id: 3001, name: "Wall Art" },
//           { id: 3002, name: "Candles & Holders" },
//           { id: 3003, name: "Mirrors" },
//         ],
//       },
//       {
//         id: 302,
//         name: "Furniture",
//         subSubcategories: [
//           { id: 3004, name: "Sofas" },
//           { id: 3005, name: "Chairs" },
//           { id: 3006, name: "Tables" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Books ",
//     img:"books.png",
//     subcategories: [
//       {
//         id: 401,
//         name: "Fiction",
//         subSubcategories: [
//           { id: 4001, name: "Mystery & Thrillers" },
//           { id: 4002, name: "Romance" },
//           { id: 4003, name: "Science Fiction" },
//         ],
//       },
//       {
//         id: 402,
//         name: "Non-Fiction",
//         subSubcategories: [
//           { id: 4004, name: "Self-Help" },
//           { id: 4005, name: "Biographies" },
//           { id: 4006, name: "History" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Sports ",
//     img:"sports.png",
//     subcategories: [
//       {
//         id: 501,
//         name: "Outdoor Recreation",
//         subSubcategories: [
//           { id: 5001, name: "Camping & Hiking" },
//           { id: 5002, name: "Cycling" },
//           { id: 5003, name: "Fishing" },
//         ],
//       },
//       {
//         id: 502,
//         name: "Fitness",
//         subSubcategories: [
//           { id: 5004, name: "Exercise Machines" },
//           { id: 5005, name: "Yoga & Pilates" },
//           { id: 5006, name: "Fitness Accessories" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Grocery",
//     img:"grocery.png",
//     subcategories: [
//       {
//         id: 601,
//         name: "Fruits & Vegetables",
//         subSubcategories: [
//           { id: 6001, name: "Fresh Fruits" },
//           { id: 6002, name: "Fresh Vegetables" },
//           { id: 6003, name: "Herbs & Seasonings" },
//         ],
//       },
//       {
//         id: 602,
//         name: "Beverages",
//         subSubcategories: [
//           { id: 6004, name: "Tea & Coffee" },
//           { id: 6005, name: "Juices" },
//           { id: 6006, name: "Soft Drinks" },
//         ],
//       },
//       {
//         id: 603,
//         name: "Dairy & Eggs",
//         subSubcategories: [
//           { id: 6007, name: "Milk" },
//           { id: 6008, name: "Cheese" },
//           { id: 6009, name: "Eggs" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Health & Wellness",
//     img:"health.png",
//     subcategories: [
//       {
//         id: 701,
//         name: "Vitamins & Supplements",
//         subSubcategories: [
//           { id: 7001, name: "Multivitamins" },
//           { id: 7002, name: "Fish Oil & Omegas" },
//           { id: 7003, name: "Protein Supplements" },
//         ],
//       },
//       {
//         id: 702,
//         name: "Fitness Equipment",
//         subSubcategories: [
//           { id: 7004, name: "Treadmills" },
//           { id: 7005, name: "Weights & Dumbbells" },
//           { id: 7006, name: "Yoga Mats & Accessories" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Travel & Luggage",
//     img:"luggage.png",
//     subcategories: [
//       {
//         id: 801,
//         name: "Luggage",
//         subSubcategories: [
//           { id: 8001, name: "Suitcases" },
//           { id: 8002, name: "Travel Backpacks" },
//           { id: 8003, name: "Duffel Bags" },
//         ],
//       },
//       {
//         id: 802,
//         name: "Travel Accessories",
//         subSubcategories: [
//           { id: 8004, name: "Travel Pillows" },
//           { id: 8005, name: "Travel Adapters" },
//           { id: 8006, name: "Luggage Tags" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Pet Supplies",
//     img:"pet.png",
//     subcategories: [
//       {
//         id: 901,
//         name: "Dog Supplies",
//         subSubcategories: [
//           { id: 9001, name: "Dog Food" },
//           { id: 9002, name: "Dog Beds" },
//           { id: 9003, name: "Dog Toys" },
//         ],
//       },
//       {
//         id: 902,
//         name: "Cat Supplies",
//         subSubcategories: [
//           { id: 9004, name: "Cat Food" },
//           { id: 9005, name: "Cat Litter" },
//           { id: 9006, name: "Cat Furniture" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: "Crafts & DIY",
//     img:"arts.png",
//     subcategories: [
//       {
//         id: 1001,
//         name: "Art Supplies",
//         subSubcategories: [
//           { id: 10001, name: "Paints & Brushes" },
//           { id: 10002, name: "Sketchbooks" },
//           { id: 10003, name: "Craft Tools" },
//         ],
//       },
//       {
//         id: 1002,
//         name: "DIY Kits",
//         subSubcategories: [
//           { id: 10004, name: "Woodworking Kits" },
//           { id: 10005, name: "Embroidery Kits" },
//           { id: 10006, name: "Jewelry Making Kits" },
//         ],
//       },
//     ],
//   },

// ];

// export default categories;



